const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=6';
let  main = document.getElementById("main");
// load sign
window.addEventListener('load', () => {
    showMovies(apiUrl);
});
function showMovies(url){
fetch(url).then(res => res.json())
    .then((data) =>{   
  let dataResult = data.results;
  dataResult.forEach(element => {
        let el = document.createElement('div');
        console.log(el);
        main.appendChild(el);

        let image = document.createElement('img');
        el.appendChild(image);
        image.src = IMGPATH + element.poster_path;
        let text = document.createElement('h2');
        el.appendChild(text);
        text.innerHTML = `${element.title}`;
    
    }); 
})
.catch((err) => console.log(err));
}

