import axios from "axios";

const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;


export const fetchApplicationsById = async (userId, projectId, storedToken) => {

    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/applications/${userId}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
            params: { projectId } 
        });              

        const application = response.data;
        return application;        

    } catch (error) {
        throw error;
    }
}


//TODO  
//Corregir lo siguiente y teminar el fetch

// export const PostApplicationsById = async (userId, projectId, storedToken) => {

//     try {
//         const response = await axios.post(`${BACKEND_ENDPOINT}/applications/${userId}`, {
//             headers: { Authorization: `Bearer ${storedToken}` },
//             params: { projectId } 
//         });              

//         const postApplication = response.data;
//         return postApplication;        

//     } catch (error) {
//         throw error;
//     }
// }