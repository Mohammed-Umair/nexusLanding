import { Box, Grid, Container } from '@mui/material';
import Flex from '../../components/utility-components/flex/Flex';
import Image from '../../components/utility-components/image/Image';
import { IMAGE_COLLECTIONS } from '@/app/utils/images';
import React, { useEffect, useState } from 'react';
import RightShadow from '@/app/components/page-components/RightShadow';
import PinnEffects from '@/app/components/page-components/PinnEffects';
import useIntersectionAnimation from '@/app/hooks/useIntersectionAnimation';
import useIsMobile from '@/app/hooks/useIsMobile';
import styled from 'styled-components';


function PinSectionCompoent() {
  const isMobile = useIsMobile()
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const numberOfImages = 4; // Assuming you have 4 images
      const imageHeight = viewportHeight - 200; // Each image takes the full height of the viewport

      // Log the scroll position and image height
      console.log("Scroll Position:", scrollPosition);
      console.log("Viewport Height:", imageHeight);

      // Calculate which image should be displayed based on the scroll position
      const imageIndexToShow = Math.floor(scrollPosition / imageHeight);

      // Log the calculated index
      console.log("Image Index:", imageIndexToShow);

      // Ensure the image index doesn't go beyond the number of images
      setCurrentImage(imageIndexToShow);
      console.log('current image', currentImage);

    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentImage]);


  return (

    <>
      <Box position={'absolute'} right="0px" top="1200px" >
        <RightShadow />
      </Box>
      <Box sx={{ height: { xs: '500vh', sm: '400vh', md: '400vh', lg: '400vh', xl: '320vh' }, position: 'relative', width: '100%' }}>
        <Box
          position={'sticky'}
          top={'50%'}
          left={'0%'}
          zIndex={1}

          sx={{
            marginTop: '50vh',
            marginBottom: '50vh',

          }}>
          <Box position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'} ml={isMobile ? '' : '5%'}>
            <Content
              stack={
                isMobile ? (
                  currentImage <= 3 ? 1 :
                    currentImage === 4 ? 2 :
                      currentImage === 5 ? 3 :
                        currentImage >= 6 ? 4 :
                          0
                ) : (
                  currentImage <= 1 ? 1 :
                    currentImage === 2 ? 2 :
                      currentImage === 3 ? 3 :
                        currentImage >= 4 ? 4 :
                          0
                )
              }
            />


          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PinSectionCompoent;


const Content = ({ stack }: any) => {

  const [pinnedImage, setPinnedImage] = React.useState(IMAGE_COLLECTIONS.PinSectionImage)

  const boxRef = useIntersectionAnimation();
  const isMobile = useIsMobile()
  useEffect(() => {
    if (stack === 1) {
      setPinnedImage('/Images/pin-main1.png')
    } else if (stack === 2) {
      setPinnedImage('/Images/pin-main2.png')
    }
    else if (stack === 3) {
      setPinnedImage('/Images/pin-main3.png')
    }
    else {
      setPinnedImage('/Images/pin-main4.png')
    }
  }, [stack])

  return (
    <Grid container sx={{ position: 'absolute' }}>
      <Grid item lg={6} sm={6} xs={12}>
        <Flex justifyContent='end'>
          <MainImage pinnedImage={pinnedImage} stack={stack} />
        </Flex>
      </Grid>
      <Grid item lg={6} sm={6} xs={12}>
        <PinnEffects stack={stack} />
      </Grid>
    </Grid>
  )
}

const MainImage = ({ pinnedImage, stack }: any) => {
  const isMobile = useIsMobile();
  const [state, setState] = useState(false);

  useEffect(() => { setState(!state) }, [pinnedImage])
  return (
    <Box p={isMobile ? '1rem' : '0rem'} mt={'3rem'} className={state ? 'opac' : 'opac1'} >
      <Image src={pinnedImage} width={isMobile ? '100%' : '85%'} />
    </Box>
  )
}