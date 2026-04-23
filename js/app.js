$(document).ready(function () {

    // Water ripple effect on profile section
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10
    });

    // Lightbox for certifications
    $('.magnify').magnificPopup({
        type: 'image',
        gallery: { enabled: true },
        zoom: { enabled: true }
    });

});
