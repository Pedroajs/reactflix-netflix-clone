import { useEffect, useState } from "react";
import tmdb from "./tmdb";
import { MovieRow } from './Components/MovieRow/index'
import './App.css'
export function App (){


 const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () =>{
      let list = await tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return(
    <div className="page">
      {
        movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
  ))
      }

    </div>

  )
}