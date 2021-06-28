import React, { FC, useCallback, useState } from 'react';

import { Avatar, Box, Button, Center, Input, Text, useTheme } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { TakePictureResponse } from 'react-native-camera';
import { useDispatch } from 'react-redux';

import { Camera, Location } from '../../components';
import authorizationSlice from '../../store/reducers/authorization';
import { AuthorizationState } from '../../store/types';

type FormValues = Pick<AuthorizationState, 'firstName' | 'lastName' | 'profilePicture' | 'currentLocation'>

const Basic: FC = () => {
  const { spacing, colors } = useTheme();
  const { control, handleSubmit } = useForm<FormValues>();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [avatar, setAvatar] = useState('');

  const dispatch = useDispatch();

  const onSubmit = useCallback((data: FormValues) => {
    dispatch(authorizationSlice.actions.updateBasic({ ...data, profilePicture: avatar }));
  }, [avatar, dispatch]);

  const onPictureSnap = useCallback((data: TakePictureResponse) => {
    setAvatar(data.uri);
    setIsCameraOpen(false);
  }, []);

  const fieldStyle = { marginTop: spacing.baseMargin };

  return (
    <>
      <Camera isOpen={isCameraOpen} onSnap={onPictureSnap} />
      <Box style={{ marginTop: spacing.baseMargin, padding: spacing.basePadding, zIndex: 1 }}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Your Name"
            />
          )}
          name="firstName"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Your Surname"
              style={fieldStyle}
            />
          )}
          name="lastName"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Location
              onChange={onChange}
              value={value}
              inputStyle={fieldStyle}
            />
          )}
          name="currentLocation"
        />
        {avatar && (
          <Center style={fieldStyle}>
            <Avatar
              size="lg"
              source={{ uri: avatar }}
            />
          </Center>
        )}
        <Button variant="ghost" onPress={() => setIsCameraOpen(true)}>
          <Text>
            Capture photo
          </Text>
        </Button>
        <Button style={fieldStyle} onPress={handleSubmit(onSubmit)}>
          <Text style={{ color: colors.white }}>
            Next
          </Text>
        </Button>
      </Box>
    </>
  );
};

export default Basic;
