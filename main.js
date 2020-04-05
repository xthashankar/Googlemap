function initMap()
{
    var location={lat:28.3949,lng:84.1240}
    var map=new google.maps.Map(document.getElementById('map'),{
        zoom:5,
        center:location
    });
    var display=new google.maps.Marker({
        position:location,
        map:map
    });
} 
    
