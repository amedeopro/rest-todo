$(document).ready(function(){
  var apiUrl = 'http://157.230.17.132:3013/todos';

  getData(apiUrl);

});


function getData(url){
  $.ajax({
    url: url,
    method: 'GET',
    success: function(data){
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].text);
        $('.lista').append('<li>' + data[i].text + '</li>');
      }
    },
    error: function(){
      alert('errore');
    }
  })
}
