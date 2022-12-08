import { Avatar } from '../../components'
import { AvatarType } from '../../utils/types'
import { getTwoCharOfName } from '../../utils/functions'
import { AvatarGroupStyle } from './style'

type IAvatarGroupProps = {
    maxLength: number,
    size: 'xs' | 'sm' | 'md' | 'lg',
    data: AvatarType[],
}

function AvatarGroup({ maxLength, size, data }: IAvatarGroupProps) {
    return (
        <div style={AvatarGroupStyle}>
            {
                data?.filter((e: any, i: number) => i < maxLength)?.map((e: any, i: number) =>
                    <Avatar key={i} avatar={e.avatar} size={size}>
                        {!e.avatar && <span>{getTwoCharOfName(e.name)}</span>}
                    </Avatar>
                )
            }
            {
                data?.length > maxLength &&
                <Avatar size={size}>
                    <span>+{data?.length - maxLength}</span>
                </Avatar>
            }
        </div>
    )
}

export default AvatarGroup
