import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      '',
      1
    ),
    new Tarefa(
      'Estudar TypeScript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      '',
      2
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      '',
      3
    ),
    new Tarefa(
      'Estudar Java',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      '',
      4
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
