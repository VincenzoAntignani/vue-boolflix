const app = new Vue (
  {
    el: '#root',
    data: {
      path: 'https://image.tmdb.org/t/p/w220_and_h330_face/',
      films: [],
      seriesTv: [],
      populars: [], //film popolari
      topRated: [], // film piu votati
      upComing: [], // film in arrivo
      queenGambit: [], // le regina degli scacchi
      onTheAir: [], // serie tv in onda
      tvOnTheAir: [], // serie tv in onda oggi
      tvPopulars: [], // serie tv popolari
      tvTopRated: [], // serie tv piu votate
      text: '',
      alternative_path: 'img/imageComingSoon.jpg',
      alternative_overview: 'Descrizione al momento non disponibile',
      result_search: -1,
      showInfo: true,
      starFas: 'fas fa-star',
      starFar: 'far fa-star',
    }, //data
    methods: {

      searchFilmsSeries: function() {
        var self = this;

        // Controllo su input
        // if(this.text == '') {
        //   alert("Scrivi cosa vuoi cercare")
        // } else if (this.text.length < 3) {
        //   this.text = '';
        //   alert("Inserisci almeno tre caratteri")
        // }

        axios
          .get('https://api.themoviedb.org/3/search/movie',  {
            params: {
              api_key: 'd631125b3120a33333b536f9aa3c36e9',
              query: this.text,
              language: 'it-IT'
              }
            }
          )
          .then(function(response) {
              self.films = response.data.results;
              // console.log(self.films.genre_ids)
              self.result_search = response.data.total_results;
            }
          ) // films


          axios
            .get('https://api.themoviedb.org/3/search/tv',  {
              params: {
                api_key: 'd631125b3120a33333b536f9aa3c36e9',
                query: this.text,
                language: 'it-IT'
                }
              }
            )
            .then(function(response) {
                self.seriesTv = response.data.results;
                // console.log(self.seriesTv)
                self.result_search = response.data.total_results;
              }
            )  // series tv


      }, // searchFilms e Series tv

      showTvOnTheAir: function() {
        var self = this;
        self.text = '';
        self.result_search = -1;
        self.populars = [];
        self.topRated = [];
        self.upComing = [];
        self.onTheAir = [];
        self.tvPopulars = [];
        self.tvTopRated = [];

        axios
          .get('https://api.themoviedb.org/3/tv/airing_today',  {
            params: {
              api_key: 'd631125b3120a33333b536f9aa3c36e9',
              // query: this.text,
              language: 'it-IT'
              }
            }
          )
          .then(function(response) {
              self.tvOnTheAir = response.data.results;
              console.log(self.tvOnTheAir)
              // self.result_search = response.data.total_results;
            }
          )
      }, //showTvOnTheAir

      showOnTheAir: function() {
        var self = this;
        self.text = '';
        self.result_search = -1;
        self.populars = [];
        self.topRated = [];
        self.upComing = [];
        self.tvOnTheAir = [];
        self.tvPopulars = [];
        self.tvTopRated = [];


        axios
          .get('https://api.themoviedb.org/3/tv/on_the_air',  {
            params: {
              api_key: 'd631125b3120a33333b536f9aa3c36e9',
              language: 'it-IT'
              }
            }
          )
          .then(function(response) {
              self.onTheAir = response.data.results;
              // console.log(self.onTheAir)
            }
          )
      }, // showOnTheAir

      // menu film
      showPopulars: function() {
        var self = this;
        self.text = '';
        self.result_search = -1;
        self.topRated = [];
        self.upComing = [];
        self.onTheAir = [];
        self.tvOnTheAir = [];
        self.tvPopulars = [];
        self.tvTopRated = [];


        axios
          .get('https://api.themoviedb.org/3/movie/popular',  {
            params: {
              api_key: 'd631125b3120a33333b536f9aa3c36e9',
              language: 'it-IT'
              }
            }
          )
          .then(function(response) {
              self.populars = response.data.results;
              console.log(self.populars)
            }
          )
      }, //showPopulars

      showTopRated: function() {
        var self = this;
        self.text = '';
        self.result_search = -1;
        self.populars = [];
        self.upComing = [];
        self.onTheAir = [];
        self.tvOnTheAir = [];
        self.tvPopulars = [];
        self.tvTopRated = [];

        axios
          .get('https://api.themoviedb.org/3/movie/top_rated',  {
            params: {
              api_key: 'd631125b3120a33333b536f9aa3c36e9',
              language: 'it-IT'
              }
            }
          )
          .then(function(response) {
              self.topRated = response.data.results;
              console.log(self.topRated)
            }
          )
      }, //showTopRated

      showUpComing: function() {
        var self = this;
        self.text = '';
        self.result_search = -1;
        self.populars = [];
        self.topRated = [];
        self.onTheAir = [];
        self.tvOnTheAir = [];
        self.tvPopulars = [];
        self.tvTopRated = [];

        axios
          .get('https://api.themoviedb.org/3/movie/upcoming',  {
            params: {
              api_key: 'd631125b3120a33333b536f9aa3c36e9',
              language: 'it-IT'
              }
            }
          )
          .then(function(response) {
              self.upComing = response.data.results;
              console.log(self.upComing)
            }
          )
      }, //showUpComing
      // menu film

      //menu serieTv
      showTvPopulars: function() {
        var self = this;
        self.text = '';
        self.result_search = -1;
        self.populars = [];
        self.topRated = [];
        self.upComing = [];
        self.onTheAir = [];
        self.tvOnTheAir = [];
        self.tvTopRated = [];

        axios
          .get('https://api.themoviedb.org/3/tv/popular',  {
            params: {
              api_key: 'd631125b3120a33333b536f9aa3c36e9',
              language: 'it-IT'
              }
            }
          )
          .then(function(response) {
              self.tvPopulars = response.data.results;
              console.log(self.tvPopulars)
            }
          )
      }, // showTvPopular

      showTvTopRated: function() {
        var self = this;
        self.text = '';
        self.result_search = -1;
        self.populars = [];
        self.topRated = [];
        self.upComing = [];
        self.onTheAir = [];
        self.tvOnTheAir = [];
        self.tvPopulars = [];

        axios
          .get('https://api.themoviedb.org/3/tv/top_rated',  {
            params: {
              api_key: 'd631125b3120a33333b536f9aa3c36e9',
              language: 'it-IT'
              }
            }
          )
          .then(function(response) {
              self.tvTopRated = response.data.results;
              console.log(self.tvTopRated)
            }
          )
      },



      flags: function(language) {
        if(language == 'it') {
          return "img/it-01.webp";
        } else if (language == 'en') {
          return "img/en-01.png";
        } else if (language == 'es') {
          return "img/es-01.webp";
        }
      }, // flags

      stars: function(vote, index) {
        if(Math.ceil(vote) / 2 > index) {
          return this.starFas;
        } else {
          return this.starFar;
        }
      }, //stars



    }, //Methods

    mounted: function() {
      var self = this;

      axios
        .get('https://api.themoviedb.org/3/search/tv',  {
          params: {
            api_key: 'd631125b3120a33333b536f9aa3c36e9',
            query: 'la regina degli scacchi',
            language: 'it-IT'
            }
          }
        )
        .then(function(response) {
            self.queenGambit = response.data.results;
            console.log(self.queenGambit)

          }
        ) // La regina degli scacchi

        axios
          .get('https://api.themoviedb.org/3/tv/on_the_air',  {
            params: {
              api_key: 'd631125b3120a33333b536f9aa3c36e9',
              language: 'it-IT'
              }
            }
          )
          .then(function(response) {
              self.onTheAir = response.data.results;
              console.log(self.onTheAir)

            }
          ) // On the air





    } //mounted








  }
);
