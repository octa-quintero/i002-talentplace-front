import React, { useState } from 'react';
import './Opportunities.css';
import '../../index.css';
import ProyectCard from '../../components/ProyectCard/ProyectCard';
import Filter from '../../components/Filter/Filter';
import Search from '../../components/Search/Search';
import Loading from '../shared/Loading';
import useAllProjects from '../../hooks/useAllProjects';

export const Opportunities = () => {
    const [filteredProjects, setFilteredProjects] = useState([]);
    const { projects, loading } = useAllProjects();
    const [noResults, setNoResults] = useState(false);

    const handleFilteredProjects = (searchTerm) => {
        const lowercasedFilter = searchTerm.toLowerCase();
        const filteredData = projects.filter(project =>
            project.titulo.toLowerCase().includes(lowercasedFilter)
        );
        
        setFilteredProjects(filteredData);
        setNoResults(filteredData.length === 0);
    };

    return (
        <main className='container-opportunities'>
            <Filter />
            <section className='container-section-proyectCard'>
                <Search onSearch={handleFilteredProjects} />
                {loading ? (
                    <Loading/>
                ) : (
                    filteredProjects.length > 0 ? (
                        <ProyectCard projects={filteredProjects}/>
                    ) : noResults ? (
                        <p className='fs-3'>No hay resultados</p>
                    ) : (
                        <ProyectCard projects={projects} />
                    )
                )}
            </section>
        </main>
    );
};

export default Opportunities;
