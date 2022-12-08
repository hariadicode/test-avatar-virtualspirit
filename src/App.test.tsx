import App from './App'
import { render, screen, userEvent } from './utils/test-utils'

describe('App', () => {
    it('render properly', () => {
        render(<App />)
        expect(screen).toMatchSnapshot()
    })
})
