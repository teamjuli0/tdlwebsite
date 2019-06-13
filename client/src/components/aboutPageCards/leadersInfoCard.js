import React from 'react'

const LeadersInfoCard = props => (
  <div
    className='col-sm'
    style={{
      margin: 'auto',
      width: '280px',
      marginBottom: '30px',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <div
      className='row'
      style={{
        background: `url('${props.LeaderImg}')`,
        height: '300px',
        width: '260px',
        backgroundSize: 'cover',
        boxShadow: '0 0 10px black',
        MozBoxShadow: '0 0 10px black',
        WebkitBoxShadow: '0 0 10px black',
        border: '4px solid white',
        borderRadius: '10px',
        backgroundPosition: 'center',
        marginTop: '-30px'
      }}
      alt=''
    />
    {/* <div
        className='row'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
      </div>
      <div className='row'>
        <div
          className='col-sm'
          style={{
            maxWidth: '240px',
            margin: 'auto',
            textAlign: 'center'
          }}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#727272',
              paddingTop: '25px'
            }}
          >
            {props.LeaderTitle}
          </p>
          <p
            style={{
              fontSize: 24,
              fontWeight: 'bolder',
              color: '#161616',
              paddingTop: '5px',
              textAlign: 'left'
            }}
          >
            {props.LeaderName}
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#444444',
              paddingTop: '10px',
              textAlign: 'left'
            }}
          >
            {props.LeaderDescription}
          </p>
          <p
            style={{
              textAlign: 'left',
              fontSize: '13px',
              color: 'bfbfbf',
              paddingTop: '10px'
            }}
          >
            {props.Verso}
          </p>
        </div>
      </div> */}
  </div>
)

export default LeadersInfoCard
