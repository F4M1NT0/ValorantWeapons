var arrayReturn = {};
var number = 0;
var category = null;
$(document).ready(function() {
  if (arrayReturn != " ") {
    $.ajax({
     type: 'GET',
     url: "https://valorant-api.com/v1/weapons",
     data: "",
     success: function (data) {
       arrayReturn = data.data;
       $.each(arrayReturn, function() {
            category = arrayReturn[number].category.split("::");
            if (category[1] != "Melee") {
              $("#"+category[1]).append('<div class="'+category[1]+' mt-1 gun" data-arma="'+arrayReturn[number].displayName+'"><div class="text-center"> <img src="'+arrayReturn[number].shopData.newImage+'" alt="" class="img-gun"></div> <div>'+arrayReturn[number].shopData.cost+'</div> <div>'+arrayReturn[number].displayName+'</div> </div>');
            }
            number++;
       });
       number = 0;
     },
    });
  }
});


$(document).on('keypress',function(e) {
  if(event.key === 'b' || event.key === 'B'){
   if ($('#ModalComprar').hasClass("show")) {
     $('#ModalComprar').modal("hide");
   }else{
     $('#ModalComprar').modal('show');
   }
  }
  $( ".gun" ).hover(
  function() {

    console.log(arrayReturn.find(arrayReturn => arrayReturn.displayName === $(this).data("arma")))
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);
});
