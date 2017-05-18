 var countFavouriteMovie = 0;
  var countSeeMovie = 0;
 var moviess = (function() { 
       
        function FavouriteMovie(title) {
            this.title = title;
        }
        
        function SeeMovie(title) {
            this.title = title;
        }
    
        var filmi = [];
        var moviess = {};

        return {
            createFavouriteMovie : function(title) {
                return new FavouriteMovie(title);
            },

            createSeeMovie : function(title) {
                return new SeeMovie(title);
            },

            addFavouriteMovie : function(title) {
                filmi.push(this.createFavouriteMovie(title));
            },

            addSeeMovie : function(title) {
                filmi.push(this.createSeeMovie(title));
            },
            
            countFavouriteMovie: function() {
                
                for(var index = 0; index < filmi.length; index++) {
                    console.log(filmi["SeeMovie"]);
                    // if(filmi.index == 'FavouriteMovie') {
                    //     countFavouriteMovie++;
                    // }
                }
                // return countFavouriteMovie;
            },

            countSeeMovie: function() {
               
                for(var index = 0; index < filmi.length; index++) {
                    if(filmi[index] == 'SeeMovie') {
                        countSeeMovie++;
                    }
                }
                return countSeeMovie;
            },

            // getMovie : function(index) {
            //     if(index >= 0 && index < filmi.length) {
            //         return filmi[index];
            // }
            // },
        }
})();