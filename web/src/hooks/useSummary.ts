import { useTransactions } from "../context/TransactionsContext"


export const useSummary = () => {
    const { transactions } = useTransactions()


    //reduce percorre o array e redux o array ao uma nova estrutura de dados
    // acc e o objeto inicial
    //{income:0, outcome:0,total:0}
    const summary = transactions.reduce((acc, transaction) => {

        if (transaction.type === 'income') {
            //colocar dendo do acc a soma de todos os price
            acc.income += transaction.price

            acc.total += transaction.price
            //vou aumentar o total com o price 
        } else {
            acc.outcome += transaction.price

            acc.total -= transaction.price
            //vou diminuir o total com o price
        }

        return acc;

    }, { income: 0, outcome: 0, total: 0 })

    return summary
}