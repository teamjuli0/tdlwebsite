import React from 'react'
const card = props => (
  <>
    <div
      className={`col-sm` + props.Size}
      style={{
        maxWidth: '275px',
        minHeight: '37vh',
        margin: 'auto'
      }}
    >
      <div
        style={{
          height: '33vh',
          backgroundImage: `url('${props.BgImage}')`,
          backgroundSize: 'cover',
          fontFamily: 'Montserrat, sans-serif',
          borderRadius: '10px'
        }}
      >
        <div
          style={{
            textAlign: 'right',
            height: '16vh',
            borderRadius: '10px',
            webkitBoxShadow: '0 0 20px #3c3c3c',
            mozBoxShadow: '0 0 20px #3c3c3c',
            boxShadow: '0 0 20px #3c3c3c'
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
            minHeight: '17vh',
            paddingLeft: '2vh',
            paddingBottom: '2vh',
            color: '#e9e9e9',
            backgroundColor: '#3c3c3c',
            borderRadius: '0 0 9px 9px ',
            fontWeight: 'bold',
            webkitBoxShadow: '0 0 20px #3c3c3c',
            mozBoxShadow: '0 0 20px #3c3c3c',
            boxShadow: '0 0 20px #3c3c3c'
          }}
        >
          <p
            style={{
              fontFamily: 'Fira Sans, sans-serif',
              paddingTop: '3vh',
              fontWeight: 'bolder',
              fontSize: 30,
              paddingBottom: '1vh'
            }}
          >
            {props.Weekday}
          </p>
          <div>
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
                color: '#d3d3d3'
              }}
            >
              {props.WorshipGroup}
            </p>
          </div>
          <div>
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
                color: '#d3d3d3',
                fontSize: 20
              }}
            >
              {props.Preacher}
            </p>
          </div>
          <div>
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
                color: '#d3d3d3',
                fontSize: 20
              }}
            >
              {props.Verse}
            </p>
          </div>
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
