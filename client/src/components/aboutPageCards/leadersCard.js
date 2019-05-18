import React from 'react'
import { LeadersInfoCard } from '../aboutPageCards'

import {
  AxelIcon,
  JulioIcon,
  MikeIcon,
  YadiIcon,
  AdaIcon,
  AxelSquare,
  JulioSquare,
  MikeSquare,
  AdaSquare,
  YadySquare
} from '../../images/roundIcons'

const leadersCard = () => (
  <>
    <div
      className='row'
      style={{
        marginTop: '2vh',
        paddingTop: '5vh',
        paddingBottom: '2vh'
      }}
    >
      <LeadersInfoCard
        LeaderImg={JulioSquare}
        LeaderTitle='PASTOR GENERAL'
        LeaderName='Julio Vanegas'
        LeaderDescription='Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres'
        Verso='Colosenses 3:23'
      />
      <LeadersInfoCard
        LeaderImg={AxelSquare}
        LeaderTitle='PASTOR AUXILIAR'
        LeaderName='Axel Lopez'
        LeaderDescription='Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro.'
        Verso='Romanos 6:23'
      />
      <LeadersInfoCard
        LeaderImg={MikeSquare}
        LeaderTitle='HERMANO'
        LeaderName='Mike Bayona'
        LeaderDescription='Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.'
        Verso='Juan 14:6'
      />
    </div>
    <div
      className='row'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5vh',
        paddingBottom: '5vh'
      }}
    >
      <LeadersInfoCard
        LeaderImg={AdaSquare}
        LeaderTitle='PASTORA GENERAL'
        LeaderName='Ada Vanegas'
        LeaderDescription='Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.'
        Verso='1 Tesalonicenses 5:18'
      />
      <LeadersInfoCard
        LeaderImg={YadySquare}
        LeaderTitle='HERMANA'
        LeaderName='Yady Bayona'
        LeaderDescription='Jehová, tú eres mi Dios; te exaltaré, alabaré tu nombre, porque has hecho maravillas; tus consejos antiguos son verdad y firmeza.'
        Verso='Isaias 25:1'
      />
    </div>
  </>
)

export default leadersCard
