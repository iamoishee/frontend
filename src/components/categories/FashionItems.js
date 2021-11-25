import React from 'react'

const FashionItems = (props) => {
    const {title, description}= props;
    return (
        <div className="my-3">
           
              <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                </div>
              </div>
            </div> 
    )
}

export default FashionItems
