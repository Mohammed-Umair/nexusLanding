import { Box } from "@mui/material";
import Footer from "@/app/components/page-components/Footer";
import Container from "@/app/components/utility-components/container/Container";
import Flex from "@/app/components/utility-components/flex/Flex";
import Image from "@/app/components/utility-components/image/Image";
import useIsMobile from "@/app/hooks/useIsMobile";
import { DEFAULT_COLORS } from "@/app/utils/colors";
import { IMAGE_COLLECTIONS } from "@/app/utils/images";

const LastSection = () => {
  const isMobile = useIsMobile()
  return (
    <Box m="10px" position="relative">

      {isMobile ? (
        <Box>
          <Image src={IMAGE_COLLECTIONS.BackgroundCircleMobileFull} width="100%" />
        </Box>
      ) : (
        <Container background={DEFAULT_COLORS.Blue_White_Gradient} >
          <Box height="100%" position="relative">
            <Box position="relative" top="2rem">
              <Flex>
                <Image src={IMAGE_COLLECTIONS.BackgroundCircle} width="90%" />
              </Flex>
            </Box>
            <Box position="absolute" top={{ lg: "25%",md:'10%', xs: "40px" }} left="42%" width={{ xl: "300px",md:"200px", xs: "100px" }} className="move-up-down">
              <Image src={'https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/footer-small-main.png'} width="100%" />
            </Box>
            <Box position="absolute" top="10%" left="-17px" width={{ lg: "350px", md: '300px', xs: "100px" }} className="move-up-down">
              <Image src={'https://nexusprotocol.s3.eu-north-1.amazonaws.com/NexusImages/footer-small-left.png'} width="100%" />
            </Box>
            <Box position="absolute" top="22%" left="28%" width={{ xl: "150px", md: '100px', xs: "100px" }} className="move-up-down">
              <Image src={IMAGE_COLLECTIONS.FloatingBook} width="100%" />
            </Box>
            <Box position="absolute" top="55%" left="27%" width={{ xl: "150px", md: '100px', xs: "100px" }} className="move-up-down">
              <Image src={IMAGE_COLLECTIONS.FloatingUser2} width="100%" />
            </Box>
            <Box position="absolute" top="65%" left="40%" width={{ xl: "70px", md: '40px', xs: "100px" }} className="move-up-down">
              <Image src={IMAGE_COLLECTIONS.Star} width="100%" />
            </Box>
            <Box position="absolute" top="15%" left="40%" width="20px" className="move-up-down">
              <Image src={IMAGE_COLLECTIONS.Star} width="100%" />
            </Box>
            <Box position="absolute" top="35%" right="40%" width={{ xl: "40px", md: '20px', xs: "100px" }} className="move-up-down">
              <Image src={IMAGE_COLLECTIONS.Star} width="100%" />
            </Box>
            <Box position="absolute" top="35%" right="28%" width={{ xl: "260px", md: '200px', xs: "100px" }} className="move-up-down">
              <Image src={IMAGE_COLLECTIONS.FloatingCoin1} width="100%" />
            </Box>
            <Box position="absolute" top="14%" right="16%" width={{ xl: "170px", md: '100px', xs: "100px" }} className="move-up-down">
              <Image src={IMAGE_COLLECTIONS.FloatingUser1} width="100%" />
            </Box>
            <Box position="absolute" top="20%" right="-17px" width={{ xl: "130px", md: '80px', xs: "100px" }} className="move-up-down">
              <Image src={IMAGE_COLLECTIONS.FloatingUserHalf} width="100%" />
            </Box>
          </Box>
        </Container>
      )}

      <Footer />
    </Box>
  );
};

export default LastSection;
