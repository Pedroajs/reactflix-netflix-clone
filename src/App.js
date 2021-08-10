import { useEffect, useState } from "react";
import tmdb from "./tmdb";

import { MovieRow } from './Components/MovieRow/'
import { FeaturedMovie } from "./Components/FeaturedMovie/";
import { Header } from "./Components/Header/";
import './App.css'
export function App (){


 const [movieList, setMovieList] = useState([]);
 const [featuredData, setFeaturedData] = useState(null);
 const [blackHeader, setBlackHeader] = useState(false);
 
  useEffect(()=>{
    const loadAll = async () =>{
      let list = await tmdb.getHomeList();
      setMovieList(list);

      //pegando o feature
      let feature = list.filter( i=> i.slug === 'originals');
      let randomChosen = Math.floor(Math.random()*(feature[0].items.results.length -1));

      let chosen = feature[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getTargetMovie(chosen.id, 'tv');     

      setFeaturedData(chosenInfo);
 
    }

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      } else setBlackHeader(false)
    }

    window.addEventListener('scroll', scrollListener);

    return ()=>{
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])
  return(


    <div className="page">

      <Header HeaderInBlack={blackHeader} />

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
      <footer>
          Feito por <a href="https://github.com/Pedroajs">Pedro Augusto</a>
          <br />
          Dados da API Themoviedb.org
      </footer>

       {movieList.length <= 0 && 
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="carregando" />
        </div>
      }
    </div>

  )
}