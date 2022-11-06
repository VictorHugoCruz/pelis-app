searchFormBtn.addEventListener('click',()=>{
  location.hash='#search='+searchFormInput.value;
})

arrowBtn.addEventListener('click', ()=>{
  // location.hash = '#home';
  const [sect, valor] = location.hash.split('=');
  if(sect=='#search'){
    searchFormInput.value = '';
  }
  history.back();
})

trendingBtn.addEventListener('click', ()=>{
  location.hash= '#trends'
})

window.addEventListener('DOMContentLoaded', navigation, false);
window.addEventListener('hashchange', navigation, false);

function navigation(){
  console.log({location});
  

  if(location.hash.startsWith('#trends')){
    trendsPage();
  }else if(location.hash.startsWith('#category=')){
    categoriesPage();
  }else if(location.hash.startsWith('#movie=')){
    movieDetailPage();
  }else if (location.hash.startsWith('#search=')){
    searchPage();
  }else{
    homePage();
  }
  document.body.scrollTop = 0;
  document.documentElement.scrollTop=0;
}

function homePage(){
  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.add('inactive');
  headerTitle.classList.remove('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.remove('inactive');
  trendingPreviewSection.classList.remove('inactive');
  categoriesPreviewSection.classList.remove('inactive');
  genericSection.classList.add('inactive');
  movieDetailCategoriesList.classList.add('inactive');
  movieDetailSection.classList.add('inactive');

  getTrendingMoviesPreview();
  getCategoriesMoviesPreview();
  console.log('home');
}

function trendsPage(){
  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  headerCategoryTitle.innerHTML = 'Tendencias';
  headerCategoryTitle.classList.remove('header__title--category-view');

  searchForm.classList.add('inactive');
  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailCategoriesList.classList.add('inactive');
  movieDetailSection.classList.add('inactive');

  console.log('trends');
  getTrendingMovies();
}

function categoriesPage(){
  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  headerCategoryTitle.classList.remove('header__title--category-view');

  searchForm.classList.add('inactive');
  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailCategoriesList.classList.add('inactive');
  console.log('categories');
  const [_, dir] = location.hash.split('=');
  const [id, name] = dir.split('-');
  console.log(dir);
  headerCategoryTitle.innerHTML= name.replace('%20',' ');
  getMovieByCategory(id);
}

function movieDetailPage(){
  headerSection.classList.add('header-container--long');
  // headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.add('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.add('inactive');
  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.add('inactive');
  movieDetailSection.classList.remove('inactive');
  console.log('movie detail');

  const [_, id] = location.hash.split('=')
  getMovieById(id)
}

function searchPage(){
  headerSection.classList.remove('header-container--long');
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove('header-arrow--white');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('header__title--category-view');

  searchForm.classList.remove('inactive');
  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive');
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');
  const [_, query] = location.hash.split('=')
  getMovieBySearch(query);
  // console.log(searchValue);
}