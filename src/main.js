const buscador = document.getElementById('buscador');

const palabraBuscada = buscador.value;

const buscadorPag = document.getElementById('buscadorPag');

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        "api_key": API_KEY,
        "language": "es-AR"
    },
});

async function getTendenciasPreview(){
    const { data } = await api('trending/movie/day');
    const movies = data.results;
    const PelisTendenciasPreview = document.getElementById('pelisTendenciasPreview');

    llamandoPreviewPeliculas(movies, PelisTendenciasPreview)
}

async function getRecomendadasPreview(){
    const { data } = await api('movie/top_rated');
    const movies = data.results;
    const PelisRecomendadasPreview = document.getElementById('pelisRecomendadasPreview');

    llamandoPreviewPeliculas(movies, PelisRecomendadasPreview)
}

async function getCategoriasPreview(){
    const { data } = await api('genre/movie/list');
    const categorias = data.genres;
    console.log(categorias)

    const divCategorias = document.getElementById('categorias');
    
    categorias.forEach(categoria => {
        const categoriaInd = document.createElement('div');
        const categoriaParr = document.createElement('p');
        categoriaInd.classList.add('col-4');
        categoriaParr.classList.add('buttonCat','fuenteCategorias');
        categoriaParr.textContent = (categoria.name).toUpperCase()
        categoriaInd.appendChild(categoriaParr);
        categoriaInd.addEventListener('click', () => {
            location.hash = '#categoria=' + categoria.id + '-' + removeAccents(categoria.name);
        });
        divCategorias.appendChild(categoriaInd);
    });
}

function buscar(){
    location.hash = 'buscar=' + buscador.value;
    buscador.value = ''
}

function busquedaAnterior(){
    history.back();
}
