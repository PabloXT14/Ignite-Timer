import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const arrayTest = [1, 2, 3, 4, 5, 6, 7]
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <pre>{JSON.stringify(cycles, null, 2)}</pre>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {arrayTest.map((element) => {
              return (
                <tr key={element}>
                  <td>Tarefa</td>
                  <td>20 minutos</td>
                  <td>Há 2 meses</td>
                  <td>
                    <Status statusColor="green">Concluído</Status>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
