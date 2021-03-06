$(document).ready(function() {
 var url = $("input[name='BASE_URL']").val();
 Dropzone.autoDiscover = false;
 var myDropzone = new Dropzone("#my-dropzone-footer", {
   url: url+'ci-admin/footer/upload',
   acceptedFiles: "image/*",
   addRemoveLinks: true,
   autoProcessQueue: true,
   autoDiscover: false,
   uploadMultiple: true,
   removedfile: function(file) {
     var name = file.name;
     console.log(name);
     $.ajax({
       type: "post",
       url: url+'ci-admin/footer/remove',
       cache:false,
       dataType: 'html',
       data: {file: name },
     });

        // remove the thumbnail
        var previewElement;
        return (previewElement = file.previewElement) != null ? (previewElement.parentNode.removeChild(file.previewElement)) : (void 0);
      },

      init: function() {
        var me = this;
        this.on("success", function(file, response){
            location.reload();
        });
        $.get(url+'ci-admin/footer/list_files', function(data) {
          // if any files already in server show all here
          if (data.length > 0) {
            $.each(data, function(key, value) {
              var mockFile = value;
              me.emit("addedfile", mockFile);
              me.emit("thumbnail", mockFile, url+'uploads/multi-footer/' + value.name);
              me.emit("complete", mockFile);
            });
          }
        });
      }

    });
});