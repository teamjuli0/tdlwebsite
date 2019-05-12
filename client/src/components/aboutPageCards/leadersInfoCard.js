import React from 'react'

import { AxelIcon, JulioIcon, MikeIcon } from '../../images/roundIcons'

const LeadersInfoCard = props => (
  <div className='col-sm-4'>
    <div
      style={{
        margin: 'auto'
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
        </div>
      </div>
    </div>
  </div>
)

export default LeadersInfoCard
