// const getAllProjects = import.meta.env.VITE_GET_ALL_PROJECTS;
const getAllProjects = import.meta.env.VITE_BACKEND_URL;


const endPoints = {
    projects: {
        url: getAllProjects,
    },
};

export { endPoints };