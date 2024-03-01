import { Typography, TypographyProps } from "@mui/material";
import { ComponentProps } from "../../../utils/types";
import { DEFAULT_COLORS } from "../../../utils/colors";


const Text = ({
  fontSize = "25px",
  color,
  fontFamily = "SEN medium",
  maxWidth,
  lineHeight = "50px",
  isGradient,
  children,
  textAlign,
  lineBrake

}: ComponentProps) => {
  return (
    <Typography
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={800}
      lineHeight={lineHeight}
      textAlign={textAlign as TypographyProps['textAlign']} // Correctly typing textAlign
      maxWidth={maxWidth}
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

export default Text;
