
import './style.css';

export function MovieRow(props){
  return (
    <div>
      <h2>{props.title}</h2>
      <div className="movieRow--listArea">
        {
        props.items.results.length > 0  && props.items.results.map((item, key)=>(
           <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
        ))
      }
      </div>
    </div>
  )
}