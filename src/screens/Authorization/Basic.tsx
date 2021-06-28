import React, { FC, useCallback } from 'react';

import { Box, Button, Input, useTheme } from 'native-base';
import { useForm, Controller } from 'react-hook-form';

import { Location } from '../../components';

const Basic: FC = () => {
  const { spacing } = useTheme();
  const { control, handleSubmit } = useForm();

  const onSubmit = useCallback(data => {
    console.log(data);
  }, []);

  const fieldStyle = { marginTop: spacing.baseMargin };

  return (
    <Box style={{ marginTop: spacing.baseMargin, padding: spacing.basePadding }}>
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
        name="first_name"
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
        name="last_name"
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
        name="current_location"
      />
      <Button style={{ marginTop: spacing.baseMargin }} onPress={handleSubmit(onSubmit)}>
        Next
      </Button>
    </Box>
  );
};

export default Basic;
