import Image from "next/image";
import { Hero } from "@/components/_sections/Hero";
import { PageSection } from "@/components/_sections/PageSection";

export default function Home() {
  return (
    <div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      {/* <Hero html={blockHtml("Site Hero")} />
      <PageSection html={blockHtml("Psyber Magus Suspense")} /> */}
    </div>
  );
}
