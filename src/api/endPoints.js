const getAllProjects = import.meta.env.VITE_BACKEND_URL;

const endPoints = {
    projects: {
        url: getAllProjects,
    },
};

export { endPoints };