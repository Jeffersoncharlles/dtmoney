import {
    Overlay,
    Content,
    CloseButton,
    TransactionType,
    TransactionTypeButton,
} from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';


const newTransactionFormSchema = z.object({
    description: z.string().trim(),
    price: z.number(),
    category: z.string().trim(),
    type: z.enum(['income', 'outcome'])
})

type NewTransactionsFormInputs = z.infer<typeof newTransactionFormSchema>

export const NewTransactionModal = () => {
    const {
        register, handleSubmit,
        formState: { isSubmitting }
    } = useForm<NewTransactionsFormInputs>({ resolver: zodResolver(newTransactionFormSchema) })


    const handleNewTransactionSubmit = async (data: NewTransactionsFormInputs) => {
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log(data)

    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleNewTransactionSubmit)}>
                    <input
                        type="text"
                        placeholder='Descrição'
                        required
                        {...register('description')}
                    />
                    <input
                        type="number"
                        placeholder='Preço'
                        required
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input
                        type="text"
                        placeholder='Categoria'
                        required
                        {...register('category')}
                    />

                    <TransactionType>
                        <TransactionTypeButton
                            variant='income'
                            value='income'
                            {...register('type')}
                        >
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButton>
                        <TransactionTypeButton
                            variant='outcome'
                            value='outcome'
                            {...register('type')}
                        >
                            <ArrowCircleDown size={24} />
                            Saida
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type='submit' disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>

            </Content>
        </Dialog.Portal>
    );
}