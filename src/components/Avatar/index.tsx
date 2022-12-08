import * as React from 'react'
import { AvatarStyle } from './style'

type IAvatarProps = {
    children: React.ReactNode,
    avatar?: string,
    size: 'xs' | 'sm' | 'md' | 'lg',
}

function Avatar({ children, avatar, size }: IAvatarProps) {
    return (
        <div style={AvatarStyle(size, avatar)}>
            {children}
        </div>
    )
}

export default Avatar
