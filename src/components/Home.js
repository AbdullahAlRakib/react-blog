import React from 'react'

const Home = () => {
const handleClick=(e)=>{
    console.log('Clicked',e);
}
  return (
    <div className='home'>
        
       <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Home