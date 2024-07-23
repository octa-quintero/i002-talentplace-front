import React, { useState } from 'react';
import './Opportunities.css';
import '../../index.css';
import ProyectCard from '../../components/ProyectCard/ProyectCard';
import Filter from '../../components/Filter/Filter';
import Search from '../../components/Search/Search';
import Loading from '../shared/Loading';
import useAllProjects from '../../hooks/useAllProjects';
import { Fade } from 'react-awesome-reveal';

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
        <Fade>
            <main className='container-opportunities'>

                <Filter />
                <section className='container-section-proyectCard'>
                    <Search onSearch={handleFilteredProjects} />
                    {loading ? (
                        <Loading/>
                    ) : (
                        filteredProjects.length > 0 ? (
                            <>
                                <Fade duration="1500">
                                    <ProyectCard projects={filteredProjects}/>
                                </Fade>
                            </>
                        ) : noResults ? (
                            <p className='fs-3'>No hay resultados</p>
                        ) : (
                            <>
                                <Fade duration="1500">
                                    <ProyectCard projects={projects} />
                                </Fade>
                            </>
                        )
                    )}
                </section>
            </main>
        </Fade>
    );
};

export default Opportunities;
