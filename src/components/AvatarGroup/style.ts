const AvatarGroupStyle = {
    border: '2px solid #242424',
    padding: '8px 16px 8px 32px',
    display: 'flex',
    alignItems: 'center',
}

const ImageStyle = (size: string): React.CSSProperties | undefined => {
    return {
        width: `${size === 'xs' && '20px' || size === 'sm' && '35px' || size === 'md' && '45px' || size === 'lg' && '55px'}`,
        height: `${size === 'xs' && '20px' || size === 'sm' && '35px' || size === 'md' && '45px' || size === 'lg' && '55px'}`,
        objectFit: 'cover',
        borderRadius: '50%',
    }
}

export { ImageStyle, AvatarGroupStyle }
