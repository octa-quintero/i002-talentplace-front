const getAllProjects = import.meta.env.VITE_GET_ALL_PROJECTS;

const endPoints = {
    projects: {
        url: getAllProjects,
    },
};

export { endPoints };