async function listadoPelisRecomendadas(){
    const { data } = await api('movie/top_rated');
    const movies = data.results;

    const divListadoPelisRecomendadas = document.getElementById('listadoPelisRecomendadas');

    llamandoPeliculas(movies, divListadoPelisRecomendadas);

}
