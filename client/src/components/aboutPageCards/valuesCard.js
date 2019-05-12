import React from 'react'

import {
  ChurchBenches,
  ChurchBenches2,
  HermanoAxel2,
  PastoraYady,
  Pastores,
  PastorJulio2,
  PastorMike,
  PastorMike2,
  HermanoAxel
} from '../../images/backgrounds'

const valuesCard = () => (
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
              paddingBottom: '2vh',
              color: 'black'
            }}
          >
            El Bautismo
          </p>
          <p
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              lineHeight: '25px',
              color: '#727272'
            }}
          >
            Juan el Bautista fue conducido por el Espíritu Santo para poner el método de bautismo en esta escritura:
          </p>
          <p
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              lineHeight: '25px',
              color: '#727272'
            }}
          >
            "Jesús, después que fue bautizado, subió luego del agua..."{' '}
            <span
              style={{
                fontSize: 12,
                fontWeight: 'normal',
                lineHeight: '25px',
                color: '#727272'
              }}
            >
              MATEO 3:16
            </span>
          </p>

          <p
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              lineHeight: '25px',
              color: '#727272',
              marginTop: '2vh'
            }}
          >
            "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y
            del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado..."
            <span
              style={{
                fontSize: 12,
                fontWeight: 'normal',
                lineHeight: '25px',
                color: '#727272'
              }}
            >
              MATEO 28:19-20
            </span>
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
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: '25px',
            color: '#727272',
            marginTop: '2vh'
          }}
        >
          "El que creyere y fuere bautizado, será salvo... Y estas señales seguirán a los que creen: En mi nombre
          echarán fuera demonios; hablarán nuevas lenguas; tomarán en las manos serpientes, y si bebieren cosa
          mortífera, no les hará daño; sobre los enfermos pondrán sus manos, y sanarán."
          <span
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              lineHeight: '25px',
              color: '#727272'
            }}
          >
            MARCOS 16:16-18
          </span>
        </p>
      </div>
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
      <div className='col-sm-7'>
        <p
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: '25px',
            color: '#727272'
          }}
        >
          Juan bautizaba en Enón. ¿Por qué?"...porque había allí muchas aguas..."
          <span
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              lineHeight: '25px',
              color: '#727272'
            }}
          >
            JUAN 3:23
          </span>
        </p>
        <p
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: '25px',
            color: '#727272',
            marginTop: '2vh'
          }}
        >
          Peter dijo: "Arrepentíos, y bautícese... y recibiréis el don del Espíritu Santo."
          <span
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              lineHeight: '25px',
              color: '#727272'
            }}
          >
            HECHOS 2:38
          </span>
        </p>
        <p
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: '25px',
            color: '#727272',
            marginTop: '2vh'
          }}
        >
          "Pero cuando creyeron a Felipe, que anunciaba el evangelio del reino de Dios y el nombre de Jesucristo, se
          bautizaban hombres y mujeres."
          <span
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              lineHeight: '25px',
              color: '#727272'
            }}
          >
            HECHOS 8:12
          </span>
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
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: '25px',
            color: '#727272',
            marginTop: '2vh'
          }}
        >
          "...y descendieron ambos al agua... y le bautizó." (Ninguna rociada aquí. La rociada es un hecho por el
          hombre, no bíblica.)
          <span
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              lineHeight: '25px',
              color: '#727272'
            }}
          >
            HECHOS 8:36,38
          </span>
        </p>
        <p
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: '25px',
            color: '#727272',
            marginTop: '2vh'
          }}
        >
          Cornelius y sus amigos acababan de recibir el Espíritu Santo con pruebas del hablar en lenguas: Peter "mandó
          bautizarles en el nombre del Señor Jesús."
          <span
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              lineHeight: '25px',
              color: '#727272'
            }}
          >
            HECHOS 10:47-48
          </span>
        </p>
        <p
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: '25px',
            color: '#727272',
            marginTop: '2vh'
          }}
        >
          "Y Crispo, el principal de la sinagoga, creyó en el Señor con toda su casa; y muchos de los corintios, oyendo,
          creían y eran bautizados."
          <span
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              lineHeight: '25px',
              color: '#727272'
            }}
          >
            HECHOS 18:8
          </span>
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
      <div className='col-sm-7'>
        <p
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: '25px',
            color: '#727272',
            marginTop: '2vh'
          }}
        >
          "Ahora, pues, ¿por qué te detienes? Levántate y bautízate, y lava tus pecados, invocando su nombre."
          <span
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              lineHeight: '25px',
              color: '#727272'
            }}
          >
            HECHOS 22:16
          </span>
        </p>
        <p
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: '25px',
            color: '#727272',
            marginTop: '2vh'
          }}
        >
          "Porque somos sepultados juntamente con él para muerte por el bautismo, a fin de que como Cristo resucitó de
          los muertos por la gloria del Padre, así también nosotros andemos en vida nueva. Porque si fuimos plantados
          juntamente con él en la semejanza de su muerte, así también lo seremos en la de su resurrección." (Como el
          Espíritu Santo planteó Jesús de la tumba).
          <span
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              lineHeight: '25px',
              color: '#727272'
            }}
          >
            ROMANOS 6:4-5
          </span>
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
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: '25px',
            color: '#727272',
            marginTop: '2vh'
          }}
        >
          "Sepultados con él en el bautismo...""Sepultados con él en el bautismo..."
          <span
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              lineHeight: '25px',
              color: '#727272'
            }}
          >
            COLOSENSES 2:12
          </span>
        </p>
        <p
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: '25px',
            color: '#727272',
            marginTop: '2vh'
          }}
        >
          "El bautismo que corresponde a esto ahora nos salva..."
          <span
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              lineHeight: '25px',
              color: '#727272'
            }}
          >
            1 PEDRO 3:21
          </span>
        </p>
        <p
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: '25px',
            color: '#727272',
            marginTop: '2vh'
          }}
        >
          "¿Por qué me llamáis, Señor, Señor, y no hacéis lo que yo digo?"
          <span
            style={{
              fontSize: 12,
              fontWeight: 'normal',
              lineHeight: '25px',
              color: '#727272'
            }}
          >
            LUCAS 6:46
          </span>
        </p>
      </div>
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
      <div className='col-sm-7'>
        <p
          style={{
            fontSize: 25,
            fontWeight: 'bolder',
            paddingBottom: '1vh',
            color: 'black'
          }}
        >
          La Santa Cena
        </p>
        <p
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: '25px',
            color: '#727272'
          }}
        >
          En 1 Corintios 11:17-32 se halla un testimonio sobre el festejo de la Santa Cena y las palabras pronunciadas
          por Jesús al instituirla. En este texto se testifica en primer lugar, que en las primeras comunidades
          cristianas se practicaba el festejo de la Santa Cena. El Apóstol Pablo cita las palabras de institución de la
          Santa Cena utilizadas en Corinto. Aquí queda en claro que existía un texto establecido de antemano: “Porque yo
          recibí del Señor lo que también os he enseñado". Luego siguen las palabras de institución: “Que el Señor
          Jesús, la noche que fue entregado, tomó pan; y habiendo dado gracias, lo partió, y dijo: Tomad, comed; esto es
          mi cuerpo que por vosotros es partido; haced esto en memoria de mí. Asimismo tomó también la copa, después de
          haber cenado, diciendo: Esta copa es el nuevo pacto en mi sangre; haced esto todas las veces que la bebiereis,
          en memoria de mí. Así, pues, todas las veces que comiereis este pan, y bebiereis esta copa, la muerte del
          Señor anunciáis hasta que él venga" (1 Co. 11:23-26).
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
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: '25px',
            color: '#727272'
          }}
        >
          Este texto brinda explicaciones sobre la situación en la cual tuvo lugar la institución de la Santa Cena y
          cita palabras pronunciadas por Jesús. Las palabras de institución incluyen la conmemoración de ese
          acontecimiento único en la historia de la salvación. Allí donde se festeja la Santa Cena, también se recuerda
          la noche en la cual Jesús fue traicionado.
        </p>
      </div>
      <div className='col-sm-5'>
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
    </div>
    <div
      className='row'
      style={{
        paddingTop: '5vh',
        paddingBottom: '5vh',
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
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: '25px',
            color: '#727272'
          }}
        >
          Asimismo van unidos el partimiento del pan y el agradecimiento a Dios (del gr.: “eucharistein"). Al mismo
          tiempo se menciona la interpretación del pan y el vino: el pan no es sólo pan de Pascua, sino “mi cuerpo que
          por vosotros es partido". Tampoco la copa contiene sólo el vino habitual de la cena pascual, sino que “es el
          nuevo pacto en mi sangre". La copa con vino que iba pasando de mano en mano en el festejo de la cena,
          representa el nuevo pacto fundamentado en la muerte de Jesús. El que bebe de la copa, recibe la sangre de
          Jesucristo, es decir, al Señor mismo. Al final del texto se destacan el significado del anuncio de la muerte
          acontecida una única vez y el significado del retorno de Cristo. Asimismo se subraya la importancia de la
          Santa Cena para la comunión de vida con el Señor: “La copa de bendición que bendecimos, ¿no es la comunión de
          la sangre de Cristo? El pan que partimos, ¿no es la comunión del cuerpo de Cristo? Siendo uno solo el pan,
          nosotros, con ser muchos, somos un cuerpo; pues todos participamos de aquel mismo pan" (1 Co. 10:16-17).
        </p>
      </div>
    </div>
  </>
)

export default valuesCard
