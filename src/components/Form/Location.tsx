import React, { FC, useCallback, useEffect, useState } from 'react';

import Geolocation, { GeoCoordinates } from 'react-native-geolocation-service';
import { Alert } from 'react-native';
import { Input } from 'native-base';

import { ILocationCmp } from './types';

const Location: FC<ILocationCmp> = ({ onChange, value, inputStyle }) => {
  const [coords, setCoords] = useState<null | GeoCoordinates>(null);
  const getPermission = useCallback(() => {
    return Geolocation.requestAuthorization('whenInUse');
  }, []);

  const getLocation = useCallback(async() => {
    const result = await getPermission();

    if (result !== 'granted') {
      return Alert.alert('Please give permission to use your location');
    }

    Geolocation.getCurrentPosition(
      position => {
        setCoords(position.coords);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  }, [getPermission]);
  useEffect(() => {
    getLocation();
  }, [getLocation]);

  useEffect(() => {
    if (coords) {
      onChange(`${coords.longitude} / ${coords.latitude}`);
    }
  }, [coords, onChange]);

  return (
    <Input value={value} isDisabled={true} style={inputStyle} />
  );
};

export default Location;
