/**
 * Input validation schemas and utilities
 */

import { z } from 'zod'

// Chat message validation
export const ChatMessageSchema = z.object({
  text: z.string()
    .min(1, 'Message cannot be empty')
    .max(1000, 'Message too long')
    .regex(/^[^<>]*$/, 'Invalid characters detected'), // Prevent basic HTML injection
  type: z.enum(['normal', 'suggestion', 'analysis', 'alert', 'reflection', 'uncertainty']).optional(),
})

// User input validation for chat interface
export const ChatInputSchema = z.string()
  .min(1, 'Input cannot be empty')
  .max(1000, 'Input too long')
  .transform((str) => str.trim()) // Sanitize by trimming whitespace
  .refine((str) => !/<script|javascript:|on\w+=/i.test(str), {
    message: 'Invalid input detected'
  })

// Theme validation
export const ThemeSchema = z.enum(['light', 'dark'])

// Navigation validation
export const RouteSchema = z.string()
  .regex(/^\/[a-zA-Z0-9\-_.\/]*$/, 'Invalid route format')

// Form data validation
export const ContactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name too long')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  email: z.string()
    .email('Invalid email format')
    .max(100, 'Email too long'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message too long')
    .regex(/^[^<>]*$/, 'Invalid characters in message'),
})

// API response validation
export const APIResponseSchema = z.object({
  success: z.boolean(),
  data: z.any().optional(),
  error: z.string().optional(),
  timestamp: z.string().datetime().optional(),
})

/**
 * Sanitize user input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .substring(0, 1000) // Limit length
}

/**
 * Validate and sanitize chat message
 */
export function validateChatMessage(input: string): { isValid: boolean; sanitized: string; error?: string } {
  try {
    const sanitized = sanitizeInput(input)
    const result = ChatInputSchema.safeParse(sanitized)
    
    if (!result.success) {
      return {
        isValid: false,
        sanitized,
        error: result.error.issues[0]?.message || 'Invalid input'
      }
    }
    
    return {
      isValid: true,
      sanitized: result.data
    }
  } catch (error) {
    return {
      isValid: false,
      sanitized: sanitizeInput(input),
      error: 'Validation error'
    }
  }
}

/**
 * Rate limiting utility
 */
export class RateLimit {
  private requests: Map<string, number[]> = new Map()
  
  constructor(
    private maxRequests: number = 10,
    private windowMs: number = 60000 // 1 minute
  ) {}
  
  isAllowed(identifier: string): boolean {
    const now = Date.now()
    const userRequests = this.requests.get(identifier) || []
    
    // Remove old requests outside the window
    const validRequests = userRequests.filter(time => now - time < this.windowMs)
    
    if (validRequests.length >= this.maxRequests) {
      return false
    }
    
    validRequests.push(now)
    this.requests.set(identifier, validRequests)
    return true
  }
  
  getRemainingRequests(identifier: string): number {
    const userRequests = this.requests.get(identifier) || []
    const now = Date.now()
    const validRequests = userRequests.filter(time => now - time < this.windowMs)
    return Math.max(0, this.maxRequests - validRequests.length)
  }
}

export type ChatMessage = z.infer<typeof ChatMessageSchema>
export type ContactForm = z.infer<typeof ContactFormSchema>
export type APIResponse = z.infer<typeof APIResponseSchema>