'use client'

import { CSSProperties, JSX, ReactNode, useState } from 'react'

import * as Label from '@radix-ui/react-label'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'

import s from './Select.module.scss'

import { ScrollArea, ScrollBar } from '../ScrollArea/ScrollArea'

export type Option = {
  disabled?: boolean
  icon?: JSX.Element
  label?: number | string
  value: string
}

export type SelectProps = {
  className?: string
  disabled?: boolean
  isOpen?: boolean
  label?: string
  maxHeight?: number
  name?: string
  onValueChange?: (value: string) => void
  options: Option[]
  placeholder?: ReactNode
  setIsOpen?: (isOpen: boolean) => void
  value?: string
  width?: CSSProperties['width']
}

export const Select = (props: SelectProps) => {
  const {
    className,
    disabled = false,
    isOpen = false,
    label,
    maxHeight = 158,
    name,
    onValueChange,
    options,
    placeholder,
    setIsOpen,
    value = '',
    width = '100%',
  } = props

  const [open, setOpen] = useState(isOpen)

  const onOpenChangeHandler = () => {
    if (!disabled) {
      setIsOpen ? setIsOpen(!isOpen) : setOpen(!open)
    }
  }
  const classNames = {
    content: clsx(s.content, className),
    icon: clsx(s.icon),
    item: clsx(s.item),
    itemContent: clsx(s.itemContent),
    itemLabel: clsx(s.itemLabel),
    label: clsx(s.label),
    trigger: clsx(s.trigger, label && s.defaultWithLabel),
    value: clsx(s.value),
  }

  return (
    <Label.Root className={s.labelRoot}>
      {label && (
        <span className={classNames.label} onClick={onOpenChangeHandler}>
          {label}
        </span>
      )}
      <SelectPrimitive.Root
        {...{
          disabled,
          name,
          onOpenChange: onOpenChangeHandler,
          onValueChange,
          open,
          value,
        }}
      >
        <SelectPrimitive.Trigger className={classNames.trigger} style={{ width }}>
          <SelectPrimitive.Value className={classNames.value} placeholder={placeholder} />
          <SelectPrimitive.Icon className={classNames.icon}>
            <ChevronDown height={24} width={24} />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            className={classNames.content}
            position={'popper'}
            sideOffset={-1}
          >
            <SelectPrimitive.Viewport asChild>
              <ScrollArea maxHeight={maxHeight}>
                {options.map(option => (
                  <SelectPrimitive.Item
                    className={classNames.item}
                    disabled={option.disabled}
                    key={option.value}
                    value={option.value}
                  >
                    <SelectPrimitive.ItemText asChild>
                      <div className={classNames.itemContent}>
                        {option.icon && <>{option.icon}</>}
                        {option.label && (
                          <span className={classNames.itemLabel}>{option.label}</span>
                        )}
                      </div>
                    </SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                ))}
                <ScrollBar orientation={'horizontal'} />
              </ScrollArea>
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </Label.Root>
  )
}
