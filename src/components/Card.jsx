import React from 'react'

const Card = ({title, text, image, link }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-5">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{
            height: '200px',
            objectFit: 'cover'
          }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>

          <p className="card-text text-muted">
            {text}
          </p>

          <div className="mt-auto">
            <a
              href={link}
              className="btn btn-primary w-100"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
