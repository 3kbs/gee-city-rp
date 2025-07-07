// Simple auth service using localStorage for demo purposes
// Replace with proper Supabase integration when available

export interface User {
  id: string;
  email: string;
}

export interface AuthSession {
  user: User;
  access_token: string;
}

const DEMO_ADMIN_EMAIL = 'admin@geecity.com';
const DEMO_ADMIN_PASSWORD = 'admin123';

class AuthService {
  private storageKey = 'gee_city_auth_session';

  async signInWithPassword(credentials: { email: string; password: string }) {
    // Demo authentication - replace with real Supabase calls
    if (credentials.email === DEMO_ADMIN_EMAIL && credentials.password === DEMO_ADMIN_PASSWORD) {
      const session: AuthSession = {
        user: {
          id: '1',
          email: credentials.email,
        },
        access_token: 'demo_token_' + Date.now(),
      };
      
      localStorage.setItem(this.storageKey, JSON.stringify(session));
      return { data: { session }, error: null };
    } else {
      return { data: { session: null }, error: { message: 'Invalid credentials' } };
    }
  }

  async getSession() {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      try {
        const session = JSON.parse(stored);
        return { data: { session }, error: null };
      } catch {
        localStorage.removeItem(this.storageKey);
      }
    }
    return { data: { session: null }, error: null };
  }

  async getUser() {
    const { data } = await this.getSession();
    return { data: { user: data.session?.user || null }, error: null };
  }

  async signOut() {
    localStorage.removeItem(this.storageKey);
    return { error: null };
  }

  onAuthStateChange(callback: (event: string, session: AuthSession | null) => void) {
    // Simple implementation for demo - in real Supabase this would be more sophisticated
    const checkSession = async () => {
      const { data } = await this.getSession();
      callback('SIGNED_IN', data.session);
    };
    
    checkSession();
    
    // Return subscription-like object
    return {
      data: {
        subscription: {
          unsubscribe: () => {
            // Cleanup would go here
          }
        }
      }
    };
  }
}

export const supabase = {
  auth: new AuthService()
};