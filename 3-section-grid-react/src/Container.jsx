import { Header } from './components/Header'
import { GridPart } from './components/GridPart'
import citys from './data/citys.json'
import './style.css'

export const Container = () => {
  return (
    <>
      <Header />
      <GridPart nums={citys.nums} />
    </>
  )
}
