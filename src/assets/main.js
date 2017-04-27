$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/wallheac.json',
    dataType: 'jsonp',
    success: function(response){
      var elements = $.map(response.courses.completed, function(course, index){
          var listItem = $('<div class="course"></div>');
          $(listItem).append('<h3>' + course.title +'</h3>');
          $(listItem).append('<img src=' + course.badge + '>');
          $(listItem).append('<a href=' + course.url + ' target="_blank" class="btn btn-primary">See Course</a>');
          return listItem;
        });
        $('#badges').html(elements);
    }
  });
});
