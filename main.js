$("#foo").on('click', function(e) {
    if (e.which == 2) {
       e.preventDefault();
       alert("middle button"); 
    }
 });