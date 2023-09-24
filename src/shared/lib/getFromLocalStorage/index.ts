export const getFromLocalStorage = (key: string) => {
    const items = localStorage.getItem(key)

    if (items) {
        return JSON.parse(items)
    } else {
        return null
    }
}
