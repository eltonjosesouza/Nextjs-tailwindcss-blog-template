import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";


export const metadata = {
  title: "Sobre mim",
  description: `Desenvolvedor experiente com mais de duas décadas de expertise em tecnologia, liderança e entrega de soluções inovadoras.`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      {/* <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
      Have a project in mind? Reach out to me 📞 from <Link href="/contact"  className="!underline underline-offset-2"   >here</Link> and let's make it happen.
      </h2> */}
    </>
  );
}
