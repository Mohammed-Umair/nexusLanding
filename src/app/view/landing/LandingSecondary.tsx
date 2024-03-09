import { Box, Container } from "@mui/material"
import LeftShadow from "@/app/components/page-components/LeftShadow"
import SecondayCard from "@/app/components/page-components/cards/SecondayCard"
import Flex from "@/app/components/utility-components/flex/Flex"
import Heading from "@/app/components/utility-components/text/Heading"
import Text from "@/app/components/utility-components/text/Text"
import useIntersectionAnimation from "@/app/hooks/useIntersectionAnimation"
import useIsMobile from "@/app/hooks/useIsMobile"
import { DEFAULT_COLORS } from "@/app/utils/colors"
import { IMAGE_COLLECTIONS } from "@/app/utils/images"
import { RefObject } from "react"
import styled from "styled-components"

const MainRelativeContainer = styled.div`
    position:relative;
`

const LeftMaskContainer = styled.div`
    position:absolute;
    top:-35rem;
    left:0;
    z-index:0;
    @media (max-width: 1024px) {
        display:none;
    }

    @media (min-width: 1024px) {
        display:block;
      }
`

const RightMaskContainer = styled.div`
    position:absolute;
    top:-65rem;
    right:0;
    z-index:50;
    @media (max-width: 1024px) {
        display:none;
    }

    @media (min-width: 1024px) {
        display:block;
      }
`

const LandingSecondary = () => {
    const boxRef = useIntersectionAnimation() as RefObject<HTMLDivElement>;
    const isMobile = useIsMobile()
    return (
        < >
            <Box position="absolute" left="0px" top="400px">
                <LeftShadow />
            </Box>
            <MainRelativeContainer>
                {/* <LeftMaskContainer>
                    <img src="Images/blueleft.png"></img>
                </LeftMaskContainer>
                <RightMaskContainer>
                    <img src="Images/blueright.png"></img>
                </RightMaskContainer> */}
                <Flex sx={{ height: isMobile ? '800px' : '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5rem' }}>
                    <Box my={'4rem'} >
                        <Flex flexDirection="column" gap="3rem">
                            <Flex flexDirection={isMobile ? 'column' : 'row'} gap={{ sm: '1rem', xs: '0rem' }} style={{ marginBottom: isMobile ? '0rem':'3rem', marginTop: '7rem' }}>
                                <Heading color={DEFAULT_COLORS.White} lineHeight={isMobile ? '35px' : '50px'} fontSize="65px">What Makes us </Heading>
                                <Heading color={DEFAULT_COLORS.Blue} lineHeight={isMobile ? '35px' : '50px'} fontSize="65px">Better</Heading>
                            </Flex>
                            <Text color={DEFAULT_COLORS.Light} maxWidth="500px" textAlign="center" lineHeight="25px" fontSize="20px">With a seamless and secure platform, Nexus is redefining the excellence of launches.</Text>
                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} gap={isMobile ? '1rem' : '2rem'}>
                                <SecondayCard image={IMAGE_COLLECTIONS.NexusN} descriptionBold="Community backed launches " description="infused into an innovative platform." />
                                <SecondayCard image={IMAGE_COLLECTIONS.Hammer} descriptionBold="Premium experience " description="on all devices with user-friendly interface." />
                                <SecondayCard image={IMAGE_COLLECTIONS.Settings} descriptionBold="Perfectly crafted tools " description="for all new launchpad experience." />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </MainRelativeContainer>

        </>
    )
}

export default LandingSecondary;
