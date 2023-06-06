const Heading = ({ singledata, center }) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className='text-2xl font-bold'>{singledata.title}</div>
      <div className='font-light text-neutral-500 mt-2'>{singledata.subtitle}</div>
    </div>
  )
}

export default Heading
