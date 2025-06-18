import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", variant = "default", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"

    const variantClasses = {
      default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      outline:
        "border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white focus:ring-blue-500",
      ghost: "text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-blue-500",
    }

    return (
      <button ref={ref} className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

export { Button }
