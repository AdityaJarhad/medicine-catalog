'use client'

import { cn } from '@/lib/utils'

const Dialog = ({ open, onOpenChange, children }) => {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => onOpenChange?.(false)} />
      )}
      {open && children}
    </>
  )
}

const DialogContent = ({ className, children, onClose }) => (
  <div className={cn(
    'fixed left-[50%] top-[50%] z-50 w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] border border-slate-200 bg-white shadow-lg rounded-lg',
    className
  )}>
    {children}
  </div>
)

const DialogClose = ({ onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={cn('p-2 hover:bg-slate-100 rounded-lg', className)}
  >
    ×
  </button>
)

export {
  Dialog,
  DialogContent,
  DialogClose,
}
