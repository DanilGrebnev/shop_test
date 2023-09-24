import { CSSProperties } from 'react'

export interface ButtonProps {
    disabled?: boolean
    className?: string
    children?: React.ReactNode
    to?: string
    types?: ButtonType
    badgeContent?: number
    style?: CSSProperties
    color?: string
    size?: 'large' | 'medium' | 'small'
    variant?: 'contained' | 'outlined' | 'text'
    onClick?: () => void
}

export type LinkWrapperProps = Omit<ButtonProps, 'to'>

export enum ButtonType {
    BUTTON_LINK = 'buttonLink',
    DEFAULT = 'default',
}
