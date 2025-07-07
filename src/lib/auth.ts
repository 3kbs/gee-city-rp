// Auth service that uses real Supabase authentication
import { supabase as realSupabase } from '@/integrations/supabase/client';

export interface User {
  id: string;
  email: string;
}

export interface AuthSession {
  user: User;
  access_token: string;
}

// Demo admin credentials for easy login
const DEMO_ADMIN_EMAIL = 'admin@geecity.com';
const DEMO_ADMIN_PASSWORD = 'GWQIFTZWTCW124124!"§!"§';

class AuthService {
  async signInWithPassword(credentials: { email: string; password: string }) {
    // If using demo credentials, create a real Supabase user or sign in
    if (credentials.email === DEMO_ADMIN_EMAIL && credentials.password === DEMO_ADMIN_PASSWORD) {
      // Try to sign in with Supabase
      const { data, error } = await realSupabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });
      
      if (error && error.message.includes('Invalid login credentials')) {
        // User doesn't exist, try to sign up
        const { data: signUpData, error: signUpError } = await realSupabase.auth.signUp({
          email: credentials.email,
          password: credentials.password,
        });
        
        if (signUpError) {
          return { data: { session: null }, error: signUpError };
        }
        
        return { data: signUpData, error: null };
      }
      
      return { data, error };
    } else {
      return { data: { session: null }, error: { message: 'Invalid credentials' } };
    }
  }

  async getSession() {
    return await realSupabase.auth.getSession();
  }

  async getUser() {
    return await realSupabase.auth.getUser();
  }

  async signOut() {
    return await realSupabase.auth.signOut();
  }

  onAuthStateChange(callback: (event: string, session: any) => void) {
    return realSupabase.auth.onAuthStateChange(callback);
  }
}

export const supabase = {
  auth: new AuthService()
};