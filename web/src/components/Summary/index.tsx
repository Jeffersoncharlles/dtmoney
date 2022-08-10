import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useTransactions } from '../../context/TransactionsContext';
import {
    SummaryContainer,
    SummaryCard
} from './styles';

export const Summary = () => {
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

    return (
        <SummaryContainer>

            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong>{summary.income}</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#F75A68" />
                </header>
                <strong>{summary.outcome}</strong>
            </SummaryCard>
            <SummaryCard variant='green'>
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#ffff" />
                </header>
                <strong>{summary.total}</strong>
            </SummaryCard>

        </SummaryContainer>
    );
}