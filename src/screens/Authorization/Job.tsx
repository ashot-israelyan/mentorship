import React, { FC, useCallback } from 'react';

import { Text } from 'react-native';
import { Button, Input, useTheme } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { IScreenBase } from '../types';
import { JobFormValues } from '../../store/types';
import { FormWrapper } from '../../containers';
import authorizationSlice from '../../store/reducers/authorization';
import { SCREEN_NAMES } from '../../constants';

const Job: FC<IScreenBase> = ({ navigation }) => {
  const { spacing, colors } = useTheme();
  const { control, handleSubmit } = useForm<JobFormValues>();
  const dispatch = useDispatch();

  const onSubmit = useCallback((data: JobFormValues) => {
    dispatch(authorizationSlice.actions.updateJob(data));
    navigation.navigate(SCREEN_NAMES.authGroup);
  }, [dispatch, navigation]);

  const fieldStyle = { marginTop: spacing.baseMargin };

  return (
    <FormWrapper>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Department"
          />
        )}
        name="department"
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Job Title"
            style={fieldStyle}
          />
        )}
        name="jobTitle"
      />
      <Button style={fieldStyle} onPress={handleSubmit(onSubmit)}>
        <Text style={{ color: colors.white }}>
          Next
        </Text>
      </Button>
    </FormWrapper>
  );
};

export default Job;
