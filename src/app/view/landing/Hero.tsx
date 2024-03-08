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
import IconButtons from "@mui/material"



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
      overflow: 'hidden',
      borderRadius: '15px',
      position: 'relative',
      height: '100%',
      minHeight: isTab ? '100%' : '860px'
    }} m="1rem" ref={targetRef}>
      <Header />
      {isTab ? (
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

          <Flex>


            <Button borderRadius="25px" padding=".6rem 1.2rem">
              <Box sx={{
                "&:hover": {  // Use "&:hover" instead of ":hover"
                  color: DEFAULT_COLORS.Blue
                },
                cursor: 'pointer',
              }} ><EmailIcon fontSize="small" /></Box>
            </Button>

            <Button borderRadius="25px" padding=".6rem 1.2rem">
              <a href="https://t.me/NexusLaunchpad" target="_blank">
                <Box sx={{
                  "&:hover": {  // Use "&:hover" instead of ":hover"
                    color: DEFAULT_COLORS.Blue
                  },
                  cursor: 'pointer',
                }}>
                  <TelegramIcon fontSize="small" /> 

                </Box>
              </a>
              <a href="https://twitter.com/NexusLaunchpad" target="_blank">
                <Box sx={{
                  "&:hover": {  // Use "&:hover" instead of ":hover"
                    color: DEFAULT_COLORS.Blue
                  },
                  cursor: 'pointer',

                }}> <XIcon fontSize="small" /></Box>
              </a>
            </Button>
          </Flex>
          <Flex>
            <SignIn />
          </Flex>
        </>

      ) : (
        <Box position={'relative'}>
          <video autoPlay loop playsInline muted className="video-content">
            <source src='/Images/hero-bg.mp4' type="video/mp4" /> 
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video.
          </video>
          <Box className="hero-centered-element">
            <Flex width="100%" style={{marginLeft:'8rem'}}>
              < Box position="relative" zIndex={100} >
                {!isTab && (
                  <Typography fontSize="90px" fontFamily="SEN bold" color={DEFAULT_COLORS.White} lineHeight={'80px'}>Leading  <br /> Launches.</Typography>
                )}
                <Flex style={{ marginTop: '5rem', marginRight: '5rem' }}>
                  <ButtonWithIcon background={DEFAULT_COLORS.White} color={DEFAULT_COLORS.black} borderRadius="30px" icon={
                    <IconButton background={DEFAULT_COLORS.Blue} color={DEFAULT_COLORS.White}><ArrowForwardIcon sx={{ color: DEFAULT_COLORS.White }} /></IconButton>
                  } onClick={() => scrollToTarget()}>How to join?</ButtonWithIcon>
                  <Button background={DEFAULT_COLORS.Blue} border borderColor={DEFAULT_COLORS.White} >Read Docs</Button>
                </Flex>
                <Box mt="10rem" mr="12rem">
                  <Flex>
                    <Button borderRadius="25px" padding=".6rem 1.2rem" >
                      <Box sx={{
                        "&:hover": {  // Use "&:hover" instead of ":hover"
                          color: DEFAULT_COLORS.Blue
                        },
                        cursor: 'pointer',
                      }}><EmailIcon fontSize="small" /></Box>

                    </Button>
                    <Button borderRadius="25px" padding=".6rem 1.2rem">
                      <a href="https://t.me/NexusLaunchpad" target="_blank">
                        <Box sx={{
                          "&:hover": {  // Use "&:hover" instead of ":hover"
                            color: DEFAULT_COLORS.Blue
                          },
                          cursor: 'pointer',
                        }}>
                          <TelegramIcon fontSize="small" />

                        </Box>
                      </a>
                      <a href="https://twitter.com/NexusLaunchpad" target="_blank">
                        <Box sx={{
                          "&:hover": {  // Use "&:hover" instead of ":hover"
                            color: DEFAULT_COLORS.Blue
                          },
                          cursor: 'pointer',

                        }}> <XIcon fontSize="small" /></Box>
                      </a>
                    </Button>
                  </Flex>
                </Box>
              </Box >

              <SignIn />
            </Flex>

          </Box>

        </Box>
      )}



    </Box>

  )
}

export default Hero











