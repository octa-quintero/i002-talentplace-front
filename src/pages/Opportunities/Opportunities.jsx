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

    const handleFilteredProjects = (searchTerm) => {
        const lowercasedFilter = searchTerm.toLowerCase();
        const filteredData = projects.filter(project =>
            project.titulo.toLowerCase().includes(lowercasedFilter)
        );
        setFilteredProjects(filteredData);
    };

    return (
        <main className='container-opportunities'>
            <Filter />
            <section className='container-section-proyectCard'>
                <Search onSearch={handleFilteredProjects} />
                {loading ? (
                    <div className="loading"><Loading/></div>
                ) : (
                    <ProyectCard projects={filteredProjects.length > 0 ? filteredProjects : projects} />
                )}
            </section>
        </main>
    );
};

export default Opportunities;

