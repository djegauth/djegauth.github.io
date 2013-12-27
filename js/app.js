var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   	attribution: 'Tiles &copy; Open Street Maps',
   	maxZoom: 18
}).addTo(map);
var markers = [];
$.getJSON(
    "/json/stores.json",
    function(data) {
    	for (var i = 0;i < data.length; i++) {
    		var store = data[i];
            var marker = L.marker([store.latitude, store.longitude])
                    .bindPopup("<b>" + store.name + "</b>")
                    .addTo(map);
            markers.push(marker);
    	}
    	var group = new L.featureGroup(markers);
        map.fitBounds(group.getBounds());
    }
);

