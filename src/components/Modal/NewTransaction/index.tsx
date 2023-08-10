import { Overlay, Content, Close, ButtonTypeTransaction, TypeTransaction } from '@/components/Modal/NewTransaction/styles'
import { TransactionsContext } from '@/context/TransactionsContext'
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { useContextSelector } from 'use-context-selector'


const modalFormSchema = z.object({
    title: z.string(),
    value: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type ModalFormType = z.infer<typeof modalFormSchema>

type TransactionModalProps = {
    setOpenState: (state: boolean) => void
}

export function NewTransactionModal ({ setOpenState }: TransactionModalProps) {
    const POSTTransaction = useContextSelector(TransactionsContext, (context) => context.POSTTransaction)

    const { register, handleSubmit, control, reset, formState: { isSubmitting } } = useForm<ModalFormType>({
        resolver: zodResolver(modalFormSchema)
    })

    const handleModalForm = async (data: ModalFormType): Promise<void> => {
        const { category, title, type, value } = data

        await POSTTransaction({ category, title, type, value })
        reset()
        setOpenState(false)
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Close>
                    <X size={ 24 } />
                </Close>
                <Dialog.Title>
                    Add new transaction
                </Dialog.Title>
                <form onSubmit={ handleSubmit(handleModalForm) } >
                    <input type="text" placeholder='Description' required { ...register('title') } />
                    <input type="number" placeholder='Value' required { ...register('value', { valueAsNumber: true }) } />
                    <input type="text" placeholder='Category' required { ...register('category') } />

                    <Controller
                        control={ control }
                        name='type'
                        render={ ({ field }) => {
                            return (
                                <TypeTransaction required onValueChange={ field.onChange } value={ field.value }>
                                    <ButtonTypeTransaction variable='income' value='income'>
                                        <ArrowCircleUp size={ 24 } />
                                        Income
                                    </ButtonTypeTransaction>
                                    <ButtonTypeTransaction variable='outcome' value='outcome'>
                                        <ArrowCircleDown size={ 24 } />
                                        Outcome
                                    </ButtonTypeTransaction>
                                </TypeTransaction>
                            )
                        } }
                    />
                    <button type="submit" disabled={ isSubmitting }>Register</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}
