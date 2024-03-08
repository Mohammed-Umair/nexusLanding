import { SxProps } from "@mui/material";
import { ReactNode, CSSProperties } from "react";


export type ComponentProps = {
    children?: ReactNode
    sx?: SxProps
    style?: CSSProperties
    ref?: string
    fontSize?: string
    fontFamily?: string
    isGradient?: boolean
    background?: string
    padding?: string
    border?: boolean
    borderRadius?: string
    fullWidth?: boolean
    justifyContent?: string
    alignItems?: object | string
    gap?: string | object | number | undefined
    flexDirection?: object | string
    width?: string
    src?: string
    color?: string
    lineHeight?: string
    icon?: JSX.Element
    maxWidth?: string
    textAlign?: string | object
    borderColor?: string
    placeholder?: string
    className?: string
    hover?: boolean
    hoverColor?: string
    lineBrake?: boolean,
    onClick?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeText?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    type?: 'button' | 'submit' | 'reset';
    value?: string;
    margin?: string;
}
