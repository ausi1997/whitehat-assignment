import React from "react";

import {Rect , Stage , Layer} from "react-konva";

const Rectangle  = ()=>{

  let rectangle = [];
    var number = localStorage.getItem('number');
    var height = localStorage.getItem('height');
    var width = localStorage.getItem('width');
    var x_axis = 20;
    var y_axis = 20;  
    for(var i =1; i<=number; i++){
          
      rectangle.push( <Rect
        x={x_axis}
        y={y_axis}
        width={width}
        height={height}
        strokeWidth={2} // border width
    stroke="black" // border color
      />
      )
      x_axis = x_axis+5;
      y_axis = y_axis+10;
      width=width-10;
      height=height-20;
    }
  

    return(
      <div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
         {
           rectangle
         }
        </Layer>
      </Stage>
        </div>
    )
}

export default Rectangle;