import React, {useRef} from 'react'

const UseRefWork = () => {
    const handleRef = useRef();
    
    const inputRef = useRef();
    

    const handleClick = () => {
        const data = handleRef.current;
        const inRef = inputRef.current.focus();
        console.log(inRef)
    };


  return (
    <div>
        <h1 ref={handleRef}>Welcome</h1>

    <input type='text ' ref={inputRef}/>
    <br></br>

        <button className='btn btn-primary mt-4'
        type='submit'
        onClick={handleClick}
        >Click</button>
    </div>
  )
}

export default UseRefWork;