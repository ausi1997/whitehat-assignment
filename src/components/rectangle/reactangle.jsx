import React from "react";

import {Rect , Stage , Text , Layer} from "react-konva";

const Rectangle  = ()=>{
    return(
        <div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
        
          <Rect
        x={20}
        y={20}
        width={90}
        height={50}
        fill="green"
      />
        </Layer>
      </Stage>
        </div>
    )
}

export default Rectangle;