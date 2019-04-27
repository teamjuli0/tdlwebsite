import React from 'react'
import { Parallax, Background } from 'react-parallax'

const ParallaxBg = props => (
  <Parallax strength={300}>
    <div>Use the background component for custom elements</div>
    <Background className='custom-bg'>
      <img src='http://www.fillmurray.com/500/320' alt='fill murray' />
    </Background>
  </Parallax>
)

export default ParallaxBg
