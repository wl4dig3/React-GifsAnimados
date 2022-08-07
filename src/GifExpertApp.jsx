import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const category = ["One Punch"];

const GifExpertApp = () => {
  const [categories, setCategories] = useState(category);
  // console.log(categories);

  const onAddCategorie = (newCategory) => {
    if (categories.includes(newCategory)) return; // es este linea se hace que cada string sea único
    // console.log(newCategory);
    setCategories([newCategory, ...categories]);
    // setCategories(catego => [...catego, 'Goku])  esta es otra forma de hacerlo
  };
  return (
    <>
      <h1>GifExpert App</h1>
      {/* Input */}
      <AddCategory
        //  setCategories={setCategories}
        onNewCategory={(loquesea) => onAddCategorie(loquesea)}
      />
      {/* Listado de Gif */}
      <button onClick={onAddCategorie}>Agregar</button>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
