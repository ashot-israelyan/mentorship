import React, { FC, useCallback, useState } from 'react';

import { Avatar, Button, Center, Input, useTheme } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { TakePictureResponse } from 'react-native-camera';
import { useDispatch } from 'react-redux';

import { Camera, Location } from '../../components';
import authorizationSlice from '../../store/reducers/authorization';
import { BasicFormValues } from '../../store/types';
import { IScreenBase } from '../types';
import { SCREEN_NAMES } from '../../constants';
import { FormWrapper } from '../../containers';
import { basicFormData } from './data';

const Basic: FC<IScreenBase> = ({ navigation }) => {
  const { spacing } = useTheme();
  const { control, handleSubmit } = useForm<BasicFormValues>();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [avatar, setAvatar] = useState('');

  const dispatch = useDispatch();

  const onSubmit = useCallback((data: BasicFormValues) => {
    dispatch(authorizationSlice.actions.updateBasic({ ...data, profilePicture: avatar }));
    navigation.navigate(SCREEN_NAMES.authJob);
  }, [avatar, dispatch, navigation]);

  const onPictureSnap = useCallback((data: TakePictureResponse) => {
    setAvatar(data.uri);
    setIsCameraOpen(false);
  }, []);

  const fieldStyle = { marginTop: spacing.baseMargin };

  return (
    <>
      <Camera isOpen={isCameraOpen} onSnap={onPictureSnap} />
      <FormWrapper>
        {basicFormData.map((item, idx) => (
          <Controller
            key={item.id}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder={item.placeholder}
                {...(idx > 0 ? { style: fieldStyle } : {})}
              />
            )}
            name={item.name}
          />
        ))}
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
          Capture photo
        </Button>
        <Button style={fieldStyle} onPress={handleSubmit(onSubmit)}>
          Next
        </Button>
      </FormWrapper>
    </>
  );
};

export default Basic;
