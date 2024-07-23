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

const iconLocation1 = L.icon({
    iconUrl: '/img/LocationPoint/1.png',
    iconSize: [24, 24],
});
const iconLocation2 = L.icon({
    iconUrl: '/img/LocationPoint/2.png',
    iconSize: [24, 24],
});
const iconLocation3 = L.icon({
    iconUrl: '/img/LocationPoint/3.png',
    iconSize: [24, 24],
});
const iconLocation4 = L.icon({
    iconUrl: '/img/LocationPoint/4.png',
    iconSize: [24, 24],
});
const iconLocation5 = L.icon({
    iconUrl: '/img/LocationPoint/5.png',
    iconSize: [24, 24],
});
const iconLocation6 = L.icon({
    iconUrl: '/img/LocationPoint/6.png',
    iconSize: [24, 24],
});
const iconLocation7 = L.icon({
    iconUrl: '/img/LocationPoint/7.png',
    iconSize: [24, 24],
});
const iconLocation8 = L.icon({
    iconUrl: '/img/LocationPoint/8.png',
    iconSize: [24, 24],
});
const iconLocation9 = L.icon({
    iconUrl: '/img/LocationPoint/9.png',
    iconSize: [24, 24],
});
const iconLocation10 = L.icon({
    iconUrl: '/img/LocationPoint/10.png',
    iconSize: [24, 24],
});
const iconLocation11 = L.icon({
    iconUrl: '/img/LocationPoint/11.png',
    iconSize: [24, 24],
});
const iconLocation12 = L.icon({
    iconUrl: '/img/LocationPoint/12.png',
    iconSize: [24, 24],
});

// Popup thông tin đối trượng
function onEachFeatureBuilding(feature, layer) {
    if (feature.properties) {
        layer.bindPopup(
            '<b>Rạp:' +
                feature.properties.name +
                '</b><br><span>Địa chỉ:' +
                feature.properties.address +
                '</span><br><span>Hotline:' +
                feature.properties.hotline +
                '</span>',
        );
    }
}

$.ajax({
    url: 'http://localhost:3333/cinemas/geojson',
    dataType: 'json',
    async: false,
    // data du lieu doc tu ben tren xuong
    success: function (data) {
        geojson = data;
    },
});

// Overlay theo khu vực
const HoanKiem = L.geoJSON(geojson, {
    onEachFeature: onEachFeatureBuilding,
    pointToLayer: function (feature, latlng) {
        switch (feature.properties.district) {
            case 'hoan-kiem':
                return L.marker(latlng, {
                    icon: iconLocation1,
                });
        }
    },
}).addTo(mymap);

const DongDa = L.geoJSON(geojson, {
    onEachFeature: onEachFeatureBuilding,
    pointToLayer: function (feature, latlng) {
        switch (feature.properties.district) {
            case 'ba-dinh':
                return L.marker(latlng, {
                    icon: iconLocation2,
                });
        }
    },
}).addTo(mymap);

const BaDinh = L.geoJSON(geojson, {
    onEachFeature: onEachFeatureBuilding,
    pointToLayer: function (feature, latlng) {
        switch (feature.properties.district) {
            case 'ba-dinh':
                return L.marker(latlng, {
                    icon: iconLocation3,
                });
        }
    },
}).addTo(mymap);

const HaiBaTrung = L.geoJSON(geojson, {
    onEachFeature: onEachFeatureBuilding,
    pointToLayer: function (feature, latlng) {
        switch (feature.properties.district) {
            case 'ba-dinh':
                return L.marker(latlng, {
                    icon: iconLocation4,
                });
        }
    },
}).addTo(mymap);

const HoangMai = L.geoJSON(geojson, {
    onEachFeature: onEachFeatureBuilding,
    pointToLayer: function (feature, latlng) {
        switch (feature.properties.district) {
            case 'ba-dinh':
                return L.marker(latlng, {
                    icon: iconLocation5,
                });
        }
    },
}).addTo(mymap);

const ThanhXuan = L.geoJSON(geojson, {
    onEachFeature: onEachFeatureBuilding,
    pointToLayer: function (feature, latlng) {
        switch (feature.properties.district) {
            case 'ba-dinh':
                return L.marker(latlng, {
                    icon: iconLocation6,
                });
        }
    },
}).addTo(mymap);

const TayHo = L.geoJSON(geojson, {
    onEachFeature: onEachFeatureBuilding,
    pointToLayer: function (feature, latlng) {
        switch (feature.properties.district) {
            case 'tay-ho':
                return L.marker(latlng, {
                    icon: iconLocation7,
                });
        }
    },
}).addTo(mymap);

const CauGiay = L.geoJSON(geojson, {
    onEachFeature: onEachFeatureBuilding,
    pointToLayer: function (feature, latlng) {
        switch (feature.properties.district) {
            case 'cau-giay':
                return L.marker(latlng, {
                    icon: iconLocation8,
                });
        }
    },
}).addTo(mymap);

const LongBien = L.geoJSON(geojson, {
    onEachFeature: onEachFeatureBuilding,
    pointToLayer: function (feature, latlng) {
        switch (feature.properties.district) {
            case 'ba-dinh':
                return L.marker(latlng, {
                    icon: iconLocation9,
                });
        }
    },
}).addTo(mymap);

const NamTuLiem = L.geoJSON(geojson, {
    onEachFeature: onEachFeatureBuilding,
    pointToLayer: function (feature, latlng) {
        switch (feature.properties.district) {
            case 'nam-tu-liem':
                return L.marker(latlng, {
                    icon: iconLocation10,
                });
        }
    },
}).addTo(mymap);
const BacTuLiem = L.geoJSON(geojson, {
    onEachFeature: onEachFeatureBuilding,
    pointToLayer: function (feature, latlng) {
        switch (feature.properties.district) {
            case 'bac-tu-liem':
                return L.marker(latlng, {
                    icon: iconLocation11,
                });
        }
    },
}).addTo(mymap);

const HaDong = L.geoJSON(geojson, {
    onEachFeature: onEachFeatureBuilding,
    pointToLayer: function (feature, latlng) {
        switch (feature.properties.district) {
            case 'ba-dinh':
                return L.marker(latlng, {
                    icon: iconLocation12,
                });
        }
    },
}).addTo(mymap);

var overlayMaps = {
    'Hoàn Kiếm': HoanKiem,
    'Đống Đa': DongDa,
    'Ba Đình': BaDinh,
    'Hai Bà Trưng': HaiBaTrung,
    'Hoàng Mai': HoangMai,
    'Thanh Xuân': ThanhXuan,
    'Tây Hồ': TayHo,
    'Cầu giấy': CauGiay,
    'Long Biên': LongBien,
    'Nam Từ Liêm': NamTuLiem,
    'Bắc Từ Liêm': BacTuLiem,
    'Hà Đông': HaDong,
};

L.control.layers(baseLayers, overlayMaps).addTo(mymap);

// Chú thích
const legend = L.control({
    position: 'bottomleft',
});
legend.onAdd = function (mymap) {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML +=
        '<img style="width:24px;height:24px" src="/img/locationPoint/1.png" alt="tree"><span>:Quận Hoàn kiếm</span><br>';
    div.innerHTML +=
        '<img style="width:24px;height:24px" src="/img/locationPoint/2.png" alt="tree"><span>:Quận Đống Đa</span><br>';
    div.innerHTML +=
        '<img style="width:24px;height:24px" src="/img/locationPoint/3.png" alt="tree"><span>:Quận Ba Đình</span><br>';
    div.innerHTML +=
        '<img style="width:24px;height:24px" src="/img/locationPoint/4.png" alt="tree"><span>: Quận Hai Bà Trưng</span><br>';
    div.innerHTML +=
        '<img style="width:24px;height:24px" src="/img/locationPoint/5.png" alt=""><span>: Quận Hoàng Mai<br></span>';
    div.innerHTML +=
        '<img style="width:24px;height:24px" src="/img/locationPoint/6.png" alt="tree"><span>: Quận Thanh Xuân</span><br>';
    div.innerHTML +=
        '<img style="width:24px;height:24px" src="/img/locationPoint/7.png" alt="tree"><span>: Quận Tây Hồ</span><br>';
    div.innerHTML +=
        '<img style="width:24px;height:24px" src="/img/locationPoint/8.png" alt="tree"><span>: Quận Cầu giấy</span><br>';
    div.innerHTML +=
        '<img style="width:24px;height:24px" src="/img/locationPoint/9.png" alt="tree"><span>: Quận Long Biên</span><br>';
    div.innerHTML +=
        '<img style="width:24px;height:24px" src="/img/locationPoint/10.png" alt="tree"><span>: Quận Nam Từ Liêm</span><br>';
    div.innerHTML +=
        '<img style="width:24px;height:24px" src="/img/locationPoint/11.png" alt="tree"><span>: Quận Bắc Từ Liêm</span><br>';
    div.innerHTML +=
        '<img style="width:24px;height:24px" src="/img/locationPoint/12.png" alt="tree"><span>: Quận Hà Đông</span><br>';
    return div;
};

legend.addTo(mymap);

// Ví trình duyệt
L.control.locate().addTo(mymap);
