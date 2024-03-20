import { Grid } from "@mui/material";
import Container from "../../utility-components/container/Container";
import { DEFAULT_COLORS } from "@/app/utils/colors";
import Image from "../../utility-components/image/Image";
import Button from "../../utility-components/buttons/Button";
import Text from "../../utility-components/text/Text";
import Flex from "../../utility-components/flex/Flex";
import useIntersectionAnimation from "@/app/hooks/useIntersectionAnimation";
import { RefObject } from "react";
import useIsMobile from "@/app/hooks/useIsMobile";

interface ImageProps {
  image: string;
  description: string;
  descriptionBold: string;
}

const SecondayCard = ({ image, description, descriptionBold }: ImageProps) => {
  const boxRef = useIntersectionAnimation() as RefObject<HTMLDivElement>;
  const isMobile = useIsMobile();
  return (
    <Container
      background={DEFAULT_COLORS.Dark_Light}
      width="100%"
      maxWidth={isMobile ? "350px" : "400px"}

      borderRadius="35px"
      ref={boxRef}
      hover={true}
    >
      <Grid container>
        <Grid item lg={3} sm={3.5} xs={3.5}>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              position: "relative",
              cursor: "pointer",
              fontFamily: "SEN medium",
              whiteSpace: "nowrap",
              zIndex: 1000,
              background: DEFAULT_COLORS.Blue,
              borderRadius: "25px",
              padding: "2rem 1.3rem",
              border: "none",
              // boxShadow: '0px 4px 92.80000305175781px -7px #0879FF';
              boxShadow: "0px 4px 92.80000305175781px 1px #0879FF",
            }}
          >
            <Image src={image} width="40px" />
          </button>
        </Grid>
        <Grid item lg={9} sm={8.5} xs={8.5}>
          <Flex style={{ width: "100%", height: "100%" }}>
            <Text fontSize="20px" lineHeight="25px">
              <span style={{ fontFamily: "SEN bold" }}>{descriptionBold}</span>
              {description}
            </Text>
          </Flex>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SecondayCard;
