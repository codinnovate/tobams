'use client';
import { beginStroke, endStroke, updateStroke } from "@/actions";
import { currentStrokeSelector } from "@/selectors";
import { useEffect, useRef } from "react";
import  {useDispatch, useSelector} from 'react-redux';






export default function Home() {
  const currentStroke = useSelector(currentStrokeSelector)
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dispatch = useDispatch();
  const isDrawing = !!currentStroke?.points?.length;

  const getCanvasWithContext = (canvas = canvasRef.current) => {
    return {canvas, context:canvas?.getContext("2d")};
  }
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

  useEffect(() => {
    const {context} = getCanvasWithContext()
    if(!context){
      return
    }
    requestAnimationFrame(() => {
      drawStroke(context, currentStroke.points, currentStroke.color)
    })

  }, [currentStroke])

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
 