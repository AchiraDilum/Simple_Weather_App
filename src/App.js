import React, {useState} from 'react';
import Weather from "./Weather";

function App() {
  let textInput=React.createRef();
  const [data,setData]=useState('');
  function getCity(){
    setData(textInput.current.value);
  }
  return (
    <div >
      <h1 style={{color:'white',marginLeft:'40%',marginTop:'40px'}}>Weather App</h1>
      <div style={{display:'flex'}}>
      <input  ref={textInput} style={{marginLeft:'40%',marginTop:'40px',borderRadius:'5px',opacity:'0.6'}} type="text"></input>
      <button  onClick={getCity} className="btn btn-primary" style={{marginTop:'40px'}}>Search</button>
      </div>
      <Weather name={data}/>
    </div>
  );
}

export default App;
