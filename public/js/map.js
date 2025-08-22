let map;
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    // console.log(coordinates);

    let lng = Number(coordinates[0]);
    let lat = Number(coordinates[1]);

    map = new Map(document.getElementById("map"), {
        center: { lat: lat, lng: lng },
        zoom: 9,
        mapId: googleMapApi,
        // mapTypeId: "satellite",
    });
    const marker = new AdvancedMarkerElement({
        position: { lat: lat, lng: lng },
        map: map,
        title: address,
    });
    const infoWindow = new google.maps.InfoWindow({
        content: `<h5>${title}</h5><p>Exact location provided after booking.</p>`,
    });
    infoWindow.open({
        anchor: marker,
        map,
        shouldFocus: false
    });

}
initMap();