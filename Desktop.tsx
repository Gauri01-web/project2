import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const Desktop = (): JSX.Element => {
  const navLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];
  const companyLogos = [
    { src: "/company-logo-3.svg", alt: "Company logo" },
    { src: "/company-logo-5.svg", alt: "Company logo" },
    { src: "/company-logo-1.svg", alt: "Company logo" },
    { src: "/company-logo.svg", alt: "Company logo" },
    { src: "/company-logo-2.svg", alt: "Company logo" },
    { src: "/company-logo-4.svg", alt: "Company logo" },
  ];
  const services = [
    {
      title: "Search engine optimization",
      background: "bg-grey",
      labelBackground: "bg-green",
      image: "/tokyo-magnifier-web-search-with-elements-2.png",
      imageAlt: "Tokyo magnifier web",
    },
    {
      title: "Pay-per-click advertising",
      background: "bg-green",
      labelBackground: "bg-white",
      image: "/tokyo-selecting-a-value-in-the-browser-window-1.png",
      imageAlt: "Tokyo selecting a value",
    },
  ];
  const workingProcessSteps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      isExpanded: true,
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      description: "",
      isExpanded: false,
    },
  ];
  const testimonials = [
    {
      quote:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp",
      bubbleImage: "/bubble.svg",
    },
    {
      quote:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp",
      bubbleImage: "/bubble-2.svg",
    },
    {
      quote:
        "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      position: "Marketing Director at XYZ Corp",
      bubbleImage: "/bubble-1.svg",
    },
  ];
  const footerLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];
  const socialIcons = [
    { src: "/linkedin.svg", alt: "Linkedin", background: true },
    { src: "/social-icon.svg", alt: "Social icon", background: false },
    { src: "/twitter.svg", alt: "Twitter", background: true },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Header */}
        <nav className="flex w-full items-center justify-between px-[100px] py-[60px]">
          <div className="flex items-start gap-2.5">
            <img className="w-[219.54px] h-9" alt="Logo" src="/logo.svg" />
          </div>
          <div className="flex items-center justify-center gap-10">
            {navLinks.map((link, index) => (
              <button
                key={index}
                className="font-['Space_Grotesk'] font-normal text-black text-xl tracking-[0] leading-7 whitespace-nowrap"
              >
                {link}
              </button>
            ))}
            <Button
              variant="outline"
              className="border border-solid border-dark px-[35px] py-5 rounded-[14px] font-['Space_Grotesk'] font-normal text-xl"
            >
              Request a quote
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="flex w-full items-start justify-between px-[100px] mb-[70px]">
          <div className="flex flex-col items-start gap-[35px]">
            <h1 className="w-[531px] font-h-1 text-[60px] font-medium text-black leading-[72px]">
              Navigating the digital landscape for success
            </h1>
            <p className="w-[498px] font-['Space_Grotesk'] font-normal text-black text-xl leading-7">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <Button className="bg-dark px-[35px] py-5 rounded-[14px] font-['Space_Grotesk'] font-normal text-white text-xl">
              Book a consultation
            </Button>
          </div>

          <div className="relative w-[600px] h-[515px]">
            <img className="absolute w-[446px] h-[385px] top-0 right-0" src="/group-1.png" alt="Hero illustration" />
            <div className="absolute w-[31px] h-[31px] top-[89px] left-[116px] bg-green rounded-[15.5px]" />
            <div className="absolute w-5 h-5 top-[425px] left-[411px] bg-green rounded-[10px]" />
            <div className="absolute w-[47px] h-[47px] top-[41px] left-[58px] bg-black rounded-[23.5px]" />
          </div>
        </header>

        {/* Company Logos */}
        <div className="flex w-full items-center justify-between px-[100px] mb-[100px]">
          {companyLogos.map((logo, index) => (
            <img
              key={index}
              className="h-12"
              style={{
                width: logo.src.includes("company-logo.svg")
                  ? "145.55px"
                  : logo.src.includes("company-logo-1.svg")
                    ? "128.63px"
                    : logo.src.includes("company-logo-2.svg")
                      ? "125.24px"
                      : logo.src.includes("company-logo-3.svg")
                        ? "124.11px"
                        : logo.src.includes("company-logo-4.svg")
                          ? "110.57px"
                          : "126.37px",
              }}
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </div>

        {/* Services Section */}
        <div className="px-[100px] mb-[30px]">
          <div className="flex items-start gap-10">
            <Badge className="px-[7px] py-0 bg-green rounded-[7px]">
              <span className="font-h-2 text-[40px] font-medium text-black">Services</span>
            </Badge>
            <div className="w-[580px] font-p text-black text-xl leading-7">
              At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="flex gap-10 px-[100px] mb-[100px]">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`flex w-[600px] items-center justify-between p-[50px] ${service.background} rounded-[45px] overflow-hidden border border-solid border-dark shadow-[0px_5px_0px_#191a23]`}
            >
              <CardContent className="p-0 flex flex-col items-start justify-center gap-[93px]">
                <div className="flex flex-col items-start gap-2">
                  {service.title.split(" ").map((word, wordIndex) => (
                    <Badge
                      key={wordIndex}
                      className={`px-[7px] py-0 ${service.labelBackground} rounded-[7px]`}
                    >
                      <span className="font-h-3 text-[30px] font-medium text-black">
                        {word}
                      </span>
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-[15px]">
                  <div className="w-[41px] h-[41px] bg-dark rounded-[20.5px] flex items-center justify-center">
                    <img className="w-5 h-5" alt="Arrow" src="/arrow-1.svg" />
                  </div>
                  <span className="font-['Space_Grotesk'] font-normal text-black text-xl leading-7">
                    Learn more
                  </span>
                </div>
              </CardContent>
              <div className="w-[210px] h-[170px]">
                <img
                  className="w-full h-full object-contain"
                  alt={service.imageAlt}
                  src={service.image}
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Working Process Section */}
        <div className="px-[100px] mb-[30px]">
          <div className="flex items-start gap-10">
            <Badge className="px-[7px] py-0 bg-green rounded-[7px]">
              <span className="font-h-2 text-[40px] font-medium text-black">
                Our Working Process
              </span>
            </Badge>
            <div className="w-[292px] font-p text-black text-xl leading-7">
              Step-by-Step Guide to Achieving Your Business Goals
            </div>
          </div>
        </div>

        {/* Working Process Accordion */}
        <div className="px-[100px] mb-[100px]">
          <Accordion type="single" defaultValue="item-0" collapsible className="w-full">
            {workingProcessSteps.map((step, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`mb-[30px] rounded-[45px] overflow-hidden border border-solid border-dark shadow-[0px_5px_0px_#191a23] ${
                  index === 0 ? "bg-green" : "bg-grey"
                }`}
              >
                <AccordionTrigger className="px-[60px] py-[41px] hover:no-underline">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-[25px]">
                      <span className="font-['Space_Grotesk'] font-medium text-black text-6xl">
                        {step.number}
                      </span>
                      <span className="font-['Space_Grotesk'] font-medium text-black text-3xl">
                        {step.title}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-[60px] pb-[41px]">
                  {index === 0 && (
                    <>
                      <Separator className="w-full h-px mb-[30px]" />
                      <div className="font-p text-black text-xl leading-7">
                        {step.description}
                      </div>
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Testimonials Section */}
        <div className="px-[100px] mb-[30px]">
          <div className="flex items-start gap-10">
            <Badge className="px-[7px] py-0 bg-green rounded-[7px]">
              <span className="font-h-2 text-[40px] font-medium text-black">
                Testimonials
              </span>
            </Badge>
            <div className="w-[473px] font-p text-black text-xl leading-7">
              Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mx-[100px] mb-[100px]">
          <div className="relative w-full h-[625px] bg-dark rounded-[45px] overflow-hidden">
            <Carousel className="w-full h-full">
              <CarouselContent className="h-full">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="h-full flex items-center justify-center">
                    <div className="flex flex-col items-end gap-5 max-w-[606px] p-[84px]">
                      <div className="relative w-[554px] h-[266px]">
                        <img
                          className="absolute w-[260px] h-[266px] top-0 right-0"
                          alt="Bubble"
                          src={testimonial.bubbleImage}
                        />
                        <div className="absolute w-[502px] top-[47px] left-0 font-p text-white text-xl leading-7">
                          {testimonial.quote}
                        </div>
                      </div>
                      <div className="w-[526px] font-normal text-xl">
                        <span className="font-h-4 text-green text-[20px] font-medium block mb-1">
                          {testimonial.author}
                        </span>
                        <span className="text-white text-lg">
                          {testimonial.position}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute bottom-[84px] left-1/2 transform -translate-x-1/2 flex items-center gap-8">
                <CarouselPrevious className="relative w-5 h-5 border-none bg-transparent hover:bg-transparent hover:opacity-80">
                  <img className="w-[23px] h-[22px]" alt="Arrow" src="/arrow-3.svg" />
                </CarouselPrevious>
                <div className="relative w-[146px] h-3.5 bg-[url(/stars.png)] bg-[100%_100%]" />
                <CarouselNext className="relative w-5 h-5 border-none bg-transparent hover:bg-transparent hover:opacity-80">
                  <img className="w-[23px] h-[22px] rotate-180" alt="Arrow" src="/arrow-3-1.svg" />
                </CarouselNext>
              </div>
            </Carousel>
            <Button className="absolute bottom-[30px] right-[30px] bg-dark px-[35px] py-5 rounded-[14px] font-['Space_Grotesk'] font-normal text-white text-xl">
              See all team
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full">
          <div className="flex flex-col items-start gap-[50px] pt-[55px] pb-[50px] px-[60px] bg-dark rounded-[45px_45px_0px_0px]">
            <div className="flex flex-col items-start gap-[66px] w-full">
              {/* Footer Top */}
              <div className="flex w-full items-center gap-[155px]">
                <img className="w-[180px] h-[29px]" alt="Logo" src="/logo.svg" />
                <div className="flex items-start gap-10">
                  {footerLinks.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="font-['Space_Grotesk'] font-normal text-white text-lg leading-normal underline"
                    >
                      {link}
                    </a>
                  ))}
                </div>
                <div className="flex items-start gap-5">
                  {socialIcons.map((icon, index) =>
                    icon.background ? (
                      <div
                        key={index}
                        className="w-[30px] h-[30px] bg-white rounded-[15px] flex items-center justify-center"
                      >
                        <img className="w-auto h-auto" alt={icon.alt} src={icon.src} />
                      </div>
                    ) : (
                      <img
                        key={index}
                        className="w-[30px] h-[30px]"
                        alt={icon.alt}
                        src={icon.src}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Contact and Subscribe */}
              <div className="flex items-start gap-[154px]">
                <div className="flex flex-col items-start gap-[27px]">
                  <Badge className="px-[7px] py-0 bg-green rounded-[7px]">
                    <span className="font-h-4 text-[20px] font-medium text-black">
                      Contact us:
                    </span>
                  </Badge>
                  <div className="flex flex-col items-start gap-5">
                    <p className="font-p text-white text-xl leading-7">
                      Email: info@positivus.com
                    </p>
                    <p className="font-p text-white text-xl leading-7">
                      Phone: 555-567-8901
                    </p>
                    <p className="font-p text-white text-xl leading-7">
                      Address: 1234 Main St
                      <br />
                      Moonstone City, Stardust State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 px-10 py-[58px] bg-[#292a32] rounded-[14px]">
                  <Input
                    className="w-[285px] px-[35px] py-[22px] rounded-[14px] border border-solid border-white bg-transparent text-white placeholder-white"
                    placeholder="Email"
                  />
                  <Button className="bg-green px-[35px] py-5 rounded-[14px] font-['Space_Grotesk'] font-normal text-black text-xl">
                    Subscribe to news
                  </Button>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col items-start gap-[50px] w-full">
              <Separator className="w-full h-px bg-white/20" />
              <div className="flex items-start gap-10">
                <p className="font-['Space_Grotesk'] font-normal text-white text-lg leading-7">
                  © 2023 Positivus. All Rights Reserved.
                </p>
                <a
                  href="#"
                  className="font-['Space_Grotesk'] font-normal text-white text-lg leading-7 underline"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};