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

  $('#btnModifica').click(function(){
    var testoDaModificare = $('#testo-modificato').val();
    var idDaModificare = $('.modifica-todo').val();
    $.ajax({
      url: apiUrl + '/' + idDaModificare,
      method: 'PUT',
      data: {
        text: testoDaModificare
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


  $(document).on('click', '.deleteTodo', function(){
    var id = $(this).attr('todo-id');
    $.ajax({
      url: apiUrl + '/' + id,
      method: 'DELETE',
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
      $('.modifica-todo').html('');
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].text);
        $('.lista').append('<li><span class="deleteTodo" todo-id="' + data[i].id + '">X </span>' + data[i].text + '</li>');
        $('.modifica-todo').append('<option value="' + data[i].id +'" >' + data[i].text + '</option>' )
      }
    },
    error: function(){
      alert('errore');
    }
  })
}
