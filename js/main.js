var b = {}; // base class

$(function(){
   
   b.dragons = $('.jumbotron');
   b.search  = $('#q');
   b.bg = $('.background');
   
   b.bg.animo( { animation: "fadeInUp" } );
   
   b.hideDragons = function(){
       b.dragons.animo( { animation: "fadeOutUp", "keep" : true } );
       b.search.off("keypress", b.hideDragons);
       b.search.off("click", b.hideDragons);
   }
    
   b.search.on("keypress", b.hideDragons);
   b.search.on("click", b.hideDragons);
   
   b.search.focus();
   
});