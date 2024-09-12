import { forwardRef } from 'react'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'
import s from './Accordion.module.scss'

export type AccordionItem = {
  content: React.ReactNode
  trigger: React.ReactNode
}

export type AccordionProps = {
  items: AccordionItem[]
  className?: string
}

export const Accordion: React.FC<AccordionProps> = ({ className, items }) => (
  <AccordionPrimitive.Root className={clsx(s.root, className)} type={'single'} collapsible>
    {items.map((item, index) => (
      <AccordionPrimitive.Item className={s.item} value={`item-${index}`} key={index}>
        <AccordionTrigger>{item.trigger}</AccordionTrigger>
        <AccordionContent>{item.content}</AccordionContent>
      </AccordionPrimitive.Item>
    ))}
  </AccordionPrimitive.Root>
)

const AccordionTrigger = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, className, ...rest }, ref) => (
  <AccordionPrimitive.Header className={s.triggerHeader}>
    <AccordionPrimitive.Trigger className={clsx(s.trigger, className)} {...rest} ref={ref}>
      {children}
      <span className={s.triggerIcon}>
        <ChevronDown aria-hidden width={36} height={36} />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...rest }, forwardedRef) => (
  <AccordionPrimitive.Content className={clsx(s.content, className)} {...rest} ref={forwardedRef}>
    <div className={s.contentText}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName
