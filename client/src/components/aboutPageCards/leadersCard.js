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
        LeaderDescription='Descripcion Corta Va Aqui. Puede incluir lo que guste. Por favor un maximo de cuatro frases'
      />
      <LeadersInfoCard
        LeaderImg={AxelSquare}
        LeaderTitle='PASTOR AUXILIAR'
        LeaderName='Axel Lopez'
        LeaderDescription='Descripcion Corta Va Aqui. Puede incluir lo que guste. Por favor un maximo de cuatro frases'
      />
      <LeadersInfoCard
        LeaderImg={MikeSquare}
        LeaderTitle='HERMANO'
        LeaderName='Mike Bayona'
        LeaderDescription='Descripcion Corta Va Aqui. Puede incluir lo que guste. Por favor un maximo de cuatro frases'
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
        LeaderDescription='Descripcion Corta Va Aqui. Puede incluir lo que guste. Por favor un maximo de cuatro frases'
      />
      <LeadersInfoCard
        LeaderImg={YadySquare}
        LeaderTitle='HERMANA'
        LeaderName='Yady Bayona'
        LeaderDescription='Descripcion Corta Va Aqui. Puede incluir lo que guste. Por favor un maximo de cuatro frases'
      />
    </div>
  </>
)

export default leadersCard
