import React from 'react'
import persons from '../data/Persons'
import './CompForPersons.css'
import Person from './Person'

const Persons = () => {
	return (
		<div className='personsList'>
			{persons.map(person => (
				<Person {...person} key={person.id} />
			))}
		</div>
	)
}

export default Persons
