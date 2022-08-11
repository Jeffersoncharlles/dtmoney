import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
    SearchFormContainer,
} from './styles';

const searchFromSchema = z.object({
    query: z.string().trim()
})

type SearchFormInputs = z.infer<typeof searchFromSchema>

export const SearchForm = () => {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFromSchema)
    })


    const handleSearchTransactions = (data: SearchFormInputs) => {

    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder='Busque por transações'
                {...register('query')}
            />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>

        </SearchFormContainer>
    );
}