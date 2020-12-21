const app = new Vue (
  {
    el: '#root',
    data: {
      path: 'https://image.tmdb.org/t/p/w220_and_h330_face/',
      films: [],
      seriesTv: [],
      text: '',
      alternative_path: 'https://www.baserunning.it/wp-content/uploads/2020/05/immagine-non-disponibile.png',
      alternative_overview: 'Descrizione al momento non disponibile',
      result_search: -1,
    },
    methods: {
      searchFilms: function() {
        var self = this;

        //Controllo su input
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
              // console.log(self.films)
              self.result_search = response.data.total_results;

              //ciclo sull'array films, modifico l'elemento vote_Average e lo gestisco nell'html
              self.films.forEach(
                (element) =>
                  {
                  element.vote_average = Math.ceil(element.vote_average /2);

                }
              );
            }
          )
      }, // searchFilms

      searchSeriesTv: function() {
        var self = this;

        //Controllo su input
        if(this.text == '') {
          alert("Scrivi cosa vuoi cercare")
        } else if (this.text.length < 3) {
          this.text = '';
          alert("Inserisci almeno tre caratteri")
        }

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
          )
      }, // searchFilms

    }, //Methods






  }
);
