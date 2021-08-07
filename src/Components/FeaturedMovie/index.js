import './style.css';


export function FeaturedMovie(props){
    return (
        <section className="featured"  style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${props.item.backdrop_path})`
        }}> 
            <div className="featured-vertical">
                <div className="featured-horizontal">

                </div>
            </div>
            
        </section>
    )
}