import { Box, Grid, Container } from '@mui/material';
import Flex from '../../components/utility-components/flex/Flex';
import Image from '../../components/utility-components/image/Image';
import { IMAGE_COLLECTIONS } from '@/app/utils/images';
import React from 'react';
import RightShadow from '@/app/components/page-components/RightShadow';
import PinnEffects from '@/app/components/page-components/PinnEffects';
import useIntersectionAnimation from '@/app/hooks/useIntersectionAnimation';
import useIsMobile from '@/app/hooks/useIsMobile';

function PinSectionCompoent() {

  const [pinnedImage, setPinnedImage] = React.useState('/Images/engage-main.svg')

  const boxRef = useIntersectionAnimation();
  const isMobile = useIsMobile()
  return (

    <>
      <Box position={'absolute'} right="0px" top="1200px" >
        <RightShadow />
      </Box>
      <Flex style={{ height: isMobile ? '100%' : '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box className="contain" ref={boxRef}>
          <Grid container>
            <Grid item lg={6} sm={6} xs={12}>
              <Flex>
                <Box p={isMobile ? '2rem' : '4rem 4rem 0rem 0rem'} className="left">
                  <Image src={pinnedImage} width="95%" /> 
                </Box>
              </Flex>
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
              <PinnEffects setPinnedImage={setPinnedImage} />
            </Grid>
          </Grid>
        </Box>
      </Flex>
    </>
  );
}

export default PinSectionCompoent;
