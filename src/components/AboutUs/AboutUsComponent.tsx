'use client';
import { usePathname, useRouter } from "next/navigation";

type Props = {
  slug?: string;
};

const AboutUsComponent = ({ slug }: Props) => {
  const router = useRouter();
  const pathname  = usePathname();

  const handleToggle = () => {
    if (pathname.includes(slug ?? "")) {
      router.push("/aboutus");
    } else {
      router.push(`/aboutus/xyz`);
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1>About Us - {slug}</h1>
      <p>This is the About Us page. </p>
      <button
        onClick={handleToggle}
        className="mt-10 p-1 rounded-lg bg-blue-300"
      >
        Toggle
      </button>
    </div>
  );
};

export default AboutUsComponent;
