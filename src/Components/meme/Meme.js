import React, { useCallback, useEffect, useState } from "react";
import {
  Form,
  FormButton,
  FormInput,
  MemeContainer,
  MemeFlexbox,
  MemeText,
  MemeImage,
  Main,
} from "./styles";

export default function Meme() {
  // State that handles our list of memes
  // Starts out empty ([]) will get filled by API
  const [allMemes, setAllMemes] = useState([]);

  // State that handles the meme the user makes
  // It starts out with a default picture and no text
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  // "Fetching" meme images from the API
  // Parsing the API results into a javascript object (data)
  // Storing them in the setAllMemes array
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  /* useCallback will create a function that gets updated whenever a
   variable in the dependency array changes.
   This function grabs a random image out of the allMemes array and
   places it in the meme object */
  const getMemeImage = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
    // Dependency array
  }, [allMemes]);

  // Handles user input and updates the meme object
  const handleChange = useCallback((event) => {
    /* "name" is a prop for the FormInput and has 
    the value "topText" or "bottomText. This matches the properties
    on the meme object
    */
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }, []);

  /* Here I am using styled components and they can be 
  viewed in their own styles.js files
  */
  return (
    <Main>
      <Form>
        <FormInput
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></FormInput>
        <FormInput
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></FormInput>
        <FormButton onClick={getMemeImage}>Get new meme!</FormButton>
      </Form>
      <MemeFlexbox>
        <MemeContainer>
          <MemeText className="top">{meme.topText}</MemeText>
          <MemeText className="bottom">{meme.bottomText}</MemeText>
          <MemeImage src={meme.randomImage} />
        </MemeContainer>
      </MemeFlexbox>
    </Main>
  );
}
