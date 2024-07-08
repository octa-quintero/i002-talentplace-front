import React from 'react'
import './Opportunities.css'
import '../../index.css'
import ProyectCard from '../../components/ProyectCard/ProyectCard'
import Filter from '../../components/Filter/Filter'
import Search from '../../components/Search/Search'

export const Opportunities = () => {

    return (
        <main className='container-opportunities'>
                <Filter />
            <section className='container-section-proyectCard'>
                <Search />
                <ProyectCard />
                <ProyectCard />
                <ProyectCard />
            </section>
        </main>
    )
}
