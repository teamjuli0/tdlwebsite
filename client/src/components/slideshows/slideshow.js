import React from 'react'

const slideshow = props => (
  <div uk-slideshow='height: 1000' style={{ height: '100vh' }}>
    <ul className='uk-slideshow-items'>
      <li>
        <img src='../imgaes/axel.jpg' alt='pictures' uk-cover />
        <div className='uk-position-center uk-position-small'>{props.children}</div>
      </li>
    </ul>
  </div>
)

export default slideshow
