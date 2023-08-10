import { NewTransactionButtonStyles, HeaderContainer, HeaderStyles, LogoStyles } from '@/components/Header/styles'
import { NewTransactionModal } from '@/components/Modal/NewTransaction'
import TNBHLogo from '@/assets/TNBH.png'

import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'

export function Header () {
    const [open, setOpen] = useState<boolean>(false)

    const setOpenState = (state: boolean) => {
        return setOpen(state)
    }

    return (
        <HeaderContainer>
            <HeaderStyles>
                <LogoStyles>
                    <img src={ TNBHLogo } alt="" />
                    <span>VSH Money</span>
                </LogoStyles>
                <Dialog.Root open={ open } onOpenChange={ setOpen }>
                    <Dialog.Trigger asChild>
                        <NewTransactionButtonStyles>
                            New Transaction
                        </NewTransactionButtonStyles>
                    </Dialog.Trigger>
                    <NewTransactionModal setOpenState={ setOpenState } />
                </Dialog.Root>
            </HeaderStyles>
        </HeaderContainer>
    )
}
