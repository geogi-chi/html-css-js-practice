import { createRoot } from 'react-dom/client'
import { Header } from './components/Header'
import { GridPart } from './components/GridPart'
import citys from './data/citys.json'
import './style.css'

const App = () => {
  return (
    <>
      <Header />
      <GridPart nums={citys.nums} />
    </>
  )
}
createRoot(document.getElementById('app')).render(<App />)
