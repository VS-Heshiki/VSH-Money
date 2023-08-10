import { SummaryContainer, SummaryStyles } from '@/components/Summary/styles'
import { useSummary } from '@/hooks/useSummary'
import { priceFormatter } from '@/utils/formatter'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollarSimple } from 'phosphor-react'

export function Summary () {
    const summary = useSummary()

    return (
        <SummaryContainer>
            <SummaryStyles>
                <header>
                    <span>Income</span>
                    <ArrowCircleUp size={ 32 } color='#00B37E' />
                </header>
                <footer>
                    <span>{ priceFormatter.format(summary.income) }</span>
                </footer>
            </SummaryStyles>
            <SummaryStyles>
                <header>
                    <span>Outcome</span>
                    <ArrowCircleDown size={ 32 } color='#F75A68' />
                </header>
                <footer>
                    <span>{ priceFormatter.format(summary.outcome) }</span>
                </footer>
            </SummaryStyles>
            <SummaryStyles variant='green'>
                <header>
                    <span>Total</span>
                    <CurrencyDollarSimple size={ 32 } color='#fff' />
                </header>
                <footer>
                    <span>{ priceFormatter.format(summary.total) }</span>
                </footer>
            </SummaryStyles>
        </SummaryContainer>
    )
}
