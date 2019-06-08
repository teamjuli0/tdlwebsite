import React from 'react'

import { Interlaced } from '../../images/backgrounds'

const card = props => (
  <>
    <div className='col-sm'>
      <div
        className='row'
        style={{
          margin: 'auto',
          width: '210px',
          borderRadius: '15px',
          backgroundColor: '#2b2c2d',
          webkitBoxShadow: '0 0 10px black',
          mozBoxShadow: '0 0 10px black',
          boxShadow: '0 0 10px black',
          overflow: 'hidden',
          marginBottom: '30px'
        }}
      >
        <div
          className='col-sm-12'
          style={{
            fontFamily: 'Fira Sans, sans-serif',
            color: 'white'
          }}
        >
          <div
            className='row'
            style={{
              borderRadius: '2px',
              backgroundImage: `url('${Interlaced}')`,
              backgroundRepeat: 'repeat',
              fontFamily: 'Lato, sans-serif',
              height: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                height: '165px',
                width: '165px',
                border: '3px solid #ab4141',
                padding: '5px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <p
                style={{
                  color: '#464646',
                  fontSize: '80px',
                  width: '150px',
                  height: '150px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 'bolder',
                  fontFamily: 'Fredoka One, cursive',
                  border: '3px solid #3c6ea0',
                  borderRadius: '50%'
                }}
              >
                {props.CircleLetter}
              </p>
            </div>
          </div>
          <div
            className='row'
            style={{
              padding: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '170px'
            }}
          >
            <p
              style={{
                fontSize: 25,
                color: '#eaebec'
              }}
            >
              {props.Description}
            </p>
          </div>

          <div
            className='row'
            style={{
              height: '28px',
              backgroundImage: 'linear-gradient(65deg, #3c6ea0, #ab4141 55%'
            }}
          >
            <div className='col-sm'>
              <div
                onClick={props.handleClick}
                style={{
                  color: '#282828',
                  margin: 'auto',
                  backgroundColor: '#eaeaea',
                  fontWeight: 'bolder',
                  padding: '5px',
                  minHeight: '30px',
                  width: '120px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '5px',
                  border: '3px solid #989898',
                  boxShadow: '0 0 5px black',
                  mozBoxShadow: '0 0 5px black',
                  webkitBoxShadow: '0 0 5px black',
                  cursor: 'pointer',
                  marginTop: '-13px'
                }}
              >
                {props.ButtonText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default card

//         <div
//           style={{
//             minHeight: '160px',
//             padding: '10px',
//             marginTop: '10px'
//           }}
//         >
//
//         </div>
//       </div>
//     </div>
//   </>
// )

// export default aboutCard
