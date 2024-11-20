import useSupabase from "boot/supabase";

export default function UseContactsRegister() {
  const { supabase } = useSupabase();

  const create = async ({ name, email, type, message, subject }) => {
    const payload = {
      name,
      email,
      type,
      message,
      subject,
    };

    const { error } = await supabase.from("ContactsRegister").insert(payload, { returning: "minimal" });
    if (error) throw error;
  };

  return {
    create
  };
}
