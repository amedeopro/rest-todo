$(document).ready(function(){
  var apiUrl = 'http://157.230.17.132:3013/todos';

  getData(apiUrl);
  $('#myButton').click(function(){
    var testoUtente = $('#input-todo').val();
    $.ajax({
      url: apiUrl,
      method: 'POST',
      data: {
        text: testoUtente
      },
      success: function(data){
        $('.lista').html('');
        getData(apiUrl);
      },
      error: function(){
        alert('errore');
      }
    })
  })
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
