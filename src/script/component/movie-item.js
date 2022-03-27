class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
             <style>
                * {
                     margin: 0;
                     padding: 0;
                     box-sizing: border-box;
                 }
                 :host {
                     display: block;
                     margin-bottom: 18px;
                     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                     border-radius: 10px;
                     overflow: hidden;
                 }
                
                 .poster-movie {
                     width: 100%;
                     max-height: 300px;
                     object-fit: contain;
                     object-position: center;
                 }
                
                 .movie-info {
                     padding: 24px;
                 }
                
                 .movie-info > h1 {
                     font-weight: bold;
                 }
  
                 .movie-info > h4 {
                   font-weight: lighter;
                 }
                
                 .movie-info > p {
                     margin-top: 10px;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     display: -webkit-box;
                     -webkit-box-orient: vertical;
                     -webkit-line-clamp: 10; /* number of lines to show */
                 }
  
             </style>
            <img class="poster-movie" src="https://image.tmdb.org/t/p/w780${this._movie.poster_path}" alt="Movie Poster">
             <div class="movie-info">
                 <h1>${this._movie.name}</h1>
                 <h4>${this._movie.vote_average}</h4>
                 <p>${this._movie.overview}</p>
             </div>`;
  }
}

customElements.define("movie-item", MovieItem);
