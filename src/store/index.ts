import { configureStore } from '@reduxjs/toolkit';

import employees from './reducers/employees';
import authorization from './reducers/authorization';
import userSlice from './reducers/user';

export default configureStore({
  reducer: {
    employees: employees.reducer,
    authorization: authorization.reducer,
    user: userSlice.reducer,
  },
});
