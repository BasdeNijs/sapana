import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper className="bg-red-500">
      <h1 className="text-4xl font-bold">Hello, world!</h1>
    </MaxWidthWrapper>
  );
}
