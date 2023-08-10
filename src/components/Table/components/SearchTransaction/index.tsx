import { SearchTransactionContainer } from '@/components/Table/components/SearchTransaction/styles'
import { TransactionsContext } from '@/context/TransactionsContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useContextSelector } from 'use-context-selector'



const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormType = z.infer<typeof searchFormSchema>

export function SearchTransaction () {
    const GETTransaction = useContextSelector(TransactionsContext, (context) => context.GETTransaction)
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormType>({
        resolver: zodResolver(searchFormSchema)
    })

    const handleFormSubmit = (data: SearchFormType) => {
        GETTransaction(data.query)
    }

    return (
        <SearchTransactionContainer onSubmit={ handleSubmit(handleFormSubmit) }>
            <input type="text" placeholder='Search for transactions' { ...register('query') } />
            <button type="submit" disabled={ isSubmitting }>
                <MagnifyingGlass size={ 24 } />
                Search
            </button>
        </SearchTransactionContainer>
    )
}
