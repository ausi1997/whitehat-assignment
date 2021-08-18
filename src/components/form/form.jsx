import React, { useState } from  "react";

import {Button , TextField } from "@material-ui/core";

const Form = ()=>{

    const [number , setNumber] = useState('');
    const [height , setHeight] = useState('');
    const [width , setWidth]   = useState('');

    const Submit = ()=>{
        console.log(number,height,width);
    }
    return(
        <div style={{marginLeft:"10px"}}>
        <h2>Fill it</h2>
        <form className="form">
        <TextField className="input" label="Number of Rectangle" value={number}
         onChange={(e) => setNumber(e.target.value)} variant="outlined" />

         <br></br>

         <TextField className="input" label="Height" value={height}
         onChange={(e) => setHeight(e.target.value)} variant="outlined" />

         <br></br>

         <TextField className="input" label="Width" value={width}
         onChange={(e) => setWidth(e.target.value)} variant="outlined" />
        </form>
        <br></br>
        <Button variant="contained" onClick={Submit} color="primary">
        Submit
      </Button>
        </div>
    )
}

export default Form;