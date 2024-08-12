export const GridItem = (props) => {
  const idx = props.idx
  return (
    <a className='grid-item' href='../../' key={idx}>
      <div className='in ul'>
        <p>{idx}</p>
      </div>
      <div className='in ur'>
        <p>wifi</p>
      </div>
      <div className='in core'>
        <div className='up'>
          <p>Country</p>
        </div>
        <div className='down'>
          <p>city</p>
        </div>
      </div>
      <div className='in bl'>
        <p>30 °C</p>
      </div>
      <div className='in bc'>
        <p>😎</p>
      </div>
      <div className='in br'>
        <p>cost</p>
      </div>
    </a>
  )
}
