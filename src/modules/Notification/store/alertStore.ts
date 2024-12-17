import { ref } from "vue"
import { defineStore } from "pinia"

export const useAlertStore = defineStore('alert', () => {
    const alerts = ref<{ message: string, type: 'success' | 'error' | 'info' }[]>([]);

    function addAlert(message: string, type: 'success' | 'error' | 'info') {
        alerts.value.push({ message, type })
        setTimeout(() => {
            alerts.value.shift()
        }, 5000)
    }

    return { alerts, addAlert }
})