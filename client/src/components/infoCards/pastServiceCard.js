import React from 'react'

const PastServiceCard = props => (
  <div
    className='row'
    style={{
      paddingTop: '1vh',
      fontFamily: 'Fira Sans, sans-serif'
    }}
  >
    <div
      className='col-sm-12'
      style={{
        height: '23vh',
        margin: 'auto',
        minWidth: '625px'
      }}
    >
      <div
        className='row'
        style={{
          height: '23vh',
          backgroundColor: '#464b57',
          margin: 'auto',
          maxWidth: '700px',
          borderRadius: '7px'
        }}
      >
        <div
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            borderRadius: '7px 0 0 7px',
            height: '23vh',
            width: '30%'
          }}
        />
        <div
          style={{
            width: '70%'
          }}
        >
          <div
            style={{
              borderRadius: '0 7px 0 0',
              height: '19vh',
              backgroundColor: 'white',
              paddingLeft: '2vh'
            }}
          >
            <div
              style={{
                paddingTop: '2vh',
                fontSize: 13
              }}
            >
              <a href='/'>|RVR1960| {props.verse}</a>
            </div>
            <p
              style={{
                paddingTop: '1vh',
                fontSize: 25
              }}
            >
              {props.title}
            </p>
            <p
              style={{
                lineHeight: '2.75vh',
                paddingTop: '1vh',
                paddingRight: '2vh'
              }}
            >
              {props.fullVerse}
            </p>
          </div>
          <div
            className='row'
            style={{
              borderRadius: '0 0 7px 0',
              height: '4vh',
              marginTop: '.5vh',
              color: 'white',
              fontSize: 13
            }}
          >
            <div
              style={{
                paddingLeft: '4vh',
                width: '45%'
              }}
            />
            <div
              style={{
                paddingRight: '2vh',
                width: '55%'
              }}
            >
              <p>{props.preacher}</p>
              <p>Tabernaculo Cristiano De Liberacion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PastServiceCard
