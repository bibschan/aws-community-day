import { useEffect } from 'react'

let tallyLoaded = false
let tallyLoadPromise = null

export const useTally = () => {
    useEffect(() => {
        // Only run on client side
        if (typeof window === 'undefined') return

        if (tallyLoaded) return

        if (!tallyLoadPromise) {
            tallyLoadPromise = new Promise((resolve, reject) => {
                if (document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
                    tallyLoaded = true
                    resolve()
                    return
                }

                const script = document.createElement('script')
                script.src = 'https://tally.so/widgets/embed.js'
                script.async = true
                script.onload = () => {
                    tallyLoaded = true
                    resolve()
                }
                script.onerror = reject
                document.body.appendChild(script)
            })
        }
    }, [])

    return { tallyLoaded }
}