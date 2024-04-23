import { ThemeProvider } from 'styled-components'
import TotalFollowerList from './components/TotalFollowerList'
import './index.css'
import { useState } from 'react'

function App() {

  const theme = {
    dark: {
      background: 'hsl(230, 17%, 14%)',
      backgroundCard: 'hsl(228, 28%, 20%)',
      backgroundToggle: 'linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
      text: 'hsl(228, 34%, 66%)',
      textCard: 'hsl(228, 34%, 66%)',
    },

    light: {
      background: 'hsl(0, 0%, 100%)',
      backgroundCard: 'hsl(227, 47%, 96%)',
      backgroundToggle: 'linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
      text: 'hsl(230, 17%, 14%)',
      textCard: 'hsl(228, 12%, 44%)',
    }
  }

  const [toggle, setToggle] = useState<boolean>(false)


  return (
    <ThemeProvider theme={toggle ? theme.dark : theme.light}  >
      <div className="App">
        <TotalFollowerList toggle={toggle} setToggle={setToggle} />
      </div>
    </ThemeProvider >
  )
}

export default App
