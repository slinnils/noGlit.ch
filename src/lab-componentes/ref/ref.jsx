import { useRef, useState } from 'react'

export default function Ref(){

    const imgInput = useRef();
    
    function handleClick(){
       imgInput.current.click();
    }

    const [displayed, setDisplayed] = useState(true);


    function handleDisplay(){
        setDisplayed(prev => !prev);
    }
    
  return (
      
    <div id="app">
      <h3 className='text-xl text-stone-200'>Please select an image</h3>
      <p>
        <input ref={imgInput} data-testid="file-picker" type="file" accept="image/*" style={{display: displayed ? 'none' : ''}}/>
        <button className='mt-3 mb-6' onClick={handleClick}>Pick Image</button>
      </p>
      <button onClick={handleDisplay}>display on/off</button>
    </div>
  );
}

    
