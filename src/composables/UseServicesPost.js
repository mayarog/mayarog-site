import { faker } from "@faker-js/faker";

import useSupabase from "boot/supabase";

function fakeResponse() {
  return {
    id: 1,
    title: faker.lorem.word(),
    breadcrumb: "{}",
    thumb: faker.image.url(),
    thumb_align: "left",
    text: faker.lorem.paragraphs(10),
    action: "",
  };
}

export default function useServicesPost() {
  const { supabase } = useSupabase();

  const getPost = async () => {
    const response = fakeResponse();
    return response;
  };

  return {
    getPost,
  };
}
