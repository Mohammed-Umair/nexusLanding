import { Box, Grid } from "@mui/material"
import Header from "../../components/page-components/Header"
import { DEFAULT_COLORS } from "@/app/utils/colors"
import Image from "@/app/components/utility-components/image/Image"
import Flex from "@/app/components/utility-components/flex/Flex"
import Heading from "@/app/components/utility-components/text/Heading"
import useIsMobile from "@/app/hooks/useIsMobile"
import IconButton from "@/app/components/utility-components/buttons/IconButton"
import ButtonWithIcon from "@/app/components/utility-components/buttons/ButtonWithIcon"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Button from "@/app/components/utility-components/buttons/Button"
import SignIn from "@/app/components/page-components/SignIn"
import { IMAGE_COLLECTIONS } from "@/app/utils/images"
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import useIsBig from "@/app/hooks/useIsBig"
import { useEffect, useState } from "react"

 
interface ButtonProps {
  scrollToTarget: () => void;
  targetRef: React.RefObject<HTMLDivElement>;
}

const Hero = ({ scrollToTarget, targetRef }: ButtonProps) => {
  const isMobile = useIsMobile()
  const isBig = useIsBig()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => { setLoading(false) }, 5000)
  }, [])


  return (


    <Box sx={{
      backgroundColor: DEFAULT_COLORS.Blue,
      borderRadius: '15px',
      position: 'relative',
      height: isBig ? { sm: '98vh', xs: '100%' } : '80vh',
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
              <Box position="relative" right="4rem">
                {!isMobile && (
                  <Heading fontSize="90px" fontFamily="SEN bold" color={DEFAULT_COLORS.White}>Leading  <br /> Launches</Heading>
                )}
                <Flex style={{ marginTop: '3rem', marginRight: '5rem' }}>
                  <ButtonWithIcon background={DEFAULT_COLORS.White} color={DEFAULT_COLORS.black} borderRadius="30px" icon={
                    <IconButton background={DEFAULT_COLORS.Blue} color={DEFAULT_COLORS.White}><ArrowDownwardIcon sx={{ color: DEFAULT_COLORS.White }} /></IconButton>
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
                    <Box left='0rem' top="0rem" position="absolute" sx={{ opacity: loading ? '0' : '0.8' }} >
                      <Image src={'https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusAnimations/hero-main-gif.gif'} width="85%" />
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
                  <Image src={IMAGE_COLLECTIONS.landingsecondary1} width="100%" style={{ position: 'absolute', top: '-300px', opacity: loading ? '0' : '1' }} />
                  <Image src={'https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/hero-second.png'} width="100%" style={{ position: 'absolute', top: '-300px', opacity: loading ? '1' : '0' }} />
                </Box>



                <Box position="absolute" bottom="-20rem" right="0px"  >
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
