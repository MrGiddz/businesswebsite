import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import StylizedImage from "@/components/StylizedImage";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import Online from "../images/3327755.jpg";
import FlexContainer from "@/components/FlexContainer";

export default function Home() {
  return (
    <main className="text-black">
      <FlexContainer
        className="mt-24 sm:mt-32"
        flexProps="flex justify-between items-center"
      >
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Make your online presence a reality with us!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a group of developer working at the intersection of design
            and technology. It is a really busy intersection though — a lot of
            our staff have been involved in hit and runs.
          </p>
        </FadeIn>
        <StylizedImage
          src={Online}
          sizes="(min-width: 1024px) 41rem, 31rem"
          className="justify-center lg:justify-end"
        />
      </FlexContainer>
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        We&apos;ve been working with Erotex for the past year, and their
        software solutions have been a game-changer for our business. Their team
        is highly skilled, responsive, and always ready to tackle any challenge.
        Thanks to their expertise, we&apos;ve seen a significant improvement in
        our efficiency and productivity.
      </Testimonials>
      <Services />
      <ContactSection />
      <Clients />
    </main>
  );
}
