import React from 'react'

const LeadersInfoCard = props => (
  <div
    style={{
      margin: 'auto',
      marginBottom: '50px'
    }}
  >
    <div
      style={{
        margin: 'auto',
        backgroundColor: 'white',
        width: '270px',
        paddingTop: '10px',
        border: '3px solid #d2d4d6',
        borderRadius: '7 px',
        boxShadow: '0 0 20px gray',
        MozBoxShadow: '0 0 20px gray',
        WebkitBoxShadow: '0 0 20px gray'
      }}
    >
      <div
        className='row'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img
          src={props.LeaderImg}
          style={{
            height: '250px',
            width: '250px',
            boxShadow: '0 0 20px gray',
            MozBoxShadow: '0 0 20px gray',
            WebkitBoxShadow: '0 0 20px gray',
            border: '7px solid white'
          }}
          alt=''
        />
      </div>
      <div
        className='row'
        style={{
          borderRadius: '10px'
        }}
      >
        <div
          className='col-sm'
          style={{
            width: '270px',
            margin: 'auto',
            textAlign: 'center',
            borderRadius: '10px'
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
              fontSize: 26,
              fontFamily: 'Lato, sans-serif',
              fontWeight: 'bolder',
              color: '#161616',
              paddingTop: '5px'
            }}
          >
            {props.LeaderName}
          </p>
          <p
            style={{
              textAlign: 'left',
              fontSize: 18,
              marginTop: '10px',
              marginBottom: '5px',
              lineHeight: '25px',
              fontWeight: 'bold',
              color: '#444444',
              padding: '10px',
              borderRadius: '10px'
            }}
          >
            {props.LeaderDescription}
          </p>
          <p
            style={{
              paddingLeft: '10px',
              paddingTop: '0px',
              marginBottom: '20px',
              color: '#989898',
              textAlign: 'left'
            }}
          >
            {props.Verso}
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default LeadersInfoCard
