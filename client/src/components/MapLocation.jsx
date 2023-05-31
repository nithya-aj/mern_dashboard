import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Icon } from "leaflet";

// create custom icon
const customIcon = new Icon({
    iconUrl: require("../images/pin.png"),
    iconSize: [38, 38] // size of the icon
});

// markers
const markers = [
    {
        geocode: [26.9790, 74.8738],
        popUp: ""
    },
    {
        geocode: [11.9790, 76.8738],
        popUp: ""
    },
    {
        geocode: [18.9790, 75.8738],
        popUp: ""
    },
    {
        geocode: [24.9790, 54.8738],
        popUp: ""
    },
    {
        geocode: [20.9790, 50.8738],
        popUp: ""
    },
    {
        geocode: [24.9790, 52.8738],
        popUp: ""
    }
];

export default function MapLocation() {
    return (
        <MapContainer height={'14rem'} center={[24.9790, 54.8738]} zoom={4} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker) => (
                <Marker position={marker.geocode} icon={customIcon}>
                    <Popup>{marker.popUp}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
