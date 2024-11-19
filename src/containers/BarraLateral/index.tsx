import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="buscar" />
      <S.Filtros>
        <FiltroCard contador={3} legenda="pendentes" />
        <FiltroCard contador={3} legenda="concluidas" />
        <FiltroCard contador={3} legenda="urgentes" />
        <FiltroCard contador={3} legenda="importantes" />
        <FiltroCard contador={3} legenda="normal" />
        <FiltroCard contador={3} legenda="todas" ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
