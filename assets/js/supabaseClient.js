import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://azdnchmxxjovkjauuuud.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6ZG5jaG14eGpvdmtqYXV1dXVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0NjQzODMsImV4cCI6MjA1NTA0MDM4M30.97qDV2vXXnEOS56_k-BN-NWtkYafzWozcBzfQp2puAc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY); 