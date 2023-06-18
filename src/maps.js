import React ,{useRef,useEffect} from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
const Maps = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new Map({
      target: mapContainerRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '500px' }} />;
};

export default Maps;
