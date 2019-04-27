import React from 'react'
const card = props => (
  <>
    <div
      className={`col-sm` + props.Size}
      style={{
        width: '49%',
        maxWidth: '650px',
        height: '37vh',
        margin: 'auto'
      }}
    >
      <div
        style={{
          height: '33vh',
          margin: '2vh',
          backgroundImage: `url('${props.BgImage}')`,
          backgroundSize: 'cover',
          webkitBoxShadow: '0 0 20px gray',
          mozBoxShadow: '0 0 20px gray',
          boxShadow: '0 0 20px gray',
          fontFamily: 'Fira Sans, sans-serif'
        }}
      >
        <div
          style={{
            textAlign: 'right',
            height: '16vh',
            padding: '2vh'
          }}
        >
          <img
            src={props.Icon}
            alt=''
            style={{
              height: '18vh'
            }}
          />
        </div>
        <div
          style={{
            height: '17vh',
            paddingLeft: '2vh',
            color: 'black',
            backgroundColor: 'white'
          }}
        >
          <p
            style={{
              paddingTop: '3vh'
            }}
          >
            {props.Weekday}
          </p>
          <p
            style={{
              paddingTop: '1vh'
            }}
          >
            Alavansa:
            <span style={{ color: '#515151' }}>{props.WorshipGroup}</span>
          </p>
          <p
            style={{
              paddingTop: '1vh'
            }}
          >
            Predicador: <span style={{ color: '#515151' }}>{props.Preacher}</span>
          </p>
          <p
            style={{
              paddingTop: '1vh'
            }}
          >
            Tiempo Especial:
            <span style={{ color: '#515151' }}> {props.Verse}</span>
          </p>
        </div>
      </div>
    </div>
    {props.children}
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
