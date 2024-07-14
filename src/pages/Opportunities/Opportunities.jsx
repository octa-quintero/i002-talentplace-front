import React, { useEffect, useState } from 'react'
import './Opportunities.css'
import '../../index.css'
import ProyectCard from '../../components/ProyectCard/ProyectCard'
import Filter from '../../components/Filter/Filter'
import Search from '../../components/Search/Search'
import Loading from '../shared/Loading'
import useAllProjects from '../../hooks/useAllProjects'

export const Opportunities = () => {

    const {loading} = useAllProjects();
    console.log(loading);

    return (
        <main className='container-opportunities'>
                <Filter />
            <section className='container-section-proyectCard'>
                <Search />
                {loading===true ? <div className="load" ><Loading/></div> : <ProyectCard />}
            </section>
        </main>
    )
}
