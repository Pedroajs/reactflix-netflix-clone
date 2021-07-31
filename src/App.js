import { useEffect, useState } from "react";
import tmdb from "./tmdb";

import { MovieRow } from './Components/MovieRow/index'
import { FeaturedMovie } from "./Components/FeaturedMovie/index";

import './App.css'
export function App (){


 const [movieList, setMovieList] = useState([]);
 const [featuredData, setFeaturedData] = useState(null);
 
  useEffect(()=>{
    const loadAll = async () =>{
      let list = await tmdb.getHomeList();
      setMovieList(list);

      //pegando o feature
      let feature = list.filter( i=> i.slug === 'originals');
      let randomChosen = Math.floor(Math.random()*(feature[0].items.results.length -1));

      let chosen = feature[0].items.results[randomChosen]
      
      console.log(chosen)
    }

    loadAll();
  }, []);

  return(


    <div className="page">

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {
          movieList.map((item, key)=>(
            <MovieRow key={key} title={item.title} items={item.items} />
    ))
        }
      </section>

    </div>

  )
}