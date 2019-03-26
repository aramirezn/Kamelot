$(function() {
    let documentUrl = '';
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'kamelot', api_key: '737611515723741'});

    // Upload button
    let uploadButton = $('#btnSeleccionarDoc');

    // Upload button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'kamelot', upload_preset: 'kamelot-1', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
             console.log(id);
            documentUrl = 'https://res.cloudinary.com/kamelot/image/upload/' + id ;
          console.log(documentUrl);
        });
    });
})


function processdocument(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}

