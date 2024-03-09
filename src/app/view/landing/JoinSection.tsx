import { Box, Container, Grid } from '@mui/material'
import ButtonWithIcon from '@/app/components/utility-components/buttons/ButtonWithIcon'
import IconButton from '@/app/components/utility-components/buttons/IconButton'
import ContainerBox from '@/app/components/utility-components/container/Container'
import Flex from '@/app/components/utility-components/flex/Flex'
import Text from '@/app/components/utility-components/text/Text'
import { DEFAULT_COLORS } from '@/app/utils/colors'
import { IMAGE_COLLECTIONS } from '@/app/utils/images'
import JoinCard from '@/app/components/page-components/cards/JoinCard'
import useIntersectionAnimation from '@/app/hooks/useIntersectionAnimation'
import LeftShadow from '@/app/components/page-components/LeftShadow'
import useIsMobile from '@/app/hooks/useIsMobile'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Heading from '@/app/components/utility-components/text/Heading'
import useIsTab from '@/app/hooks/useIsTab'

interface TargetProps {
    scrollToTarget: () => void;
    targetRef: React.RefObject<HTMLDivElement>;
}



const JoinSection = ({ scrollToTarget, targetRef }: TargetProps) => {
    const boxRef = useIntersectionAnimation();
    const isMobile = useIsMobile()
    const isTab = useIsTab()
    return (
        <Box mx="10px" my="1rem" ref={boxRef} position="relative">
            <Box position="absolute" left="0px" top="0px" ref={targetRef}>
                <LeftShadow />
            </Box>
            <ContainerBox background={DEFAULT_COLORS.Dark_Light} style={{ height: isTab ? "100%" : "800px", display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item lg={4} md={12} sm={12} xs={12}>
                            <Box m={{ xs: '0rem', sm: '1rem', md: '2rem', lg: '3rem', xl:'4rem' }} display={'flex'} justifyContent={'center'} alignItems={{ xs: 'center', sm: 'center', md: 'center', lg: 'start' }} flexDirection={{ xs: 'column', sm: 'column', lg: 'column' }}>
                                <Flex gap="10px" alignItems={{ xs: 'center', sm: 'center', md: 'start', lg: 'start' }} style={{ marginBottom: '1rem' }}>
                                    <Heading textAlign='start' fontSize={isMobile ? '40px' : '55px'} lineBrake lineHeight='67px'>How to</Heading>
                                    <Heading textAlign='start' fontSize={isMobile ? '40px' : '55px'} isGradient lineHeight='67px'>Join?</Heading>
                                </Flex>
                                <Text textAlign={isTab ? 'center' : 'start'} fontSize='16px' maxWidth='340px' lineHeight='19px' color={DEFAULT_COLORS.Light}>Within a few clicks you can become a part of Nexus, we’ve made the joining process as easy as it can be.</Text>
                                <Box mt={{ xs: '3rem', sm: '1rem', md: '1rem', lg: '2rem', xl:'3rem' }}>
                                    <ButtonWithIcon icon={<IconButton background={DEFAULT_COLORS.Blue} color={DEFAULT_COLORS.White}><ArrowForwardIcon sx={{ color: DEFAULT_COLORS.White }} /></IconButton>} background={DEFAULT_COLORS.White} color={DEFAULT_COLORS.black} onClick={() => scrollToTarget()}>Join Now</ButtonWithIcon>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={8} md={12} sm={12} xs={12}>
                            <Box m={{ xs: '1rem', sm: '1rem', md: '2rem', lg: '3rem', xl:'4rem' }} borderRadius={'25px'}>
                                <video width={'100%'} height={'100%'} autoPlay loop playsInline muted style={{ borderRadius: '20px' }}>
                                    <source src='/Images/join-main-video.mp4' type="video/mp4" />
                                    <track
                                        src="/path/to/captions.vtt"
                                        kind="subtitles"
                                        srcLang="en"
                                        label="English"
                                    />
                                    Your browser does not support the video.
                                </video>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box mb="2rem" mt={isMobile ? '2rem' : '0rem'}>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} gap={isTab ? '0rem' : '2rem'}>
                            <JoinCard image={IMAGE_COLLECTIONS.JoinMini1} hoverImage={IMAGE_COLLECTIONS.JoinGif1} title='Sign up' description='Sign up with socials or manually' />
                            <JoinCard image={IMAGE_COLLECTIONS.JoinMini2} hoverImage={IMAGE_COLLECTIONS.JoinMiniGif2} title='Fill Details' description='Fill in your profile details' />
                            <JoinCard image={IMAGE_COLLECTIONS.JoinMini3} hoverImage={IMAGE_COLLECTIONS.JoinMiniGif3} title='Confirm' description='Confirm your email' />
                            <JoinCard image={IMAGE_COLLECTIONS.JoinMini4} hoverImage={IMAGE_COLLECTIONS.JoinMiniGif4} title='Done!' description="Congratulations, it's done!" />
                        </Box>

                    </Box>
                </Container>
            </ContainerBox>
        </Box>
    )
}

export default JoinSection
