import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import { api } from '../lib/axios'

export interface ITransaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface INewTransaction {
  category: string
  price: number
  description: string
  type: 'income' | 'outcome'
}

interface ITransactionsContext {
  transactions: ITransaction[]
  fetchTransactions: (q?: string) => Promise<void>
  newTransaction: (data: INewTransaction) => Promise<void>
}

const TransactionsContext = createContext({} as ITransactionsContext)

export const TransactionsProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const fetchTransactions = async (q?: string) => {
    const { data } = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q,
      },
    })
    if (data) {
      setTransactions(data)
    }
  }

  const newTransaction = async (data: INewTransaction) => {
    const { category, description, price, type } = data
    const response = await api.post('transactions', {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    })

    if (response.data) {
      setTransactions((state) => [response.data, ...state])
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        newTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext)

  return context
}
