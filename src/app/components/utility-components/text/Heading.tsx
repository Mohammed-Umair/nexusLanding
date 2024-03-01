import { Typography, TypographyProps } from "@mui/material";
import { ComponentProps } from "../../../utils/types";
import { DEFAULT_COLORS } from "../../../utils/colors";
import useIsBig from "@/app/hooks/useIsBig";

const Heading = ({
    fontSize = "60px",
    color,
    fontFamily = "SEN bold",
    lineHeight = "70px",
    isGradient,
    textAlign = "left",
    children,
    lineBrake
}: ComponentProps) => {
    const isBig = useIsBig();

    // Define font sizes for different breakpoints
    const fontSizes = {
        xs: '35px',
        sm: isBig ? '90px' : fontSize,
    };

    return (
        <Typography
            fontSize={fontSizes}
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
