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
import PinSection from "../view/landing/PinSection";

const Main = () => {
  const [loading, setLoading] = useState(true);

  const [scrollingtPoint, setScrollingtPoint] = useState(0);
  const [disableScroll, setDisableScroll] = useState<boolean>(false);

  console.log("disableScroll percent:==>", scrollingtPoint);
  console.log("disableScroll>", disableScroll);

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
      const pinSectionElement = pinSectionRef.current;
      if (pinSectionRef.current && isInViewport(pinSectionRef.current)) {
        document.body.style.overflow = "hidden";
        setDisableScroll(true);
      } else {
        document.body.style.overflow = "visible";
        setDisableScroll(false);
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
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
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
              <PinSectionCompoent
                disableScroll={disableScroll}
                setScrollingtPoint={setDisableScroll}
                setDisableScroll={setDisableScroll} 
              />
            </Box>

            {/* <PinSection /> */}
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
