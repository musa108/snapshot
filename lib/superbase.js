import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kvuxrbsnidfsdzloadjd.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2dXhyYnNuaWRmc2R6bG9hZGpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwMDUyMjksImV4cCI6MjAyODU4MTIyOX0.jNGdhm0-DyqdknL1m9fMjNbGWObdYkfy6Uw8at9eMLo';

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
