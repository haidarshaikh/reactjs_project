import React, { useState } from 'react'

const LocalStorage = () => {

    const [data, setdata] = useState();

    const myName = 'Shaikh Haidar'

    const handleClick =() => {
        
        localStorage.setItem('name', myName)
        localStorage.setItem('mobile', '7083687066')

        // setItem()
        // getItem()
        // remove()
        // clear()
    };

    const handleRemove = () => {
        localStorage.removeItem('name')
        // localStorage.clear()

    };

    const myDetails = localStorage.getItem('name')

    
  return (
    <div>

    <h1>Name:  {myDetails}</h1>

    <input
    className='from-control mb-4'
    type='text'
    />


<br></br>

    <button onClick={handleClick} className='btn btn-success mb-4'>Add Data</button> <br></br>
    <button onClick={handleRemove} className='btn btn-danger'>Remove Data</button>
    </div>
  )
}

export default LocalStorage