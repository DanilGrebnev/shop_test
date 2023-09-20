import { CSSProperties } from 'react'

export interface ButtonProps {
    className?: string
    children?: React.ReactNode
    to: string
    types?: ButtonType
    badgeContent?: number
    style?: CSSProperties
    onClick?: () => void
}

export type LinkWrapperProps = Omit<ButtonProps, 'to'>

export enum ButtonType {
    BUTTON_LINK = 'buttonLink',
    DEFAULT = 'default',
}
