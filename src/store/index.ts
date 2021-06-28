import { configureStore } from '@reduxjs/toolkit';

import employees from './reducers/employees';
import authorization from './reducers/authorization';

export default configureStore({
  reducer: {
    employees: employees.reducer,
    authorization: authorization.reducer,
  },
});
