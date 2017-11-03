$(document).ready(function() {
 var url = $("input[name='BASE_URL']").val();
 Dropzone.autoDiscover = false;
 var myDropzone = new Dropzone("#my-dropzone", {
   url: url+'ci-admin/upload',
   acceptedFiles: "image/*",
   addRemoveLinks: true,
   autoProcessQueue: true,
   autoDiscover: false,
   uploadMultiple: true,
   removedfile: function(file) {
     var name = file.name;
     $.ajax({
       type: "post",
       url: url+'ci-admin/remove',
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

        $.get(url+'ci-admin/list_files', function(data) {
          // if any files already in server show all here
          if (data.length > 0) {
            $.each(data, function(key, value) {
              var mockFile = value;
              me.emit("addedfile", mockFile);
              me.emit("thumbnail", mockFile, url+'uploads/multi-slider/' + value.name);
              me.emit("complete", mockFile);
            });
          }
        });
      }

    });
});