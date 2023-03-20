const mymap = L.map('map').setView([21.02988144294546, 105.80167329310144], 12);

//Layer maps
const googleHybrid = L.tileLayer(
    'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
    {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    },
);

const googleStreets = L.tileLayer(
    'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    },
);

const googleSat = L.tileLayer(
    'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    },
);

const googleTerrain = L.tileLayer(
    'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
    {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    },
);

const openStreetMap = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
    },
).addTo(mymap);

const baseLayers = {
    'Google Hybrid': googleHybrid,
    'Google Streets': googleStreets,
    'Google Sat': googleSat,
    'Google Terrain': googleTerrain,
    'Open street map ': openStreetMap,
};
