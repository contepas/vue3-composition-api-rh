import { ref } from 'vue'
import { saveError } from './stores/errorLog'

/**
 * asyncronous calls wrapper.
 * It gives back an object with the callback to get the data and the reactive loading state.
 */
export default function askAsyncData(fn: Function) {
    const result = ref(null)
    const loading = ref(true)
    const error = ref(null)
    const callback = async (...args: any) => {
        try {
            result.value = await fn(...args)
        } catch (e) {
            error.value = e
            saveError(e)
        } finally {
            loading.value = false
        }
    }
    return {
        result,
        loading,
        error,
        callback,
    }
}
