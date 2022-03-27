import movies from "./movies.js";

class DataSource {

  static searchMovie(query) {
      return fetch(`https://api.themoviedb.org/3/search/tv?api_key=ecae96a07e730c891c7e43b5054ce9e5&query=${query}&include_adult=false`)
          .then(response => {
              return response.json();
          })

          .then(responseJson => {
              if (responseJson.results) {
                  return Promise.resolve(responseJson.results);
              } else {
                  return Promise.reject(`${query} is not found`);
              }
          })
  }

}


export default DataSource;
