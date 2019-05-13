import React from 'react'

const card = props => (
  <>
    <div
      style={{
        height: '400px',
        margin: 'auto',
        width: '205px'
      }}
    >
      <div
        style={{
          height: '225px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img
          style={{
            height: '205px',
            width: '205px',
            border: '4px solid #878b92',
            borderRadius: '10px',
            webkitBoxShadow: '0 0 20px #5e656e',
            mozBoxShadow: '0 0 20px #5e656e',
            boxShadow: '0 0 20px #5e656e'
          }}
          src={props.Icon}
          alt=''
        />
      </div>
      <div
        style={{
          height: '175px',
          paddingLeft: '10px',
          paddingRight: '10px'
        }}
      >
        <p
          style={{
            fontFamily: 'Fira Sans, sans-serif',
            fontWeight: 'bolder',
            fontSize: '30px',
            color: '#d7d8da',
            paddingTop: '10px'
          }}
        >
          {props.Weekday}
        </p>
        <p
          style={{
            paddingTop: '1vh',
            color: '#7d7d7d'
          }}
        >
          Horario:
        </p>
        <p
          style={{
            fontSize: 20,
            color: '#c3c5c8'
          }}
        >
          {props.Time}
        </p>
        <p
          style={{
            paddingTop: '1vh',
            color: '#7d7d7d'
          }}
        >
          Alavansa:
        </p>
        <p
          style={{
            fontSize: 20,
            color: '#c3c5c8'
          }}
        >
          {props.WorshipGroup}
        </p>
        <p
          style={{
            paddingTop: '1vh',
            color: '#7d7d7d'
          }}
        >
          Predicador:
        </p>
        <p
          style={{
            color: '#c3c5c8',
            fontSize: 20
          }}
        >
          {props.Preacher}
        </p>{' '}
        <p
          style={{
            paddingTop: '1vh',
            color: '#7d7d7d'
          }}
        >
          Tiempo Especial:
        </p>
        <p
          style={{
            color: '#c3c5c8',
            fontSize: 20
          }}
        >
          {props.Verse}
        </p>
      </div>
    </div>
  </>
  // <div
  //   className='col-sm'
  //   style={{
  //     textAlign: 'center',
  //     minHeight: '100%',
  //     margin: '0, auto',
  //     display: 'flex',
  //     alignItems: 'center'
  //   }}
  // >
  //   <div style={{ margin: 'auto', marginTop: '2vh', marginBottom: '2vh' }}>
  //     <img src={props.Icon} alt={props.Alt} style={{ width: '12vw' }} />
  //     <h4
  //       style={{ marginBottom: '1vh', color: '#e6e6e6' }}
  //       className='card-title'
  //     >
  //       {props.Weekday}
  //     </h4>
  //     <p className='card-text' style={{ color: '#b3b3b3' }}>
  //       Predica {props.Preacher} @ {props.Time}
  //     </p>
  //     <p className='card-text' style={{ color: '#b3b3b3' }}>
  //       Alabansa con {props.WorshipGroup}
  //     </p>
  //     <p className='card-text' style={{ color: '#b3b3b3' }}>
  //       Tiempo Especial con {props.Verse}
  //     </p>
  //   </div>
  //   <VerticalDivider color='#a6a6a6' />
  // </div>
)

/* */

export default card
