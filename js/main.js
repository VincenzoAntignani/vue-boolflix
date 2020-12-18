const app = new Vue (
  {
    el: '#root',
    data: {
      path: 'https://image.tmdb.org/t/p/w220_and_h330_face/',
      films: [],
      text: '',
    },
    methods: {
      searchFilms: function() {
        var self = this;


        axios
          .get('https://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: 'd631125b3120a33333b536f9aa3c36e9',
              query: this.text,
              language: 'it-IT'
              }
            }
          )
          .then(function(response) {
              self.films = response.data.results;

            }
          )

        if(this.text == '') {
          alert("Scrivi cosa vuoi cercare")
        }
      }
    }, //Methods



  }
);
