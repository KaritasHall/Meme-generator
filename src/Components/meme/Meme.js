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
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  /*const getMemeImage = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }, []);*/

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  // const style = {
  //   backgroundImage: "url(" + meme.randomImage + ")",
  // };

  return (
    <Main>
      <Form>
        <FormInput
          type="text"
          placeholder="top-text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></FormInput>
        <FormInput
          type="text"
          placeholder="bottom-text"
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
