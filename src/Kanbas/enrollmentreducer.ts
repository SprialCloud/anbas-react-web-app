import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  enrollments: [],
};
const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, { payload: { userId, courseId } }) => {
      const newEnrollment: any = {
        _id: new Date().getTime().toString(),
        user: userId,
        course: courseId,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenroll: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: any) =>
          enrollment.user !== userId || enrollment.course !== courseId
      ) as any;
    },
    setEnrollments: (state, { payload }) => {
      state.enrollments = payload;
    },
  },
});

export const { enroll, unenroll,setEnrollments } = enrollmentSlice.actions;

export default enrollmentSlice.reducer;