import React,{useState} from "react";
import ImageSerach from "./Components/ImageSearch";
import ImageList from "./Components/ImageList";

const App=()=>{
  const [images,setImages]=useState([])

  return (
    <div>
          <p>Key = {process.env.REACT_APP_SECRET}</p>
          <ImageSerach  setImages={setImages} images={images}/> 
          <ImageList images={images}/>
    </div>
  );
}

export default App;
