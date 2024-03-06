import { Box, Container, Grid } from '@mui/material'
import PartnerLogoSection from '@/app/components/page-components/PartnerLogoSection';
import ContainerBox from '@/app/components/utility-components/container/Container'
import Flex from '@/app/components/utility-components/flex/Flex';
import Image from '@/app/components/utility-components/image/Image';
import Heading from '@/app/components/utility-components/text/Heading';
import Text from '@/app/components/utility-components/text/Text';
import { DEFAULT_COLORS } from '@/app/utils/colors';
import { IMAGE_COLLECTIONS } from '@/app/utils/images';
import useIntersectionAnimation from '@/app/hooks/useIntersectionAnimation';
import RightShadow from '@/app/components/page-components/RightShadow';
import LeftShadow from '@/app/components/page-components/LeftShadow';
import useIsMobile from '@/app/hooks/useIsMobile';


const PartnerSection = () => {
    const boxRef = useIntersectionAnimation();
    const isMobile = useIsMobile()
    return (
        <Box mx="10px" mb={'1rem'} ref={boxRef} position="relative">
          
            <Box position="absolute" left="0px" top="100px">
                <LeftShadow />
            </Box>
            <ContainerBox background={DEFAULT_COLORS.Dark_Light} style={{ height: isMobile ? '100%' : '97vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Container maxWidth="xl" >
                    <Grid container my={'4rem'} >
                        <Grid item lg={6} sm={6} xs={12}>
                            <Box m={{ xs: '0rem', sm: '4rem' }}>
                                <Flex flexDirection='column'>
                                    <Heading isGradient textAlign={'center'}>Our Partners</Heading>
                                    <Text fontSize='18px' color={DEFAULT_COLORS.Light} maxWidth='360px' textAlign='center' lineHeight='19px'>Our esteemed partners share our vision. Together, we’re creating an ecosystem that propels innovation and success.</Text>
                                    <PartnerLogoSection />
                                </Flex>
                            </Box>
                        </Grid>
                        <Grid item lg={6} sm={6} xs={12}>
                            <Box m={{ xs: '0rem', sm: '4rem' }} className="move-up-down">
                                <Flex>
                                    <Image src={'https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/partner-main.svg'} width={isMobile ? '250px' : '350px'} />
                                </Flex>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </ContainerBox>
        </Box>
    )
}

export default PartnerSection
