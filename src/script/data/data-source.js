import movies from "./movies.js";

class DataSource {
  static searchMovie(keyword) {
      return fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ecae96a07e730c891c7e43b5054ce9e5&language=en-US&page=1&include_adult=false${keyword}`
        )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if(responseJson.teams) {
          return Promise.resolve(responseJson.teams);
      } else {
          return Promise.reject(`${keyword} is not found`);
      }
      })  
    }
}

export default DataSource;
