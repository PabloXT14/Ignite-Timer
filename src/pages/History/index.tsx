import { HistoryContainer, HistoryList } from './styles'

export function History() {
  const arrayTest = [1, 2, 3, 4, 5, 6, 7]

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

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
                  <td>Concluído</td>
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
