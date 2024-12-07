import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const deleteAssignment = async (assignmentId: string) => {
    const response = await axiosWithCredentials.delete(`${ASSIGNMENT_API}/${assignmentId}`);
    return response.data;
    }

    export const updateAssignment = async (assignmentId:String, assignment: any) => {
        const { data } = await axiosWithCredentials.put(`${ASSIGNMENT_API}/${assignmentId}`, assignment);
        return data;
    };