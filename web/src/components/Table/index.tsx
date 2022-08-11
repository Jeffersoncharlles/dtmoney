import { useTransactions } from '../../context/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './SearchForm'
import { TableContainer, TransactionsTable, PriceHighlight } from './styles'

export const Table = () => {
  const { transactions } = useTransactions()

  return (
    <TableContainer>
      <SearchForm />
      <TransactionsTable>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td width="50%">{t.description}</td>
              <td>
                <PriceHighlight variant={t.type}>
                  {t.type === 'outcome' && '- '}
                  {priceFormatter.format(t.price)}
                </PriceHighlight>
              </td>
              <td>{t.category}</td>
              <td>{dateFormatter.format(new Date(t.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </TransactionsTable>
    </TableContainer>
  )
}
