import React from 'react';
import { Link } from 'react-router-dom';
import './Projet.css'

const projet = props => (
   
    <Link to={props.url} className='link_project'>
        <img  src={props.image} className='Projet'></img>
    </Link>
)

export default projet