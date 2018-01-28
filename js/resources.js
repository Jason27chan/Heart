
$(() => {

  // Make InfoWindows
  var innercircle = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">The Inner Circle Counceling Center</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Phone:</b> 770-604-1322</p>'+
      '<p><b>Email:</b> info@lovehealth-addiction.com</p>'+
      '</div>'+
      '</div>';

  var johnson = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Dr. Rebecca M. Johnson, Psy. D.</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Phone:</b> 404-919-5137</p>'+
      '</div>'+
      '</div>';

  var noblitt = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Joshua M. Noblitt, LMFT</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Phone:</b> 404-907-1523</p>'+
      '</div>'+
      '</div>';

  var innercircleiw = new google.maps.InfoWindow({
      content: innercircle
  })

  var johnsoniw = new google.maps.InfoWindow({
      content: johnson
  })

  var noblittiw = new google.maps.InfoWindow({
      content: noblitt
  })

  // Make Map
    var center = {lat: 33.772000, lng: -84.382179};
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

  // Put Inner Circle Marker
  var icmarker = new google.maps.Marker({
    position: {lat:33.763455, lng: -84.369158},
    label: {
        fontSize:"76",
        text: "The Inner Circle Counceling Center",
        fontWeight:"bold"
    },
    map: map
  });
  icmarker.addListener('click', function() {
  innercircleiw.open(map, icmarker);
  })

  // Put Johnson Marker
  var jmarker = new google.maps.Marker({
    position: {lat: 33.760315, lng: -84.369373},
    label: {
        fontSize:"76",
        text: "Dr. Rebecca M. Johnson, Psy. D.",
        fontWeight:"bold"
    },
    map: map
  });
  jmarker.addListener('click', function() {
  johnsoniw.open(map, jmarker);
  })

  // Put Noblitt Marker
  var nmarker = new google.maps.Marker({
    position: {lat: 33.776214, lng: -84.382179},
    label: {
        fontSize:"76",
        text: "Joshua M. Noblitt, LMFT",
        fontWeight:"bold"
    },
    map: map
  });
  nmarker.addListener('click', function() {
  noblittiw.open(map, nmarker);
  })

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

})
