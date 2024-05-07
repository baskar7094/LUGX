import React from 'react'
import UseageCard, { ServiceCard } from './useagecard'
import TrandCard from './TrandCard'
import Topgames from './Topgames'
import Categories from './categories'
import Contact from '../contact'
import Footer from '../footer'

export default function Cards() {
  return (
    <section>
<ServiceCard/>
<TrandCard/>
<Topgames/>
<Categories/>
<Contact/>
<Footer/>
    </section>
  )
}
