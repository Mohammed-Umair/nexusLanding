import { Box, Grid, Container } from "@mui/material";
import Flex from "../../components/utility-components/flex/Flex";
import Image from "../../components/utility-components/image/Image";
import { IMAGE_COLLECTIONS } from "@/app/utils/images";
import React, { useEffect, useRef, useState } from "react";
import RightShadow from "@/app/components/page-components/RightShadow";
import PinnEffects from "@/app/components/page-components/PinnEffects";
import PinnEffectsMobile from "@/app/components/page-components/PinnEffectMobile";
import useIntersectionAnimation from "@/app/hooks/useIntersectionAnimation";
import useIsMobile from "@/app/hooks/useIsMobile";
import styled from "styled-components";
import useIsTab from "@/app/hooks/useIsTab";
import { TryRounded } from "@mui/icons-material";
interface PinSectionProps {
  disableScroll: boolean;
  setScrollingtPoint: any;
  setDisableScroll: any;
}

export const PinSectionCompoent = ({
  disableScroll,
  setScrollingtPoint,
  setDisableScroll,
}: PinSectionProps) => {
  const isMobile = useIsMobile();
  const istab = useIsTab();
  const [currentImage, setCurrentImage] = useState(0);
  const [isFixed, setIsFixed] = useState(true);

  const pinSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!pinSectionRef.current) return;

      const container = pinSectionRef.current;

      const isScrolledToBottom =
        container.scrollHeight - container.scrollTop === container.clientHeight;
      setIsFixed(!isScrolledToBottom);
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const rect = pinSectionRef.current.getBoundingClientRect();
      // const isVisiable = rect.top <= window.innerHeight && rect.bottom >= 0;
      // setIsFixed(isVisiable);
      const parentDivHeight = rect.height;
      const parentDivTop = rect.top;
      const visiblePercent = Math.max(
        0,
        Math.min(100, ((viewportHeight - parentDivTop) / parentDivHeight) * 100)
      );
      if (visiblePercent >= 1 && visiblePercent <= 60) {
        setCurrentImage(1);
      } else if (visiblePercent > 60 && visiblePercent <= 80) {
        setCurrentImage(3);
      }
      if (visiblePercent > 80 && visiblePercent <= 90) {
        setCurrentImage(4);
      }
      if (visiblePercent > 99) {
        setCurrentImage(5);
      }
      const numberOfImages = 4; // Assuming you have 4 images
      const imageHeight = viewportHeight - 200; // Each image takes the full height of the viewport

      // Log the scroll position and image height
      console.log("Scroll Position:", scrollPosition);
      console.log("Viewport Height:", imageHeight);
      console.log("visable percent:", visiblePercent);

      // Calculate which image should be displayed based on the scroll position
      // const imageIndexToShow = Math.floor(scrollPosition / imageHeight);

      // Log the calculated index
      // console.log("Image Index:", imageIndexToShow);

      // Ensure the image index doesn't go beyond the number of images
      // setCurrentImage(imageIndexToShow);
      console.log("current image", currentImage);
      setScrollingtPoint(visiblePercent);
      if (visiblePercent > 1 && visiblePercent < 99) {
        setDisableScroll(false);
      } else {
        setDisableScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentImage]);

  const [pinnedImage, setPinnedImage] = React.useState(
    IMAGE_COLLECTIONS.PinSectionImage
  );
  return (
    <Box>
      <Box position={"absolute"} right="0px" top="1200px">
        <RightShadow />
      </Box>
      {isMobile ? (
        <Flex
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            className="contain"
            sx={{
              position: isFixed ? "fixed" : "relative",
              width: "100%",
            }}
          >
            <Grid container>
              <Grid item lg={6} sm={12} xs={12}>
                <Flex>
                  <Box
                    p={isMobile ? "2rem" : "4rem 4rem 0rem 0rem"}
                    className="left"
                  >
                    <Image src={pinnedImage} width="100%" />
                  </Box>
                </Flex>
              </Grid>
              <Grid item lg={6} sm={12} xs={12}>
                <PinnEffectsMobile setPinnedImage={setPinnedImage} />
              </Grid>
            </Grid>
          </Box>
        </Flex>
      ) : (
        <Box sx={{ position: "relative", width: "100%" }}>
          <Box zIndex={1}>
            <Box
              sx={{
                paddingTop: "10rem",
                paddingBottom: "10rem",
              }}
              ref={pinSectionRef}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              ml={isMobile ? "" : "5%"}
            >
              <Content
                stack={
                  isMobile
                    ? currentImage <= 3
                      ? 1
                      : currentImage === 4
                      ? 2
                      : currentImage === 5
                      ? 3
                      : currentImage >= 6
                      ? 4
                      : 0
                    : currentImage <= 2
                    ? 1
                    : currentImage === 3
                    ? 2
                    : currentImage === 4
                    ? 3
                    : currentImage >= 5
                    ? 4
                    : 0
                }
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PinSectionCompoent;

const Content = ({ stack }: any) => {
  const [pinnedImage, setPinnedImage] = React.useState(
    IMAGE_COLLECTIONS.PinSectionImage
  );

  const boxRef = useIntersectionAnimation();
  const isMobile = useIsMobile();
  const isTab = useIsTab();
  useEffect(() => {
    if (stack === 1) {
      setPinnedImage("/Images/pin-main1.png");
    } else if (stack === 2) {
      setPinnedImage("/Images/pin-main2.png");
    } else if (stack === 3) {
      setPinnedImage("/Images/pin-main3.png");
    } else {
      setPinnedImage("/Images/pin-main4.png");
    }
  }, [stack]);

  return (
    <Grid container>
      <Grid item lg={6} md={6} sm={6} xs={6}>
        <Flex justifyContent={isTab ? "center" : "end"}>
          <MainImage pinnedImage={pinnedImage} stack={stack} />
        </Flex>
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={6}>
        <PinnEffects stack={stack} />
      </Grid>
    </Grid>
  );
};

const MainImage = ({ pinnedImage, stack }: any) => {
  const isMobile = useIsMobile();
  const isTab = useIsTab();
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(!state);
  }, [pinnedImage]);
  return (
    <Box
      p={isMobile ? "1rem" : "0rem"}
      mt={"3rem"}
      className={state ? "opac" : "opac1"}
    >
      <Image src={pinnedImage} width={isMobile ? "100%" : "85%"} />
    </Box>
  );
};
