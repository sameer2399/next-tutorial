import AboutUsComponent from "@/components/AboutUs/AboutUsComponent";
import React from "react";

type Props = {
  params: { slug: string };
};

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <AboutUsComponent slug={params.slug} />
  );
};

export default Page;
