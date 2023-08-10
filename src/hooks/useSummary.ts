import { TransactionsContext } from '@/context/TransactionsContext'
import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'

export function useSummary () {
    const transactions = useContextSelector(TransactionsContext, (context) => context.transactions)

    const summary = useMemo(() => {
        return transactions.reduce((acc, transaction) => {
            if (transaction.type === 'income') {
                acc.income += transaction.value
                acc.total += transaction.value
            } else {
                acc.outcome += transaction.value
                acc.total -= transaction.value
            }

            return acc
        }, {
            income: 0,
            outcome: 0,
            total: 0
        })
    }, [transactions])

    return summary
}
