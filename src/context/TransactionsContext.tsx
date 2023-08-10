import { api } from '@/lib/axios'
import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'

type Transaction = {
    id: string
    title: string
    value: number
    category: string
    type: 'income' | 'outcome'
    created_at: string
}


type CreateTransactionType = {
    title: string
    value: number
    category: string
    type: 'income' | 'outcome'
}

type TransactionsType = {
    transactions: Transaction[]
    GETTransaction: (query?: string) => Promise<void>
    POSTTransaction: (data: CreateTransactionType) => Promise<void>
}

type TransactionsProviderProps = {
    children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsType)

export function TransactionsProvider ({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    const GETTransaction = useCallback(async (query?: string) => {
        const response = await api.get('/transactions', {
            params: {
                q: query,
                _sort: 'created_at',
                _order: 'desc'
            }
        })

        setTransactions(response.data)
    }, [])

    const POSTTransaction = useCallback(async (data: CreateTransactionType) => {
        const { category, title, type, value } = data

        const response = await api.post('/transactions', {
            title,
            category,
            value,
            type,
            created_at: new Date()
        })

        setTransactions(state => ([response.data, ...state]))
    }, [])

    useEffect(() => {
        GETTransaction()
    }, [GETTransaction])

    return (
        <TransactionsContext.Provider value={ {
            transactions,
            GETTransaction,
            POSTTransaction
        } }>
            { children }
        </TransactionsContext.Provider>
    )
}
