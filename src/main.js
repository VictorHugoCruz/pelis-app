//funcion para obtener las peliculas en tendencia
async function getTrendingMoviesPreview(){
  const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key='+ API_KEY);
  const data = await res.json();
  const movies = data.results;
  movies.forEach(movie =>{
    const sectionTrendingMoviesPreview = document.querySelector('#trendingPreview .trending-preview__movie-list');
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');
    const imagen = document.createElement('img');
    imagen.classList.add('movie-img');
    imagen.setAttribute('alt', movie.title);
    imagen.setAttribute('src', 'https://image.tmdb.org/t/p/w300'+movie.poster_path);

    movieContainer.appendChild(imagen);
    sectionTrendingMoviesPreview.appendChild(movieContainer);

  });

}

getTrendingMoviesPreview();