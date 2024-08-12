import { Fragment } from 'react'
import { GridItem } from './GridItem'

export const GridPart = (props) => {
  const nums = props.nums
  return (
    <div className='grid-part'>
      {nums.map((num, key) => (
        <Fragment key={key}>
          <GridItem num={num} />
        </Fragment>
      ))}
    </div>
  )
}
