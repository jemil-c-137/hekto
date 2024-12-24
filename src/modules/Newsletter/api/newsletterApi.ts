export const subscribeToNewsletter = async (email: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 250)
    })
}