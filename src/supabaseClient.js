import { createClient } from "@supabase/supabase-js"

const superbaseUrl = "https://gisymthnkxtptkveucvx.supabase.co"
const superbaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdpc3ltdGhua3h0cHRrdmV1Y3Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MzcxNDksImV4cCI6MjA1ODQxMzE0OX0.T8kFeKPcSdIeM09jdjG-olsVd5_vK2DBwfQjL0zVEnQ"

export const supabase = createClient(superbaseUrl, superbaseAnonKey)