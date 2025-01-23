'use client';
import { beginStroke, endStroke, updateStroke } from "@/actions";
import { currentStrokeSelector } from "@/selectors";
import { useRef } from "react";
import  {useDispatch, useSelector} from 'react-redux';






export default function Home() {
  const currentStroke = useSelector(currentStrokeSelector)
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dispatch = useDispatch();
  const isDrawing = !!currentStroke?.points?.length;

  
  // FUNCTIONS For Drawing
  function startDrawing({nativeEvent}:React.MouseEvent<HTMLCanvasElement>) {
    const {offsetX, offsetY} = nativeEvent;
    dispatch(beginStroke(offsetX, offsetY));

  }

  function endDrawing() {
   if(isDrawing) {
     dispatch(endStroke());
  }
  }

  function draw({nativeEvent}:React.MouseEvent<HTMLCanvasElement>){
    if(!isDrawing){
      return
    }
   const {offsetX, offsetY} = nativeEvent;
   dispatch(updateStroke(offsetX, offsetY));
  }

  return (
  <canvas 
   ref={canvasRef} 
   onMouseDown={startDrawing}
   onMouseUp={endDrawing}
   onMouseOut={endDrawing}
   onMouseMove={draw}
   />
  )
}
 