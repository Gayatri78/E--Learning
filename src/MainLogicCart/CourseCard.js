// CourseCard: Renders a list of available courses/cards.

import React from 'react';
import list from '../data';
import '../StyleCart/CourseCard.css'
import Cards from './Cards';

const CourseCard = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default CourseCard 