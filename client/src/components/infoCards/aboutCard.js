import React from 'react'

const aboutCard = props => (
  <>
    <div
      className='col-sm-4'
      style={{
        margin: 'auto'
      }}
    >
      <div
        style={{
          minHeight: '300px',
          width: '200px',
          backgroundColor: '#f5f5f5',
          margin: 'auto',
          borderRadius: '5px',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            height: '140px',
            padding: '20px'
          }}
        >
          <div
            style={{
              margin: 'auto',
              height: '120px',
              width: '120px',
              borderRadius: '50%',
              backgroundColor: '#797f86',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 0 20px gray',
              MozBoxShadow: '0 0 20px gray',
              WebkitBoxShadow: '0 0 20px gray'
            }}
          >
            <p
              style={{
                color: 'white',
                fontSize: '80px',
                fontWeight: 'bolder',
                fontFamily: 'Roboto, sans-serif'
              }}
            >
              {props.CircleLetter}
            </p>
          </div>
        </div>
        <div
          style={{
            minHeight: '160px',
            padding: '10px',
            marginTop: '10px'
          }}
        >
          <p
            style={{
              fontSize: '20px',
              fontWeight: 'bold'
            }}
          >
            {props.Description}
          </p>
          <button
            type='button'
            className='btn btn-dark'
            onClick={props.handleClick}
            style={{
              backgroundColor: '#4d545e',
              fontWeight: 'bolder',
              marginTop: '20px'
            }}
          >
            {props.ButtonText}
          </button>
        </div>
      </div>
    </div>
  </>
)

export default aboutCard
