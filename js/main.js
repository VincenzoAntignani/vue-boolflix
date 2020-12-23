const app = new Vue (
  {
    el: '#root',
    data: {
      path: 'https://image.tmdb.org/t/p/w220_and_h330_face/',
      films: [],
      seriesTv: [],
      genres: [],
      valueGenre: '',
      text: '',
      alternative_path: 'https://www.baserunning.it/wp-content/uploads/2020/05/immagine-non-disponibile.png',
      alternative_overview: 'Descrizione al momento non disponibile',
      result_search: -1,
    },
    methods: {

      searchFilmsSeries: function() {
        var self = this;

        // Controllo su input
        if(this.text == '') {
          alert("Scrivi cosa vuoi cercare")
        } else if (this.text.length < 3) {
          this.text = '';
          alert("Inserisci almeno tre caratteri")
        }


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

              //ciclo sull'array films, modifico l'elemento vote_Average e lo gestisco nell'html
              self.films.forEach(
                (element) =>
                  {
                  element.vote_average = Math.ceil(element.vote_average /2);

                }
              );
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

                //ciclo sull'array seriesTv, modifico l'elemento vote_Average e lo gestisco nell'html
                self.seriesTv.forEach(
                  (element) =>
                    {
                    element.vote_average = Math.ceil(element.vote_average /2);

                  }
                );
              }
            )  // series tv


      }, // searchFilms e Series tv

      flags: function(language) {
        if(language == 'it') {
          return "img/it-01.webp";
        } else if (language == 'en') {
          return "img/en-01.png";
        } else if (language == 'es') {
          return "img/es-01.webp";
        }
      },


    }, //Methods

    mounted: function() {
      var self = this;

      axios
        .get('https://api.themoviedb.org/3/genre/movie/list',  {
          params: {
            api_key: 'd631125b3120a33333b536f9aa3c36e9',
            language: 'it-IT'
            }
          }
        )
        .then(function(response) {
            self.genres = response.data.genres;
            console.log(self.genres)

          }
        )

    } //mounted








  }
);
