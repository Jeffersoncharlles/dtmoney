import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { api } from "../lib/api";

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
}


const TransactionsContext = createContext({} as ITransactionsContext)



export const TransactionsProvider = ({ children }: { children: ReactNode }) => {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    useEffect(() => {
        (async () => {
            const { data } = await api.get('transactions')
            if (data) {
                setTransactions(data)
            }
        })()
    }, [])

    return (
        <TransactionsContext.Provider value={{
            transactions,

        }}>
            {children}
        </TransactionsContext.Provider>
    )

}



export const useTransactions = () => {
    const context = useContext(TransactionsContext)

    return context
}