import React from 'react'

import { Interlaced } from '../../images/backgrounds'
import { Guitar, Clock, Calender } from '../../images/logosAndIcons'

const card = props => (
  <>
    <div className='col-sm'>
      <div
        className='row'
        style={{
          margin: 'auto',
          width: '210px',
          marginBottom: '20px',
          borderRadius: '15px',
          backgroundColor: '#2b2c2d',
          webkitBoxShadow: '0 0 10px black',
          mozBoxShadow: '0 0 10px black',
          boxShadow: '0 0 10px black',
          overflow: 'hidden'
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
              height: '240px',
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
              <img
                style={{
                  height: '150px',
                  width: '150px',
                  border: '3px solid #3c6ea0',
                  padding: '5px',
                  borderRadius: '50%'
                }}
                src={props.Icon}
                alt=''
              />
            </div>
            <div>
              <p
                style={{
                  color: '#272728',
                  fontSize: '25px',
                  marginTop: '-25px',
                  fontWeight: 'normal'
                }}
              >
                {props.Preacher}
              </p>
              <p
                style={{
                  paddingTop: '3px',
                  color: '#7d7d7d'
                }}
              >
                Predicando
              </p>
            </div>
          </div>
          <div
            className='row'
            style={{
              padding: '6px',
              paddingTop: '15px',
              paddingLeft: '8px',
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                background: 'white',
                borderRadius: '50%',
                height: '30px',
                width: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src={Clock}
                alt=''
                style={{
                  height: '20px'
                }}
              />
            </div>
            <p
              style={{
                fontSize: 20,
                color: '#eaebec',
                paddingLeft: '10px'
              }}
            >
              {props.Time}
            </p>
          </div>

          <div
            className='row'
            style={{
              padding: '6px',
              paddingLeft: '8px',
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                background: 'white',
                borderRadius: '50%',
                height: '30px',
                width: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src={Calender}
                alt=''
                style={{
                  height: '20px'
                }}
              />
            </div>
            <p
              style={{
                fontSize: 20,
                color: '#eaebec',
                paddingLeft: '10px'
              }}
            >
              {props.Weekday}
            </p>
          </div>

          <div
            className='row'
            style={{
              padding: '6px',
              paddingLeft: '8px',
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                background: 'white',
                borderRadius: '50%',
                height: '30px',
                width: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src={Guitar}
                alt=''
                style={{
                  height: '20px'
                }}
              />
            </div>
            <p
              style={{
                fontSize: 20,
                color: '#eaebec',
                paddingLeft: '10px'
              }}
            >
              {props.WorshipGroup}
            </p>
          </div>

          <div
            className='row'
            style={{
              height: '20px',
              marginTop: '5px',
              backgroundImage: 'linear-gradient(65deg, #3c6ea0, #ab4141 55%'
            }}
          >
            <div className='col-sm' />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default card
