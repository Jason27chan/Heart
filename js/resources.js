
$(() => {
  // Some therapist data around GT
  var therapists = [{name: "The Inner Circle Counceling Center", loc: {lat:33.763455, lng: -84.369158}}, {name: "Dr. Rebecca M. Johnson, Psy. D.", loc: {lat: 33.760315, lng: -84.369373}}, {name: "Joshua M. Noblitt, LMFT", loc: {lat: 33.776214, lng: -84.382179}}]


  // Make Map
  
    var center = {lat: 33.765849, lng: -84.388378};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: center
    });


  // Put Georgia Tech Marker
  var marker = new google.maps.Marker({
    position: {lat: 33.775315, lng:  -84.395764},
    label: {
      text: "Georgia Tech",
      fontWeight: "bold"
    },
    map: map
  });

  // Remove Extraneous Labels
  var customStyle = [
    {
      featureType: "all",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ]

  map.set('styles', customStyle)


  // Add Therapist Markers
  for (var i = 0; i < therapists.length; i++) {
      var newMarker = new google.maps.Marker({
        position: therapists[i].loc,
        label: {
          fontSize:"76",
          text: therapists[i].name,
          fontWeight:"bold"
        },
        map: map
      })
  }

})