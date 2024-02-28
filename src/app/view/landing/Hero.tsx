import { Box, Grid, Typography } from "@mui/material"
import Header from "../../components/page-components/Header"
import { DEFAULT_COLORS } from "@/app/utils/colors"
import Image from "@/app/components/utility-components/image/Image"
import Flex from "@/app/components/utility-components/flex/Flex"
import Heading from "@/app/components/utility-components/text/Heading"
import useIsMobile from "@/app/hooks/useIsMobile"
import IconButton from "@/app/components/utility-components/buttons/IconButton"
import ButtonWithIcon from "@/app/components/utility-components/buttons/ButtonWithIcon"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from "@/app/components/utility-components/buttons/Button"
import SignIn from "@/app/components/page-components/SignIn"
import { IMAGE_COLLECTIONS } from "@/app/utils/images"
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import useIsBig from "@/app/hooks/useIsBig"
import { useEffect, useState } from "react"
import useIsTab from "@/app/hooks/useIsTab"



interface ButtonProps {
  scrollToTarget: () => void;
  targetRef: React.RefObject<HTMLDivElement>;
}

const Hero = ({ scrollToTarget, targetRef }: ButtonProps) => {
  const isMobile = useIsMobile()
  const isBig = useIsBig()
  const isTab = useIsTab()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => { setLoading(false) }, 1000)
  }, [])


  return (


    <Box sx={{
      backgroundColor: DEFAULT_COLORS.Blue,
      borderRadius: '15px',
      position: 'relative',
      height: isBig ? { sm: '98vh', xs: '100%' } : '80vh',
      minHeight: isMobile ? '800px' : '110vh'
    }} m="1rem" ref={targetRef}>
      <Header />
      <Grid container height="100%">
        <Grid item lg={6} sm={6} xs={12} height="100%">
          {isMobile ? (
            <>
              <Flex>
                <Box left='0rem' top="0rem">
                  <Image src={IMAGE_COLLECTIONS.landingMain} width="100%" />
                </Box>
                <Box left='0rem' top="0rem">
                  <Image src={IMAGE_COLLECTIONS.landingsecondary1} width="100%" />
                </Box>
              </Flex>
              <Heading fontSize="50px" fontFamily="SEN bold" color={DEFAULT_COLORS.White} textAlign="center">Leading Launches</Heading>
            </>

          ) : (
            <Flex style={{ position: 'relative', height: '100%' }} gap="0rem" justifyContent="end">
              <Box position="relative" right="4rem" zIndex={100}>
                {!isMobile && (
                  <Heading fontSize="90px" fontFamily="SEN bold" color={DEFAULT_COLORS.White}>Leading  <br /> Launches</Heading>
                )}
                <Flex style={{ marginTop: '3rem', marginRight: '5rem' }}>
                  <ButtonWithIcon background={DEFAULT_COLORS.White} color={DEFAULT_COLORS.black} borderRadius="30px" icon={
                    <IconButton background={DEFAULT_COLORS.Blue} color={DEFAULT_COLORS.White}><ArrowForwardIcon sx={{ color: DEFAULT_COLORS.White }} /></IconButton>
                  } onClick={() => scrollToTarget()}>How to join?</ButtonWithIcon>
                  <Button background={DEFAULT_COLORS.Blue} border borderColor={DEFAULT_COLORS.White} >Read Docs</Button>
                </Flex>
                <Box mt="5rem" mr="12rem">
                  <Flex>
                    <Button borderRadius="25px" padding=".6rem 1.2rem">
                      <Box sx={{
                        "&:hover": {  // Use "&:hover" instead of ":hover"
                          color: DEFAULT_COLORS.Blue
                        },
                        cursor: 'pointer',
                      }}><EmailIcon fontSize="small" /></Box>

                    </Button>
                    <Button borderRadius="25px" padding=".6rem 1.2rem">
                      <Box sx={{
                        "&:hover": {  // Use "&:hover" instead of ":hover"
                          color: DEFAULT_COLORS.Blue
                        },
                        cursor: 'pointer',
                      }}>
                        <TelegramIcon fontSize="small" />
                      </Box>
                      <Box sx={{
                        "&:hover": {  // Use "&:hover" instead of ":hover"
                          color: DEFAULT_COLORS.Blue
                        },
                        cursor: 'pointer',

                      }}> <XIcon fontSize="small" /></Box>

                      <Box sx={{
                        "&:hover": {  // Use "&:hover" instead of ":hover"
                          color: DEFAULT_COLORS.Blue
                        },
                        cursor: 'pointer'
                      }}>

                        <GoogleIcon fontSize="small" />
                      </Box>
                    </Button>
                  </Flex>
                </Box>
              </Box>
              {
                !isMobile && (
                  <>
                    <Box left={isTab ? "0px" : "-34px"} top="0rem" position="absolute" sx={{ opacity: loading ? '0' : '0.9', zIndex: 0 }} >
                      <video width={isTab ? "500" : "700"} height={isTab ? "600" : "800"} autoPlay loop playsInline muted >
                        <source src='/Images/hero-video1.mp4' type="video/mp4" />
                        <track
                          src="/path/to/captions.vtt"
                          kind="subtitles"
                          srcLang="en"
                          label="English"
                        />
                        Your browser does not support the video.
                      </video>
                    </Box>
                    <Box left='0rem' top="0rem" position="absolute" sx={{ opacity: loading ? '0.8' : '0' }} >
                      <Image src={'https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/hero-main-png.png'} width="85%" />
                    </Box>
                  </>

                )
              }

            </Flex >
          )}

        </Grid>
        <Grid item lg={6} sm={6} xs={12} height="100%">
          <Flex justifyContent="end" style={{ position: 'relative', height: '100%' }} >
            <SignIn />
            {!isMobile && (
              <Box position={"relative"}>
                <Box width="250px" position="relative">

                  <video width="100%" height="606.4" autoPlay loop muted playsInline style={{ position: 'absolute', top: '-300px', opacity: loading ? '0' : '1' }}>
                    <source src='/Images/hero-video2.mp4' type="video/mp4" />
                    <track
                      src="/path/to/captions.vtt"
                      kind="subtitles"
                      srcLang="en"
                      label="English"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <Image src={'https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/hero-second.png'} width="100%" style={{ position: 'absolute', top: '-300px', opacity: loading ? '1' : '0' }} />
                </Box>



                <Box position="absolute" bottom="-20rem" right="0px">
                  <Image src={IMAGE_COLLECTIONS.SwitchBoard} width="250px" />
                </Box>
              </Box>
            )}
          </Flex>
        </Grid>
      </Grid>
    </Box>

  )
}

export default Hero
