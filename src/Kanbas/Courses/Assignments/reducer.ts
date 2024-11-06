import { createSlice } from '@reduxjs/toolkit';
import { assignments } from '../../Database';

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        description: assignment.description,
        points: assignment.points,
        due: assignment.due,
        available: assignment.available,
        course: assignment.course,
      };
      state.assignments.push(newAssignment);
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
    },

    editAssignment: (state, { payload: updatedAssignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === updatedAssignment._id ? { ...a, ...updatedAssignment } : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, editAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
