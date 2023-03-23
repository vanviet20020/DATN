// Vị trí khi người dùng click/kéo
//Lấy vị trí người dùng chọn khi click trên map
const latElement = document.querySelector('#lat');
const lngElement = document.querySelector('#lng');
(function () {
    const lat = latElement.value ? latElement.value : 21.02988144294546;
    const lng = lngElement.value ? lngElement.value : 105.80167329310144;
    let marker = L.marker([lat, lng], {
        draggable: true,
    });

    marker.addTo(mymap);

    mymap.on('click', function (e) {
        marker.setLatLng(e.latlng);
        latElement.value = e.latlng.lat;
        lngElement.value = e.latlng.lng;
    });

    marker.on('dragend', function (e) {
        const newLatLng = marker.getLatLng();
        latElement.value = newLatLng.lat;
        lngElement.value = newLatLng.lng;
    });
})();
