$(document).ready(function() {
$('#tweet').on("click", function()
      {
        $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + "God is a comedian playing to an audience too afraid to laugh." );
          });
    $("#getMessage").on("click", function(){


        $.ajax({
          url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies', 
          type: 'GET', 
          data: {}, 
          dataType: 'json',
          success: function(data) {
     
            document.getElementById("result").innerHTML = data.quote;
             
      currentQuote = data.quote;
             
$('#tweet').on("click", function()
      {
        $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + currentQuote );
          });
          },
          error: function(err) { alert(err); },
          beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "vUGasjC0QgmshQsYUNISzOG2y9M1p1L3cOhjsnl5gOtl10oqqY")}
        });
        

   });    
  });