import React from 'react'

const PastServiceCard = props => (
  <div
    className='col-sm-6'
    style={{
      maxWidth: '600px',
      margin: 'auto',
      paddingBottom: '2vh'
    }}
  >
    <div
      style={{
        overflow: 'hidden',
        height: 0,
        paddingTop: '56.25%'
      }}
    >
      <a href={'https://www.youtube.com/watch?v=' + props.YtId}>
        <img
          src={props.Image}
          alt=''
          style={{
            position: 'absolute',
            padding: '2vh',
            paddingTop: 0,
            top: 0,
            left: 0,
            height: '100%',
            width: '100%'
          }}
        />
      </a>
    </div>
  </div>
)

export default PastServiceCard
