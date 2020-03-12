function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(coords => showPosition(coords, initMap));
  } else { 
    // x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position, cb) {
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude + "<br>Accuracy: " + position.coords.accuracy;
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let accuracy = position.coords.accuracy;

  console.log( position);
  cb(latitude, longitude, accuracy)
};
    
function initMap(lat, lon){
    console.log({lat})
    console.log({lon})
// mapping options
        var options = {
            zoom:12,
            center: {
                lat: lat,
                lng: lon
            }
        }

// new map
        var map = new window.google.maps.Map(document.getElementById('map'), options);
   
        /*
// new marker
        var marker = new window.google.maps.Marker({
            position: {lat: 25.7179,lng:-80.2746},
            map: map,
            icon: 'https://developers.window.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        });

        var infoWindow = new window.google.maps.InfoWindow({
            content: '<h1> Miami, FL </h1>'
        });

        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        })
    */

    addMarker({
        coords: {lat: lat,lng: lon},
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });
    addMarker({coords: {lat: 25.720158,lng:-80.279483}});
    addMarker({coords: {lat: 25.713811,lng:-80.275900}});
    addMarker({coords: {lat: 25.713079,lng:-80.274395}});
    addMarker({coords: {lat: 25.712645,lng:-80.276623}});
    addMarker({coords: {lat: 25.714435,lng:-80.271053}});
    addMarker({coords: {lat: 25.718395,lng:-80.270089}});
    addMarker({coords: {lat: 25.722355,lng:-80.270842}});
    addMarker({coords: {lat: 25.713215,lng:-80.268674}});
    addMarker({coords: {lat: 25.719453,lng:-80.272122}});

        // Add marker function
        function addMarker(props){
            var marker = new window.google.maps.Marker({
            position: props.coords,
            map: map,
            icon: props.iconImage
         });
    }
}
