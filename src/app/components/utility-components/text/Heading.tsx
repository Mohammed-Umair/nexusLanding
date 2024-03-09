import { Typography, TypographyProps } from "@mui/material";
import { ComponentProps } from "../../../utils/types";
import { DEFAULT_COLORS } from "../../../utils/colors";
import useIsBig from "@/app/hooks/useIsBig";
import useIsMobile from "@/app/hooks/useIsMobile";

const Heading = ({
    fontSize = "75px",
    color,
    fontFamily = "SEN bold",
    lineHeight = "70px",
    isGradient,
    textAlign = "left",
    children,
    lineBrake
}: ComponentProps) => {
    const isMobile = useIsMobile()
    return (
        <Typography
            fontSize={isMobile ? '45px' : fontSize}
            fontFamily={fontFamily}
            fontWeight={400}
            lineHeight={lineHeight}
            textAlign={textAlign as TypographyProps['textAlign']}
            whiteSpace={lineBrake ? 'nowrap' : 'normal'}
            sx={{
                color: isGradient ? '' : color
            }}
            className={isGradient ? 'grad-text' : ''}

        >
            {children}
        </Typography>
    );
};

export default Heading;
