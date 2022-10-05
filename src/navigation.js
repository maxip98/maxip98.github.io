window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('haschange', navigator, false);

const inicio = document.getElementById('home');
const tendencias = document.getElementById('pelisTendencia');
const recomendadas = document.getElementById('pelisRecomendadas');
const categorias1 = document.getElementById('pelisCategorias');
const categoriaIndividual = document.getElementById('categoriaIndividual');
const buscadores = document.getElementById('buscadores');
const peliIndividual = document.getElementById('peliIndividual');
const resenaWeb = document.getElementById('resenaWeb');

function navigator() {
    
    if (location.hash.startsWith('#tendencias')){
        paginaTendencias();
    }   else if (location.hash.startsWith('#recomendadas')){
        paginaRecomendadas();
    }   else if (location.hash.startsWith('#categorias')){
        paginaCategorias();
    }   else if (location.hash.startsWith('#buscar=')){
        paginaBuscar();
    }   else if (location.hash.startsWith('#pelicula=')){
        paginaDetallesPelicula();
    }   else if (location.hash.startsWith('#categoria=')){
        tipoCategoria();
    }   else if (location.hash.startsWith('#resena')){
        paginaResenaWeb();
    }   else{
        paginaInicio();
    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function paginaInicio(){
    getTendenciasPreview();
    getCategoriasPreview();
    getRecomendadasPreview();
    inicio.classList.remove("invisible");
    tendencias.classList.add("invisible");
    recomendadas.classList.add("invisible");
    categorias1.classList.add("invisible");
    buscadores.classList.add("invisible");
    peliIndividual.classList.add("invisible");
    resenaWeb.classList.add("invisible");
}

function paginaTendencias(){
    listadoPelisTendencia();
    tendencias.classList.remove("invisible");
    inicio.classList.add("invisible");
    recomendadas.classList.add("invisible");
    categorias1.classList.add("invisible");
    buscadores.classList.add("invisible");
    peliIndividual.classList.add("invisible");
    resenaWeb.classList.add("invisible");
}

function paginaRecomendadas(){
    listadoPelisRecomendadas();
    recomendadas.classList.remove("invisible");
    inicio.classList.add("invisible");
    tendencias.classList.add("invisible");
    categorias1.classList.add("invisible");
    buscadores.classList.add("invisible");
    peliIndividual.classList.add("invisible");
    resenaWeb.classList.add("invisible");
}

function paginaCategorias(){
    listadoCategorias();
    categorias1.classList.remove("invisible");
    inicio.classList.add("invisible");
    tendencias.classList.add("invisible");
    recomendadas.classList.add("invisible");
    buscadores.classList.add("invisible");
    peliIndividual.classList.add("invisible");
    resenaWeb.classList.add("invisible");
}

function tipoCategoria(){
    const [_,infoCategoria] = location.hash.split('=');
    const [idCategoria, nombreCategoria] = infoCategoria.split('-');

    listadoPelisPorCategoria(idCategoria, nombreCategoria);
    categoriaIndividual.classList.remove("invisible");
    inicio.classList.add("invisible");
    tendencias.classList.add("invisible");
    recomendadas.classList.add("invisible");
    categorias1.classList.add("invisible");
    buscadores.classList.add("invisible");
    peliIndividual.classList.add("invisible");
    resenaWeb.classList.add("invisible");
}

function paginaBuscar(){
    const query = decodeURI(location.hash.split("=")[1]);
    buscadores.classList.remove("invisible");
    inicio.classList.add("invisible");
    tendencias.classList.add("invisible");
    recomendadas.classList.add("invisible");
    categorias1.classList.add("invisible");
    peliIndividual.classList.add("invisible");
    resenaWeb.classList.add("invisible");
    listadoPelisPorBusqueda(query);
}

function paginaDetallesPelicula(){
    const id = decodeURI(location.hash.split("=")[1]);
    console.log('pelicula individual');
    peliIndividual.classList.remove("invisible");
    recomendadas.classList.add("invisible");
    inicio.classList.add("invisible");
    tendencias.classList.add("invisible");
    categorias1.classList.add("invisible");
    buscadores.classList.add("invisible");
    resenaWeb.classList.add("invisible");
    cargarPelicula(id);
    listadoPelisRelacionadas(id);
}

function paginaResenaWeb(){
    resenaWeb.classList.remove("invisible");
    inicio.classList.add("invisible");
    tendencias.classList.add("invisible");
    recomendadas.classList.add("invisible");
    categorias1.classList.add("invisible");
    peliIndividual.classList.add("invisible");
    buscadores.classList.add("invisible");
}

