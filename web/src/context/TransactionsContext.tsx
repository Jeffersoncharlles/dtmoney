import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { api } from "../lib/axios";

export interface ITransaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    category: string;
    price: number;
    createdAt: string;
}

interface ITransactionsContext {
    transactions: ITransaction[]
    fetchTransactions: (q?: string) => Promise<void>
}


const TransactionsContext = createContext({} as ITransactionsContext)



export const TransactionsProvider = ({ children }: { children: ReactNode }) => {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    const fetchTransactions = async (q?: string) => {
        const { data } = await api.get('transactions', {
            params: {
                q
            }
        })
        if (data) {
            setTransactions(data)
        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{
            transactions,
            fetchTransactions
        }}>
            {children}
        </TransactionsContext.Provider>
    )

}



export const useTransactions = () => {
    const context = useContext(TransactionsContext)

    return context
}