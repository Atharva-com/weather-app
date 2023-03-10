import React from 'react'

function Topbuttons({ setQuery }) {

    const cities = [
        {
            id: 1,
            title: 'Gwalior'
        },
        {
            id: 2,
            title: 'Guna'
        },
        {
            id: 3,
            title: 'Shivpuri'
        },
        {
            id: 4,
            title: 'Bhind'
        },
        {
            id: 5,
            title: 'Chambal'
        },
    ]
  return (
    <div className='flex items-center justify-around my-5'>
        {cities.map((city) => (
            <button key={city.id} className='text-white text-lg font-medium' onClick={() => setQuery({ q: city.title })}>{city.title}</button>
        ))}
    </div>
  )
}

export default Topbuttons