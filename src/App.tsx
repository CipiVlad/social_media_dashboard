import { ThemeProvider } from 'styled-components'
import TotalFollowerList from './components/TotalFollowerList'
import './index.css'
import { useState } from 'react'
import { theme } from './style/theme'
import FollowerTodayList from './components/FollowerTodayList'
import './App.css'
import { BackGroundDark, BackgroundCardTop } from './style/styles.background'
import Navbar from './components/Navbar'


function App() {
  const [toggle, setToggle] = useState<boolean>(true)
  return (
    <ThemeProvider theme={toggle ? theme.dark : theme.light}  >
      <BackGroundDark>
        <BackgroundCardTop>
          <div className="App">
            <Navbar toggle={toggle} setToggle={setToggle} />
            <TotalFollowerList toggle={toggle} setToggle={setToggle} />
            <FollowerTodayList toggle={toggle} setToggle={setToggle} />
          </div>
        </BackgroundCardTop>
      </BackGroundDark>
    </ThemeProvider >
  )
}

export default App
