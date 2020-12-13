import { ref, Ref } from 'vue'

const errors: Ref<Error[]> = ref([])

const sendErrors = () => {
    // send error to a microservice that save it in a database
    console.log(`errors: ${errors.value}, saved in the database`)
}

export const saveError = (error: Error) => {
    errors.value.push(error)
    if (process.env.NODE_ENV === 'development') {
        console.error(error)
    }
}

export const activateSendErrors = () => window.addEventListener('beforeunload', (e) => sendErrors())