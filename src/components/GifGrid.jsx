import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";



export const GifGrid = ({ category }) => { //aquí recibe como prop la category

  const [counter, setCounter] = useState(10)
  const [images, setImages] = useState([]);

  const getImages = async()=> {
    const newImages = await getGifs(category)
    setImages(newImages)
  }

  useEffect( () => {
    getImages();

  }, [])


  return (
    <>
      <h3>{category}</h3>
      <p>{counter}</p>
      <button onClick={ () => setCounter( counter +1) }>+1</button>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem
          key={image.id}
          { ...image}
          />
        ))}
      </div>
    </>
  );
};
