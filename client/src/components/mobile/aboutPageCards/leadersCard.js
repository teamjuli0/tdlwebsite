import React from 'react'
import { LeadersInfoCardMobile } from '../aboutPageCards'

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
} from '../../../images/roundIcons'

const leadersCard = () => (
  <>
    <div
      className='row'
      style={{
        margin: 'auto',
        marginTop: '2vh',
        paddingTop: '5vh',
        paddingBottom: '2vh',
        maxWidth: '768px'
      }}
    >
      <LeadersInfoCardMobile
        LeaderImg={JulioSquare}
        LeaderTitle='PASTOR GENERAL'
        LeaderName='Julio Vanegas'
        LeaderDescription='Descripcion Corta Va Aqui. Puede incluir lo que guste. Por favor un maximo de cuatro frases'
      />
      <LeadersInfoCardMobile
        LeaderImg={AdaSquare}
        LeaderTitle='PASTORA GENERAL'
        LeaderName='Ada Vanegas'
        LeaderDescription='Descripcion Corta Va Aqui. Puede incluir lo que guste. Por favor un maximo de cuatro frases'
      />
      <LeadersInfoCardMobile
        LeaderImg={AxelSquare}
        LeaderTitle='PASTOR AUXILIAR'
        LeaderName='Axel Lopez'
        LeaderDescription='Descripcion Corta Va Aqui. Puede incluir lo que guste. Por favor un maximo de cuatro frases'
      />
      <LeadersInfoCardMobile
        LeaderImg={MikeSquare}
        LeaderTitle='HERMANO'
        LeaderName='Mike Bayona'
        LeaderDescription='Descripcion Corta Va Aqui. Puede incluir lo que guste. Por favor un maximo de cuatro frases'
      />
      <LeadersInfoCardMobile
        LeaderImg={YadySquare}
        LeaderTitle='HERMANO'
        LeaderName='Yady Bayona'
        LeaderDescription='Descripcion Corta Va Aqui. Puede incluir lo que guste. Por favor un maximo de cuatro frases'
      />
    </div>
  </>
)

export default leadersCard
