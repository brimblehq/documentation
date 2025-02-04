"use client"

import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { useAnimate } from "motion/react"

import { cn } from "@/lib/utils"
import { createContext } from "@/registry/default/lib/context"

const Collapsible = React.forwardRef<
  React.ComponentRef<typeof CollapsiblePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>
>(({ children, open: openProp, onOpenChange, defaultOpen, ...props }, ref) => {
  const [open, setOpen] = useControllableState({
    prop: openProp,
    onChange: onOpenChange,
    defaultProp: defaultOpen,
  })

  return (
    <CollapsibleProvider value={{ open, setOpen }}>
      <CollapsiblePrimitive.Root
        ref={ref}
        open={open}
        onOpenChange={setOpen}
        {...props}
      >
        {children}
      </CollapsiblePrimitive.Root>
    </CollapsibleProvider>
  )
})
Collapsible.displayName = CollapsiblePrimitive.Root.displayName
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = ({
  children,
  className,
  initialHeight = 0,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent> & {
  initialHeight?: number
}) => {
  const [scope, animate] = useAnimate()
  const { open } = useCollapsible()

  React.useEffect(() => {
    if (scope.current) {
      animate(scope.current, {
        height: open ? "auto" : initialHeight,
        transition: {
          height: {
            type: "spring",
            bounce: 0,
            duration: 0.3,
          },
        },
      })
    }
  }, [open, animate, initialHeight, scope])

  return (
    <CollapsiblePrimitive.CollapsibleContent
      className={cn("overflow-hidden", className)}
      style={{ height: initialHeight }}
      ref={scope}
      {...props}
    >
      {children}
    </CollapsiblePrimitive.CollapsibleContent>
  )
}

interface CollapsibleContextValue {
  open: boolean | undefined
  setOpen: (value: boolean) => void
}

const [CollapsibleProvider, useCollapsible] =
  createContext<CollapsibleContextValue>({
    open: false,
    setOpen: () => {},
  })

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
export { useCollapsible }
