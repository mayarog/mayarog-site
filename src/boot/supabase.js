import { boot } from 'quasar/wrappers'
import { createClient } from '@supabase/supabase-js'
import('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  const supabase = createClient(supabaseUrl, supabaseKey);

  app.config.globalProperties.$supabase = supabase;
})
