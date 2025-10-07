import { useState, useEffect } from "react";
import axios from "axios";



export const APImovie = () => {
  interface TypeCard2 {
    id: number;
    source: {
      id: string;
      name: string;
    }
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }


  const [card, setCard] = useState<TypeCard2[]>([]);


  const integratedAPIMovie = async () => {
    try {
      const respone = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=bb2e77e4ba8548fdba683d4642e9d802");
      setCard(respone.data.articles);
    } catch (error) {
      alert(error)
    }
  }


  useEffect(() => {
    integratedAPIMovie();
  }, []);

  return { card }

};
