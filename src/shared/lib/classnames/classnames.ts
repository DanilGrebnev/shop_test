type TClassNamesArgs = string | Record<string, number>

export const classnames = (...args: TClassNamesArgs[]) => {
    return args.reduce((className, element) => {
        if (typeof element === 'string') {
            className += element
        }

        if (typeof element === 'object') {
            Object.entries(element).forEach(([key, isActive]) => {
                if (isActive) className += key
            })
        }

        return className
    }, '')
}
