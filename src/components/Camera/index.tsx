import React, { FC, useCallback, useRef } from 'react';

import { StyleSheet, View } from 'react-native';
import { RNCamera, TakePictureOptions } from 'react-native-camera';
import { Box, Button, Text } from 'native-base';

import { ICameraCmp } from './types';

const Camera: FC<ICameraCmp> = ({ isOpen, onSnap }) => {
  const cameraRef = useRef<RNCamera | null>(null);

  const takePicture = useCallback(async () => {
    if (!cameraRef.current) {
      return;
    }

    const options: TakePictureOptions = { quality: 0.5, base64: true };
    const data = await cameraRef.current?.takePictureAsync(options);

    onSnap(data);
  }, [onSnap]);

  if (!isOpen) {
    return null;
  }


  return (
    <Box flex={1} style={styles.container}>
      <RNCamera
        ref={ref => cameraRef.current = ref}
        type={RNCamera.Constants.Type.front}
        style={styles.preview}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <Button onPress={takePicture} style={styles.capture}>
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </Button>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    zIndex: 2,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default Camera;
