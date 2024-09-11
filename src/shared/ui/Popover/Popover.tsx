import { type ComponentPropsWithoutRef, type ElementRef, type ReactNode, forwardRef } from 'react'

import * as PopoverPrimitive from '@radix-ui/react-popover'
import clsx from 'clsx'

import s from './Popover.module.scss'
import { AlignJustify } from 'lucide-react'

export type PopoverProps = {
  trigger?: ReactNode
  /* ClassName for the trigger button */
  triggerClassName?: string
} & ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> &
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>

export const Popover = forwardRef<ElementRef<typeof PopoverPrimitive.Content>, PopoverProps>(
  (props, ref) => {
    const {
      align = 'end',
      alignOffset = 0,

      children,
      className,
      onOpenChange,
      open,
      sideOffset = 0,
      trigger,
      triggerClassName,
      ...rest
    } = props

    return (
      <PopoverPrimitive.Root onOpenChange={onOpenChange} open={open}>
        <PopoverPrimitive.Trigger asChild>
          {trigger || (
            <button className={clsx(s.trigger, triggerClassName)}>
              <AlignJustify width={36} height={36} />
            </button>
          )}
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Content
          align={align}
          alignOffset={alignOffset}
          className={clsx(s.content, className)}
          ref={ref}
          sideOffset={sideOffset}
          {...rest}
        >
          {children}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Root>
    )
  }
)

Popover.displayName = PopoverPrimitive.Root.displayName
