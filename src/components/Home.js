import React, { useState } from 'react';

const Home = () => {
    const[name,setName]=useState('mario')
    const handleClick=()=>{
        setName('Luigi')
    }
  return (
    <div className='home'>
        <h2>{name}</h2>       
       <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Home