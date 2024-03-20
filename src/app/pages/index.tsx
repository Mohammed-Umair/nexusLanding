import React, { useState, useEffect } from "react";
import Hero from "../view/landing/Hero";
import LandingSecondary from "../view/landing/LandingSecondary";
import Scroller from "../view/landing/Scroller";
import PinSectionCompoent from "../view/landing/PinSectionCompoent";
import JoinSection from "../view/landing/JoinSection";
import ContactSection from "../view/landing/ContactSection";
import PartnerSection from "../view/landing/PartnerSection";
import LastSection from "../view/landing/LastSection";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Box, Container } from "@mui/material";
import Flex from "../components/utility-components/flex/Flex";

const pinPont = 1070;
const endPoint = 1400;
const Main = () => {
  const [loading, setLoading] = useState(true);

  const [scrollingtPoint, setScrollingtPoint] = useState(0);
  const [disableScroll, setDisableScroll] = useState(false);

  console.log("visable percent:==>", scrollingtPoint);
  console.log("visable percent:==>:==>", disableScroll);

  const targetRef = useRef<HTMLDivElement>(null);
  const targetRefSign = useRef<HTMLDivElement>(null);
  const pinSectionRef = useRef<HTMLDivElement>(null);

  // const targetRefContact = useRef<HTMLDivElement>(null);`

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTargetSign = () => {
    if (targetRefSign.current) {
      targetRefSign.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  // const scrollToTargetContact = () => {
  //   if (targetRefContact.current) {
  //     targetRefContact.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // const scrollToPinSectionComponent=()=>{
  //   if(pinSectionComponentRef.current){
  //     pinSectionComponentRef.current.scrollIntoView({behavior:"smooth"})
  //   }
  // }

  // Simulating image loading using a timeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 10); // Adjust the timeout duration as needed
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const pinSectionElement = pinSectionRef.current
     
      if (pinSectionElement) {
        if (isInViewport(pinSectionElement)) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isInViewport = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return (
      (rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight) ||
      (document.documentElement.clientHeight &&
        rect.right <= window.innerWidth) ||
      document.documentElement.clientWidth
    );
  };

 

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <Flex>
          <Box width={"100%"}>
            <Hero scrollToTarget={scrollToTarget} targetRef={targetRefSign} />
            <LandingSecondary />
            <Scroller />

            <Box ref={pinSectionRef}>
              <PinSectionCompoent  />
            </Box>

            <JoinSection
              scrollToTarget={scrollToTargetSign}
              targetRef={targetRef}
            />
            {/* <ContactSection targetRef={targetRefContact} /> */}
            <PartnerSection />
            <LastSection />
          </Box>
        </Flex>
      )}
    </>
  );
};

export default Main;
