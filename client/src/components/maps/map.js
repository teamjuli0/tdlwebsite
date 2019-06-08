import React from 'react'

const google = window.google

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.myMapContainer = React.createRef()
    this.myMarker = React.createRef()
  }

  componentDidMount() {
    let map = new google.maps.Map(this.myMapContainer.current, {
      center: { lat: 33.9991905, lng: -118.291228 },
      scrollwheel: false,
      disableDefaultUI: true,
      zoom: 13,
      styles: [
        {
          featureType: 'all',
          elementType: 'all',
          stylers: [
            {
              saturation: '32'
            },
            {
              lightness: '-3'
            },
            {
              visibility: 'on'
            },
            {
              weight: '1.18'
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'landscape.man_made',
          elementType: 'all',
          stylers: [
            {
              saturation: '-70'
            },
            {
              lightness: '14'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi.medical',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'road.highway.controlled_access',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'transit.line',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'transit.station',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'transit.station.airport',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'transit.station.bus',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'transit.station.rail',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [
            {
              saturation: '100'
            },
            {
              lightness: '-14'
            },
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            },
            {
              lightness: '12'
            }
          ]
        }
      ]
    })

    let marker = new google.maps.Marker({
      position: { lat: 33.9991905, lng: -118.291228 },
      animation: google.maps.Animation.DROP,
      map: map
    })

    google.maps.event.addListener(marker, 'click', function() {
      window.location.href =
        'https://www.google.com/maps/place/4810+Vermont+Ave,+Los+Angeles,+CA+90037/@33.9991905,-118.2934278,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c8197af14ed5:0xa092388c698f0487!8m2!3d33.9991905!4d-118.2912391'
    })
  }
  render() {
    return <div ref={this.myMapContainer} id='map' style={this.props.Style} />
  }
}

export default Map
