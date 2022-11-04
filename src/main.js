const api = axios.create({
  baseURL:'https://api.themoviedb.org/3/',
  headers:{
    'Content-type': 'application/json;charset=utf-8'
  },
  params:{
    'api_key': API_KEY,
  }
});

//funcion para obtener las peliculas en tendencia
async function getTrendingMoviesPreview(){
  const { data } = await api('trending/movie/day');
  // console.log(data);
  const movies = data.results;
  movies.forEach(movie =>{
    trendingMoviesPreviewList;
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');
    const imagen = document.createElement('img');
    imagen.classList.add('movie-img');
    imagen.setAttribute('alt', movie.title);
    imagen.setAttribute('src', 'https://image.tmdb.org/t/p/w300'+movie.poster_path);

    movieContainer.appendChild(imagen);
    trendingMoviesPreviewList.appendChild(movieContainer);

  });
}
//funcion para obtener las categorias de peliculas
async function getCategoriesMoviesPreview(){
  const { data } = await api('genre/movie/list');
  const categories = data.genres;
  categories.forEach(category =>{
    categoriesPreviewList;

    const categoryConatiner = document.createElement('div');
    categoryConatiner.classList.add('category-container');
    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');
    const categoryText = document.createTextNode(category.name);
    categoryTitle.setAttribute('id', 'id' +category.id);

    categoryTitle.appendChild(categoryText);
    categoryConatiner.appendChild(categoryTitle);
    categoriesPreviewList.appendChild(categoryConatiner);
  })
  console.log()
}
