import { ThemeProvider } from 'styled-components'
import TotalFollowerList from './components/TotalFollowerList'
import './index.css'
import { useState } from 'react'
import { theme } from './style/theme'
import FollowerTodayList from './components/FollowerTodayList'


function App() {
  const [toggle, setToggle] = useState<boolean>(true)
  return (
    <ThemeProvider theme={toggle ? theme.dark : theme.light}  >
      <div className="App">
        <TotalFollowerList toggle={toggle} setToggle={setToggle} />
        <FollowerTodayList />
      </div>
    </ThemeProvider >
  )
}

export default App
