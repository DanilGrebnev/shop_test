import { FC, memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Button as ButtonMUI } from '@mui/material'
import Badge, { BadgeProps } from '@mui/material/Badge'
import { styled } from '@mui/material/styles'

import cn from '@/shared/lib/classnames'

import { ButtonProps, ButtonType, LinkWrapperProps } from './ButtonType'

import s from './Button.module.scss'

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    '& .MuiBadge-badge': {
        right: -10,
        top: 0,
        padding: '0 4px',
        color: 'white',
    },
}))

export const Button: FC<ButtonProps> = memo((props) => {
    const {
        to,
        children,
        style,
        badgeContent,
        className,
        color,
        variant = 'outlined',
        types = ButtonType.DEFAULT,
        ...otherProps
    } = props

    const LinkWrapper: FC<LinkWrapperProps> = (LinkProps) => {
        return <NavLink to={to || ''}>{LinkProps.children}</NavLink>
    }

    const DefaultButton = (
        <ButtonMUI
            {...otherProps}
            variant={variant}
            style={{ color, ...style }}
            className={cn(s.Button, className)}
        >
            <StyledBadge
                color='secondary'
                badgeContent={badgeContent}
            >
                {children}
            </StyledBadge>
        </ButtonMUI>
    )

    const ButtonLink = <LinkWrapper>{DefaultButton}</LinkWrapper>

    return {
        [ButtonType.BUTTON_LINK]: ButtonLink,
        [ButtonType.DEFAULT]: DefaultButton,
    }[types]
})
