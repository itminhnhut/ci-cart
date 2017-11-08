$(document).ready(function(){
   var url = $("input[name='BASE_URL']").val();

   $.ajax({
      url: url+'ci-admin/product/ajax-menu-product',
      type: "post",
      data : {'idloai':0,'idsub':0,'idChild':0},
       success: function (data) {
         $('#daset').html(data);
      }

   });
});