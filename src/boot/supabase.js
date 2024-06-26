import { boot } from 'quasar/wrappers'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
const supabase = createClient(supabaseUrl, supabaseKey);

export default boot(({ app }) => {

  app.config.globalProperties.$supabase = supabase;
});

export { supabase };
