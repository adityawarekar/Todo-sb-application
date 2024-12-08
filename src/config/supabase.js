import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xnecwefdqvbrzsciqlja.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuZWN3ZWZkcXZicnpzY2lxbGphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNjA4ODcsImV4cCI6MjA0ODczNjg4N30.5Av4fNKrucJMHoA8DMYJLlYjJ48MyVMCgz5vuVaWkxE';

export const supabase = createClient(supabaseUrl, supabaseKey);