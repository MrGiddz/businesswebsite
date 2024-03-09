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
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
            Transforming Tomorrow{" "}
            <br />
            <span className="sm:text-4xl">
              Elevating Your World with Cutting-Edge Solutions.
            </span>
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At the intersection of design and technology, our team thrives
            amidst innovation&apos;s dynamic landscape. Join us to redefine
            possibilities in digital solutions, education, and telehealth
            services.
          </p>
        </FadeIn>
        <StylizedImage
          shape={1}
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
