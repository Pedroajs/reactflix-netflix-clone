import { useEffect, useState } from "react";
import tmdb from "./tmdb";

export default () =>{


  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () =>{
      //pegando a lista total

      let list = await tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return(
    <div className="page">
      header
      destaque
      listas
      rodapé basicão
    </div>

  )
}