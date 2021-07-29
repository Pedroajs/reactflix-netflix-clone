const API_KEY = '40b04896d505c731edf51fdbd40d8fbe';
const API_BASE = 'https://api.themoviedb.org/3';

/*
    - originais neflix
    - em alta
    - recomendados
    - ação
    - comédia
    - terror
    - romance
    - documentários
    - nacionais

*/

async function basicFetch(endpoint){
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();

    return json;
}

export default{
    getHomeList: async () =>{
        return [
            {
                slug: 'Originals',
                title: 'originais do reactflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Trending',
                title: 'recomendados',
                items: await basicFetch(`/trending/all/week&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Top rated',
                title: 'em alta na plataforma',
                items: await basicFetch(`/movie/top_rated&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Action',
                title: 'Filmes de ação',
                items: await basicFetch(`discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Comedy',
                title: 'Filmes para fazer rir',
                items: await basicFetch(`discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Horror',
                title: 'Filmes de dar medo',
                items: await basicFetch(`discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Romance',
                title: 'Filmes parar assistit juntinho',
                items: await basicFetch(`discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Documentary',
                title: 'Documentários',
                items: await basicFetch(`discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
                      
        ];
    }
}