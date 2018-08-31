function initialize() {

    //var mapLocation = new google.maps.LatLng(45.8790706, 16.7928387); //change coordinates here
    var marker;
    var map;

    var mapOptions = {
        zoom: 14, //change zoom here
        center: { lat: 45.8790706, lng: 16.7928387 }
    };
    
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    var image = 'images/flag.png';
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'AMK Bilogora', //change title here
        icon: image,
        animation: google.maps.Animation.DROP,
        animation: google.maps.Animation.BOUNCE,
        position: { lat: 45.8790706, lng: 16.7928387 }
    });
    google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {
    
    if (marker.getAnimation() != null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

//google.maps.event.addDomListener(window, 'load', initialize);
