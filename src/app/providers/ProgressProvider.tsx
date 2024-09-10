'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
type Props = { children?: React.ReactNode }

export const ProgressProvider = ({ children }: Props) => {
  return (
    <>
      {children}
      <ProgressBar
        color={'var(--color-orange-300)'}
        height={'4px'}
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}
