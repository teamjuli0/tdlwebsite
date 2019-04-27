import React from 'react'

const VerticalDivider = props => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div
      style={{
        borderLeft: `1px solid ${props.color}`,
        borderRight: `1px solid ${props.color}`,
        height: '80%',
        right: '75%',
        top: '75%'
      }}
    />
  </div>
)

export default VerticalDivider
