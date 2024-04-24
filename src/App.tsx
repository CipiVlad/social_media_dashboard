import { ThemeProvider } from 'styled-components'
import TotalFollowerList from './components/TotalFollowerList'
import './index.css'
import { useState } from 'react'
import { theme } from './style/theme'
import FollowerTodayList from './components/FollowerTodayList'
import './App.css'

function App() {
  const [toggle, setToggle] = useState<boolean>(true)
  return (
    <ThemeProvider theme={toggle ? theme.dark : theme.light}  >
      <div className="App">
        <button onClick={() => setToggle(!toggle)}>change theme</button>
        <TotalFollowerList toggle={toggle} setToggle={setToggle} />
        <FollowerTodayList toggle={toggle} setToggle={setToggle} />
      </div>
    </ThemeProvider >
  )
}

export default App
