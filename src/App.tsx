import * as React from "react"
import { AvatarGroup } from "./components"
import { AvatarType } from "./utils/types"

const ContainerStyle = {
  padding: '260px 0px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

function App() {
  const [data, setData] = React.useState<AvatarType[]>([])
  React.useEffect(() => {
    setData([
      { name: 'Tomi Budi', avatar: 'https://images.unsplash.com/photo-1669322477549-e1d4cfcefa58?w=55' },
      { name: 'Tomi Budi', avatar: 'https://images.unsplash.com/photo-1669322477549-e1d4cfcefa58?w=55' },
      { name: 'Tomi Budi', avatar: 'https://images.unsplash.com/photo-1669322477549-e1d4cfcefa58?w=55' },
      { name: 'Tomi Budi', avatar: 'https://images.unsplash.com/photo-1669322477549-e1d4cfcefa58?w=55' },
      { name: 'Tomi Budi', avatar: 'https://images.unsplash.com/photo-1669322477549-e1d4cfcefa58?w=55' },
    ])
  }, [])
  return (
    <div id="app" style={ContainerStyle}>
      <AvatarGroup maxLength={4} size='lg' data={data} />
    </div>
  )
}

export default App
