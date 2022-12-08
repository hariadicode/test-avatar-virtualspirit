import { render, screen, userEvent } from '../../utils/test-utils'
import { AvatarGroup } from '../../components'

const data = [{ name: 'Tomi Budi', avatar: '' }]

describe('AvatarGroup', async () => {
    it('should render the AvatarGroup', () => {
        render(
            <AvatarGroup maxLength={4} size='lg' data={data} />,
        )
        const maxLengthProps = screen.queryByText(/maxLength/i)
        expect(maxLengthProps).toBeDefined()
        const sizeProps = screen.queryByText(/size/i)
        expect(sizeProps).toBeDefined()
        const dataProps = screen.queryByText(/data/i)
        expect(dataProps).toBeDefined()
    })
})
