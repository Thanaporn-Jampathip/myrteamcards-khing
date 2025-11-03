import React from 'react'
import './MemberCard.css'

const MemberCard = (props) => (
    <div className='member-card'>
        <img src={`/image/${props.avatar}`} alt={props.name} />
        <h2>{props.name}</h2>
        <p>{props.role}</p>
    </div>
)

export default MemberCard
