import React from 'react'

import {
  ChurchBenches,
  ChurchBenches2,
  HermanoAxel,
  HermanoAxel2,
  HermanoAxel3,
  PastoraYady,
  Pastores,
  PastorJulio,
  PastorJulio2,
  PastorMike,
  PastorMike2,
  WorshipGroup
} from '../../images/backgrounds'

class beliefsCard extends React.Component {
  render() {
    return (
      <>
        <div
          className='row'
          style={{
            marginTop: '2vh',
            paddingTop: '2vh',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div
            className='col-sm-5'
            style={{
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src={PastorMike}
              style={{
                width: '100%',
                border: '4px solid white',
                borderRadius: '5px',
                boxShadow: '0 0 20px gray',
                MozBoxShadow: '0 0 20px gray',
                WebkitBoxShadow: '0 0 20px gray'
              }}
              alt=''
            />
          </div>
          <div
            className='col-sm-7'
            style={{
              textAlign: 'left',
              fontFamily: 'Montserrat, sans-serif',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                margin: '1vh'
              }}
            >
              <p
                style={{
                  fontSize: 25,
                  fontWeight: 'bolder',
                  paddingBottom: '1vh',
                  color: 'black'
                }}
              >
                Reglamento Interno
              </p>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  lineHeight: '25px',
                  color: '#727272'
                }}
              >
                Nuestro Ministerio ,tiene sus bases en la palabra de Dios a travez de las Sagradas Escrituras. Salmo
                119:103-105 2 timoteo 3:14-17 A travez de esto versículos sabemos que Dios (Jehová ) nos guía hacia la
                luz y hacia la verdad infalible
              </p>
            </div>
          </div>
        </div>
        <div
          className='row'
          style={{
            paddingTop: '5vh',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className='col-sm-7'>
            <p
              style={{
                fontSize: 25,
                fontWeight: 'bolder',
                paddingBottom: '1vh',
                color: 'black'
              }}
            >
              El Padre (Jehova) Hijo (Jesús) y Espíritu Santo
            </p>

            <p
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                lineHeight: '25px',
                color: '#727272'
              }}
            >
              Estas Tres personas participan de la misma sustancia y poseen los mismos atributos, lo que da como
              resultado que vienen a ser iguales en poder y en gloria. Tres personalidades que no deben confundirse ni
              mezclarse; pero, una sola sustancia que no debe dividirse. San Mateo 26:39; San Juan 1:15; 5:31-32,37;
              14:6; 1 Corintios 15:24,25,27
            </p>
          </div>
          <div className='col-sm-5'>
            <img
              src={HermanoAxel}
              style={{
                width: '100%',
                border: '4px solid white',
                borderRadius: '5px',
                boxShadow: '0 0 20px gray',
                MozBoxShadow: '0 0 20px gray',
                WebkitBoxShadow: '0 0 20px gray'
              }}
              alt=''
            />
          </div>
        </div>
        <div
          className='row'
          style={{
            paddingTop: '5vh',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className='col-sm-5'>
            <img
              src={WorshipGroup}
              style={{
                width: '100%',
                border: '4px solid white',
                borderRadius: '5px',
                boxShadow: '0 0 20px gray',
                MozBoxShadow: '0 0 20px gray',
                WebkitBoxShadow: '0 0 20px gray'
              }}
              alt=''
            />
          </div>
          <div className='col-sm-7'>
            <p
              style={{
                fontSize: 25,
                fontWeight: 'bolder',
                paddingBottom: '1vh',
                color: 'black'
              }}
            >
              Jesús el único camino a la vida eterna
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                lineHeight: '25px',
                color: '#727272'
              }}
            >
              Juan 14:6 Jesus les dijo: "yo soy el camino la verdad y la vida ; nadie viene al Padre si no es por mi
            </p>
          </div>
        </div>
        <div
          className='row'
          style={{
            paddingTop: '5vh',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className='col-sm-7'>
            <p
              style={{
                fontSize: 25,
                fontWeight: 'bolder',
                paddingBottom: '1vh',
                color: 'black'
              }}
            >
              La Deidad de Cristo:
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                lineHeight: '25px',
                color: '#727272'
              }}
            >
              El hecho de que Jesús muestre muchas características humanas no menoscaba la realidad de que el es Dios.
              Jesús es el Único ser en que se han conjugado la naturaleza Divina San Mateo 22:44; Isaías 7:14 con San
              Mateo 1:22-23; San Juan 8:58-59, 10:30; 14:8,9; Apocalipsis 1:17-18.
            </p>
          </div>
          <div className='col-sm-5'>
            <img
              src={PastorMike2}
              style={{
                width: '100%',
                border: '4px solid white',
                borderRadius: '5px',
                boxShadow: '0 0 20px gray',
                MozBoxShadow: '0 0 20px gray',
                WebkitBoxShadow: '0 0 20px gray'
              }}
              alt=''
            />
          </div>
        </div>
        <div
          className='row'
          style={{
            paddingTop: '5vh',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className='col-sm-5'>
            <img
              src={ChurchBenches}
              style={{
                width: '100%',
                border: '4px solid white',
                borderRadius: '5px',
                boxShadow: '0 0 20px gray',
                MozBoxShadow: '0 0 20px gray',
                WebkitBoxShadow: '0 0 20px gray'
              }}
              alt=''
            />
          </div>
          <div className='col-sm-7'>
            <p
              style={{
                fontSize: 25,
                fontWeight: 'bolder',
                paddingBottom: '1vh',
                color: 'black'
              }}
            >
              La Personalidad y Deidad del Espíritu Santo:
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                lineHeight: '25px',
                color: '#727272'
              }}
            >
              Para saber si el Espíritu Santo es una persona se hace necesario examinar si cumple con las condiciones
              básicas que hacen de un ser una persona. Las tres cualidades básicas de la personalidad son: La capacidad
              de razonar, la capacidad de experimentar emociones y la capacidad de decisión. La Razón: Romanos 5:27; 1a.
              Corintios 2:10-11. Las Emociones: Isaías 63:10; Romanos 15:30; Efesios 4:30. LA Voluntad: 1a. Corintios
              12:11
            </p>
          </div>
        </div>
        <div
          className='row'
          style={{
            paddingTop: '5vh',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className='col-sm-7'>
            <p
              style={{
                fontSize: 25,
                fontWeight: 'bolder',
                paddingBottom: '1vh',
                color: 'black'
              }}
            >
              La Depravación Total:
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                lineHeight: '25px',
                color: '#727272'
              }}
            >
              Dios creo al hombre a su imagen y semejanza moral. Por consiguiente, estaba dotado de santidad, inocencia,
              amor, misericordia, etc. Sin embargo cuando el hombre peco, perdió la imagen de Dios y corrompió su
              naturaleza. El hombre atrajo sobre si la muerte, la corrupción, la enfermedad y todos los males que se
              derivan del pecado. Cuando el hombre procreo sus primeros hijos, estos heredaron la naturaleza caída
              naciendo espiritualmente muertos. El hombre es incapaz de hacer lo bueno y no puede por si mismo elevarse
              en busca de la salvación. A esta condición humana es a la que se le llama Depravación Total porque a causa
              del pecado el hombre siempre elige lo malo, no puede hacer lo bueno, no entiende lo bueno y no quiere
              hacer lo bueno. Génesis 6:5; Romanos 3:10-12
            </p>
          </div>
          <div className='col-sm-5'>
            <img
              src={PastoraYady}
              style={{
                width: '100%',
                border: '4px solid white',
                borderRadius: '5px',
                boxShadow: '0 0 20px gray',
                MozBoxShadow: '0 0 20px gray',
                WebkitBoxShadow: '0 0 20px gray'
              }}
              alt=''
            />
          </div>
        </div>
        <div
          className='row'
          style={{
            paddingTop: '5vh',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className='col-sm-5'>
            <img
              src={PastorJulio}
              style={{
                width: '100%',
                border: '4px solid white',
                borderRadius: '5px',
                boxShadow: '0 0 20px gray',
                MozBoxShadow: '0 0 20px gray',
                WebkitBoxShadow: '0 0 20px gray'
              }}
              alt=''
            />
          </div>
          <div className='col-sm-7'>
            <p
              style={{
                fontSize: 25,
                fontWeight: 'bolder',
                paddingBottom: '1vh',
                color: 'black'
              }}
            >
              La Salvación a travez de Jesús
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                lineHeight: '25px',
                color: '#727272'
              }}
            >
              todos los hombres han pecado en Adán y que sin excepción son culpables y dignos de condenación, Dios no
              habría cometido ninguna injusticia si hubiera pasado por alto a todos para reservarlos al fuego eterno
              dejando que cosecharan lo que ellos mismos sembraron. Pero, el amor y la misericordia de Dios se manifestó
              grandemente cuando de entre todo ese mundo perdido escogió a aquellos que,
            </p>
          </div>
        </div>
        <div
          className='row'
          style={{
            paddingTop: '5vh',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className='col-sm-7'>
            <p
              style={{
                fontSize: 25,
                fontWeight: 'bolder',
                paddingBottom: '1vh',
                color: 'black'
              }}
            >
              La Vida Eterna
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                lineHeight: '25px',
                color: '#727272'
              }}
            >
              En las Escrituras el arrepentimiento es presentado como un paso necesario para entrar en el reino de Dios.
              Es el dolor o pesar de haber ofendido a Dios con nuestras conductas pecaminosas. La idea que transmite el
              arrepentimiento es la necesidad de una conversión a Dios que incluye un cambio en la manera de pensar,
              sentir y actuar. San Mateo 3:8; San Lucas 5:32; Hechos 5:31; 11:18; 26:20; Romanos2:4.
            </p>
          </div>
          <div className='col-sm-5'>
            <img
              src={HermanoAxel2}
              style={{
                width: '100%',
                border: '4px solid white',
                borderRadius: '5px',
                boxShadow: '0 0 20px gray',
                MozBoxShadow: '0 0 20px gray',
                WebkitBoxShadow: '0 0 20px gray'
              }}
              alt=''
            />
          </div>
        </div>
        <div
          className='row'
          style={{
            paddingTop: '5vh',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className='col-sm-5'>
            <img
              src={ChurchBenches2}
              style={{
                width: '100%',
                border: '4px solid white',
                borderRadius: '5px',
                boxShadow: '0 0 20px gray',
                MozBoxShadow: '0 0 20px gray',
                WebkitBoxShadow: '0 0 20px gray'
              }}
              alt=''
            />
          </div>
          <div className='col-sm-7'>
            <p
              style={{
                fontSize: 25,
                fontWeight: 'bolder',
                paddingBottom: '1vh',
                color: 'black'
              }}
            >
              La Justificación:
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                lineHeight: '25px',
                color: '#727272'
              }}
            >
              La justificación es el acto por el que Dios declara a una persona inocente, librándola de toda acusación
              que podría presentarse en su contra, siendo Jesucristo el Único Mediador para poder dar la justificación a
              los hombres y ser aceptos delante de Dios como hijos amados. Romanos 5:1; 8:3; 2a. Corintios 5:21, San
              Juan 5:24.
            </p>
          </div>
        </div>
        <div
          className='row'
          style={{
            paddingTop: '5vh',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className='col-sm-7'>
            <p
              style={{
                fontSize: 25,
                fontWeight: 'bolder',
                paddingBottom: '1vh',
                color: 'black'
              }}
            >
              La Regeneración:
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                lineHeight: '25px',
                color: '#727272'
              }}
            >
              Llamada también nuevo nacimiento, es el acto creador de Dios por medio del cual otorga al hombre una
              naturaleza espiritual. Efesios 2:1, San Juan 3:3, 2a. Corintios 5:17. La Santificación: El significado
              básico de santificación es la acción por medio de la cual algo es separado o consagrado a Dios. Los
              creyentes, al ser santificados, son separados para Dios; implicándose con ello la transformaciones
              espirituales que corresponden a su nueva relación con El. Existen tres diferentes aspectos de la
              santificación como lo son: La posicional, la progresiva y la eterna. Hebreos 10:12-14; Filipenses 1:6;
              Filipenses 3:20.
            </p>
          </div>
          <div className='col-sm-5'>
            <img
              src={PastorJulio2}
              style={{
                width: '100%',
                border: '4px solid white',
                borderRadius: '5px',
                boxShadow: '0 0 20px gray',
                MozBoxShadow: '0 0 20px gray',
                WebkitBoxShadow: '0 0 20px gray'
              }}
              alt=''
            />
          </div>
        </div>
        <div
          className='row'
          style={{
            paddingTop: '5vh',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className='col-sm-5'>
            <img
              src={Pastores}
              style={{
                width: '100%',
                border: '4px solid white',
                borderRadius: '5px',
                boxShadow: '0 0 20px gray',
                MozBoxShadow: '0 0 20px gray',
                WebkitBoxShadow: '0 0 20px gray'
              }}
              alt=''
            />
          </div>
          <div className='col-sm-7'>
            <p
              style={{
                fontSize: 25,
                fontWeight: 'bolder',
                paddingBottom: '1vh',
                color: 'black'
              }}
            >
              El Bautismo en el Espíritu Santo:
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                lineHeight: '25px',
                color: '#727272'
              }}
            >
              Hechos 2:1-17,2:37-41 Creemos en el poder recibido a travez de la llenura y unción del Espíritu Santo,como
              en el Aposento Alto Es la investidura de poder que Cristo otorga a los creyentes para un testimonio eficaz
              (Hechos 1:5). El Bautismo en el Espíritu Santo fue ofrecido inicialmente por Juan el Bautista ( San Mateo
              3:11) y, posteriormente, prometido por el Señor Jesús ( San Lucas 24:49 ) y confirmándose sobre la vida de
              los creyentes del principio según (Hechos 2:1-4 ) prometiendo Cristo que seria una señal para todos los
              que creerían en El ( San Marcos 16:17 ), siendo la señal externa de haber sido bautizado en el Espíritu
              Santo el hablar en otras lenguas. (Hechos 10:44-46).
            </p>
          </div>
        </div>
        <div
          className='row'
          style={{
            paddingTop: '5vh',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            paddingBottom: '5vh'
          }}
        >
          <div className='col-sm-7'>
            <p
              style={{
                fontSize: 25,
                fontWeight: 'bolder',
                paddingBottom: '1vh',
                color: 'black'
              }}
            >
              Los Dones del Espíritu Santo:
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                lineHeight: '25px',
                color: '#727272',
                paddingBottom: '4vh'
              }}
            >
              Los Dones del Espíritu Santo: Son capacidades sobrenaturales que Dios otorga a los creyentes para
              edificación de la iglesia. Los dones del Espíritu Santo son manifestaciones completamente milagrosas que
              no podrían ser ejercidas sin la intervención de Dios. Los Dones del Espíritu Santo son nueve ( 1a.
              Corintios 12:7-11) y, para su estudio, se clasifican en tres grupos:
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                lineHeight: '25px',
                color: '#727272',
                paddingBottom: '2vh'
              }}
            >
              1)Los Dones de Revelación son la palabra de ciencia, palabra de sabiduría, y disernimiento de espíritus
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                lineHeight: '25px',
                color: '#727272',
                paddingBottom: '2vh'
              }}
            >
              2)Los Dones de Inspiración o Palabra: a)Géneros de Lenguas b)Interpretación de Lenguas c)Profecía
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                lineHeight: '25px',
                color: '#727272'
              }}
            >
              3)Los dones de poder son el don de sanidades, operación de milagros, y el don do fe. Los dones de
              revelación son aquellos por medio de los cuales Dios comparte su conocimiento con su iglesia. Hechos 5:3;
              9:10-11; 10:19-20.
            </p>
          </div>
          <div className='col-sm-5'>
            <img
              src={HermanoAxel3}
              style={{
                width: '100%',
                border: '4px solid white',
                borderRadius: '5px',
                boxShadow: '0 0 20px gray',
                MozBoxShadow: '0 0 20px gray',
                WebkitBoxShadow: '0 0 20px gray'
              }}
              alt=''
            />
          </div>
        </div>
      </>
    )
  }
}

export default beliefsCard
