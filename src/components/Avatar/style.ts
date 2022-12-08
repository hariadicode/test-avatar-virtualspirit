const AvatarStyle = (size: string, avatar?: string): React.CSSProperties | undefined => {
    return {
        width: `${size === 'xs' && '20px' || size === 'sm' && '35px' || size === 'md' && '45px' || size === 'lg' && '55px'}`,
        height: `${size === 'xs' && '20px' || size === 'sm' && '35px' || size === 'md' && '45px' || size === 'lg' && '55px'}`,
        backgroundImage: `url(${avatar})`,
        borderRadius: '50%',
        border: '3px solid #fff',
        backgroundColor: '#f2f2f2',
        fontSize: '20px',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase',
        marginLeft: '-16px',
        objectFit: 'cover',
    }
}

export { AvatarStyle }
