type TClassNamesArgs = string | Record<string, boolean> | undefined

const classnames = (...args: TClassNamesArgs[]): string => {
    const classNames = args.reduce<string[]>((classNames, element) => {
        if (typeof element !== 'string' && element) {
            Object.entries(element).forEach(([className, isActive]) => {
                if (isActive) {
                    classNames.push(className)
                }
            })
        } else {
            element && classNames.push(element)
        }

        return classNames
    }, [])

    return classNames.join(' ')
}

export default classnames
