import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import enrollmentsReducer from "./Courses/enrollmentreducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    enrollmentsReducer,
  },
});
export default store;