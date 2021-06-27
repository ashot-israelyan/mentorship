import { configureStore } from '@reduxjs/toolkit';

import employees from './reducers/employees';

export default configureStore({
  reducer: {
    employees: employees.reducer,
  },
});
