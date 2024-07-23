import { faker } from "@faker-js/faker";

import useSupabase from "boot/supabase";

function fakeResponse(service) {
  return [
    {
      id: 1,
      title: faker.lorem.word(),
      breadcrumb: "{}",
      thumb: faker.image.url(),
      thumb_align: "right",
      text: faker.lorem.paragraphs(8),
      service_name: service,
      action: "",
    },
  ];
}

function formatResponse(data) {
  return data[0];
}

export default function useServicesPost() {
  const { supabase } = useSupabase();

  const getFakerPost = async (service) => {
    const data = fakeResponse(service);
    const response = formatResponse(data);
    return response;
  };

  const getPost = async (service) => {
    let { data, error } = await supabase
      .from("ServicesPosts")
      .select("*")
      .eq("service_name", service);
    if (error) throw error;
    return formatResponse(data);
  };

  return {
    getFakerPost,
    getPost,
  };
}
