import React from 'react'

export const GifItem = ({title, id, url}) => {
    
    return (
    <div className="card">
        <p>ID. {id}</p>
        <img src={url} alt={title} />
        <p>{ title }</p>
    </div>
  )
}
