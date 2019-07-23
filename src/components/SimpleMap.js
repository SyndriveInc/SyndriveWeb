import React from 'react';
import GoogleMapReact, {GoogleMapMarkers} from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

const SimpleMap = (props) => {
    return (
    // Important! Always set the container height explicitly
        <div style={{ height: '80vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
            >
                <AnyReactComponent
                    lat={9.943822}
                    lng={76.298638}
                    text={''}
                />
            </GoogleMapReact>
        </div>
    );
}

SimpleMap.defaultProps = {
    center: {
        lat: 9.94,
        lng: 76.29
    },
    zoom: 14
};

export default SimpleMap;