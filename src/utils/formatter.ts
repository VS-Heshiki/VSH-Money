export const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'USD'
})

export const dateFormatter = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium'
})
