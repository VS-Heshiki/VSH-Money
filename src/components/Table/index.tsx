import { SearchTransaction } from '@/components/Table/components/SearchTransaction'
import { PriceHighlight, TableContainer, TableStyles } from '@/components/Table/styles'
import { TransactionsContext } from '@/context/TransactionsContext'
import { dateFormatter, priceFormatter } from '@/utils/formatter'
import { useContextSelector } from 'use-context-selector'

export function Table () {
    const transactions = useContextSelector(TransactionsContext, (context) => context.transactions)

    return (
        <TableContainer>
            <SearchTransaction />

            <TableStyles>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    { transactions.map(transaction => {
                        return (
                            <tr key={ transaction.id }>
                                <td width={ '45%' }>{ transaction.title }</td>
                                <td>
                                    <PriceHighlight variant={ transaction.type }>
                                        { transaction.type === 'outcome' && '- ' }
                                        { priceFormatter.format(transaction.value) }
                                    </PriceHighlight>
                                </td>
                                <td>{ transaction.category }</td>
                                <td>{ dateFormatter.format(new Date(transaction.created_at)) }</td>
                            </tr>
                        )
                    }) }
                </tbody>
            </TableStyles>
        </TableContainer >
    )
}
