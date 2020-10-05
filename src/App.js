import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Image from './components/Image';
import Description from './components/Description'
import Directions from './components/Directions';
import Video from './components/Video';
import Ingredients from './components/Ingredients';





const App = () => {
  const [recepie, setRecepie] = useState({});
  const [video, setVideo] = useState('');
  const [ing, setIngredients] = useState([]);
  const [image, setImage] = useState('');
  const [data, setData] = useState({});
  const [info, setInfo] = useState('');

  const getRecepie = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const recepie = await response.json();

      // Get the video source for the embed iframe
      const videoSrc = recepie.meals[0].strYoutube.replace('watch?v=', 'embed/');
      setVideo(videoSrc);

      // Set the recepie json for the random recepie in the state variable
      setRecepie(recepie.meals[0]);


      // Ingredients
      const ingredient = [];
      const measures = [];
      for (const [key, value] of Object.entries(recepie.meals[0])) {
        if (key.startsWith('strIngredient') && value !== "" && value !== null) {
          ingredient.push(value);
        }
        if(key.startsWith('strMeasure') && value !== "" && value !== null) {
          measures.push(value);
        }
      }
      const ingredients = [];
      for(let i = 0;i < measures.length; i++) {
        if(ingredient[i] !== undefined && measures[i] !== undefined) {
          ingredients.push({
            ingredient : ingredient[i],
            measure : measures[i]
          })
        }
        
      }

      setIngredients(ingredients);

      // Get image for the recepie
      setImage(recepie.meals[0].strMealThumb);

      // Data for the recepie
      setData({
        category : recepie.meals[0].strCategory,
        tags : recepie.meals[0].strTags,
        area : recepie.meals[0].strArea,
        name : recepie.meals[0].strMeal
      })

      // Set directions for the recepie
      setInfo(recepie.meals[0].strInstructions);

    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getRecepie();
  }, [])

  return (
    <div>
      <Header />
      <button onClick={getRecepie}>GET MEAL 🍲</button>
      <div>
        <div>
          <Image image={image} />
          <Description data={data} />
        </div>
        <div>
          <Directions directions={info} />
          <Ingredients ingredients={ing}/>
        </div>
        <Video src={video} />
      </div>

    </div>

  )
}


export default App;