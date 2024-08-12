import { GridItem } from './GridItem'

export const GridPart = (props) => {
  const nums = props.nums
  return (
    <div className='grid-part'>
      {nums.map((idx) => (
        <GridItem idx={idx} />
      ))}
    </div>
  )
}
