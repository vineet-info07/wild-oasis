import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wvgmybxowixrniygtywn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2Z215Ynhvd2l4cm5peWd0eXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzODIzOTMsImV4cCI6MjA1OTk1ODM5M30.FkUapyKAVwxrQcswr7GtUFEVXx81K0vp08Qcq2Lj9L4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
