$(document).ready(function(){
  $("#cat").click(function(){
    $("ul#cat-talk").prepend("<li>Meow, man. Meow.</li>");
    $("ul#dog-talk").prepend("<li>Bowwowwow yo yippie yay.</li>");
  });
  $("#dog").click(function(){
    $("ul#dog-talk").prepend("<li>Bowwowwow yo yippie yay.</li>");
    $("ul#cat-talk").prepend("<li>Meow, man. Meow.</li>");
  });
});
