//creamos una instancia de axios para el consumo de la api
const api = axios.create({
  baseURL:'https://api.themoviedb.org/3/',
  headers:{
    'Content-type': 'application/json;charset=utf-8'
  },
  params:{
    'api_key': API_KEY,
  }
});

//funcion para crear peliculas
function createMovies(movies, container){
  container.innerHTML='';
  movies.forEach(movie =>{
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');
    const imagen = document.createElement('img');
    imagen.classList.add('movie-img');
    imagen.setAttribute('alt', movie.title);
    imagen.setAttribute('src', 'https://image.tmdb.org/t/p/w300'+movie.poster_path);
    movieContainer.appendChild(imagen);
    container.appendChild(movieContainer);
  });

}

//funcion para crear categorias

function createCategories(categories, container){
  container.innerHTML='';
  categories.forEach(category =>{
    const categoryConatiner = document.createElement('div');
    categoryConatiner.classList.add('category-container');
    const categoryTitle = document.createElement('h3');
    categoryTitle.addEventListener('click',()=>{
      location.hash=`#category=${category.id}-${category.name}`
    })
    categoryTitle.classList.add('category-title');
    const categoryText = document.createTextNode(category.name);
    categoryTitle.setAttribute('id', 'id' +category.id);
    categoryTitle.appendChild(categoryText);
    categoryConatiner.appendChild(categoryTitle);
    container.appendChild(categoryConatiner);
  })
}

//funcion para obtener las peliculas en tendencia
async function getTrendingMoviesPreview(){
  const { data } = await api('trending/movie/day');
  // console.log(data);
  const movies = data.results;
  createMovies(movies,trendingMoviesPreviewList )
}
//funcion para obtener las categorias de peliculas
async function getCategoriesMoviesPreview(){
  const { data } = await api('genre/movie/list');
  const categories = data.genres;

  createCategories(categories, categoriesPreviewList);
}

async function getMovieByCategory(id){
  const { data } = await api('discover/movie',
    {params:{
      with_genres:id,
    },}
  );
  console.log(data);
  const movies = data.results;
  createMovies(movies, genericSection);
}


async function getMovieBySearch(query){
  const { data } = await api('search/movie',
    {params:{
      query,
    },}
  );
  console.log(data);
  const movies = data.results;
  createMovies(movies, genericSection);
}