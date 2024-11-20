import useSupabase from "boot/supabase";

export default function UseNewsletter() {
  const { supabase } = useSupabase();

  const subscribe = async ({ email }) => {
    const payload = {
      email,
      created_at: new Date().toISOString().split("T")[0],
    };

    const { error } = await supabase.from("NewsletterRegister").insert(payload);
    if (error) throw error;
  };

  const unsubscribe = async ({ email }) => {
    const { error } = await supabase
      .from("NewsletterRegister")
      .delete()
      .eq("email", email);
    if (error) throw error;
  };

  return {
    subscribe,
    unsubscribe,
  };
}
