import React, { FC, useCallback } from 'react';

import { Button, Input, useTheme } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { IScreenBase } from '../types';
import { JobFormValues } from '../../store/types';
import { FormWrapper } from '../../containers';
import authorizationSlice from '../../store/reducers/authorization';
import { SCREEN_NAMES } from '../../constants';
import { jobFormData } from './data';

const Job: FC<IScreenBase> = ({ navigation }) => {
  const { spacing } = useTheme();
  const { control, handleSubmit } = useForm<JobFormValues>();
  const dispatch = useDispatch();

  const onSubmit = useCallback((data: JobFormValues) => {
    dispatch(authorizationSlice.actions.updateJob(data));
    navigation.navigate(SCREEN_NAMES.authGroup);
  }, [dispatch, navigation]);

  const fieldStyle = { marginTop: spacing.baseMargin };

  return (
    <FormWrapper>
      {jobFormData.map((item, idx) => (
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
      <Button style={fieldStyle} onPress={handleSubmit(onSubmit)}>
        Next
      </Button>
    </FormWrapper>
  );
};

export default Job;
