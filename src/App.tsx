import { Header } from "./components/custom/header"
import { ModeToggle } from "./components/custom/mode-toggle"
import { Button } from "./components/ui/button"

function App() {

  const routes=[
    {name:"About"},
    {name:"My Works"},
    {name:"Contact me"}
  ]

  return (
    <>
    <Header heading="Darshan M P" text="darshan" children={routes}/>
    </>
  )
}

export default App
