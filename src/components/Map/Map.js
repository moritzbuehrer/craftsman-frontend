import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

class Map extends React.Component {

    render() {
        return (
            <LeafletMap center={[47.368650, 8.539183]} zoom={12} style={{ width: '100%', height: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </LeafletMap>
        );
    }
}

export default Map;