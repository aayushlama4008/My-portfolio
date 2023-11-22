import './App.scss'

import { About , Footer , Header ,Skills ,Testimonials,Work} from './container/Container'
import { NavBar } from './components'
function App() {

  return (
    <div className="app">
      <NavBar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/> 
    </div>
  )
}

export default App
