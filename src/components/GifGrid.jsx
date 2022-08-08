import { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  //aquí recibe como prop la category
  const [counter, setCounter] = useState(10)

  const {images, isLoading} = useFetchGifs(category);
  // console.log({ isLoading });
  

  return (
    <>
      <h3>{category}</h3>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
