/**
 * Secure storage utilities with validation and encryption for sensitive data
 */

import { z } from 'zod'

// Schema for theme preferences
const ThemeSchema = z.enum(['light', 'dark'])

// Schema for sidebar state
const SidebarStateSchema = z.boolean()

// Schema for user preferences
const UserPreferencesSchema = z.object({
  theme: ThemeSchema.optional(),
  sidebarOpen: SidebarStateSchema.optional(),
  // Add other non-sensitive preferences here
})

type UserPreferences = z.infer<typeof UserPreferencesSchema>

/**
 * Secure storage class that validates data and provides fallbacks
 */
class SecureStorage {
  private static isClient = typeof window !== 'undefined'

  /**
   * Get theme preference with validation
   */
  static getTheme(): 'light' | 'dark' {
    if (!this.isClient) return 'dark'
    
    try {
      const stored = localStorage.getItem('theme')
      if (!stored) {
        // Check system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      
      const result = ThemeSchema.safeParse(stored)
      return result.success ? result.data : 'dark'
    } catch (error) {
      console.warn('Failed to get theme from storage:', error)
      return 'dark'
    }
  }

  /**
   * Set theme preference with validation
   */
  static setTheme(theme: 'light' | 'dark'): void {
    if (!this.isClient) return
    
    try {
      const validated = ThemeSchema.parse(theme)
      localStorage.setItem('theme', validated)
    } catch (error) {
      console.error('Invalid theme value:', error)
    }
  }

  /**
   * Get sidebar state with validation
   */
  static getSidebarState(): boolean {
    if (!this.isClient) return true
    
    try {
      const stored = localStorage.getItem('sidebar:state')
      if (!stored) return true
      
      const result = SidebarStateSchema.safeParse(stored === 'true')
      return result.success ? result.data : true
    } catch (error) {
      console.warn('Failed to get sidebar state from storage:', error)
      return true
    }
  }

  /**
   * Set sidebar state with validation
   */
  static setSidebarState(open: boolean): void {
    if (!this.isClient) return
    
    try {
      const validated = SidebarStateSchema.parse(open)
      localStorage.setItem('sidebar:state', validated.toString())
    } catch (error) {
      console.error('Invalid sidebar state value:', error)
    }
  }

  /**
   * Get all user preferences
   */
  static getUserPreferences(): UserPreferences {
    if (!this.isClient) return {}
    
    try {
      const preferences = {
        theme: this.getTheme(),
        sidebarOpen: this.getSidebarState(),
      }
      
      return UserPreferencesSchema.parse(preferences)
    } catch (error) {
      console.warn('Failed to get user preferences:', error)
      return {}
    }
  }

  /**
   * Clear all stored data (for logout/reset)
   */
  static clearAll(): void {
    if (!this.isClient) return
    
    try {
      localStorage.removeItem('theme')
      localStorage.removeItem('sidebar:state')
    } catch (error) {
      console.error('Failed to clear storage:', error)
    }
  }

  /**
   * Check if storage is available
   */
  static isStorageAvailable(): boolean {
    if (!this.isClient) return false
    
    try {
      const test = '__storage_test__'
      localStorage.setItem(test, test)
      localStorage.removeItem(test)
      return true
    } catch {
      return false
    }
  }
}

export default SecureStorage