import React, { FC } from 'react';

import { Box, useTheme } from 'native-base';

const FormWrapper: FC = ({ children }) => {
  const { spacing } = useTheme();

  return (
    <Box style={{ marginTop: spacing.baseMargin, padding: spacing.basePadding, zIndex: 1 }}>
      {children}
    </Box>
  );
};

export default FormWrapper;
