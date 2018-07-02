export default {
    data: () => ({
        notificationText: '',
        notificationColor: '',
        notificationQueue: [],
        notification: false
    }),

    computed: {
        hasNotificationsPending() {
            return this.notificationQueue.length > 0
        }  
    },

    watch: {
        notification() {
            if (!this.notification && this.hasNotificationsPending) {
                let item = this.notificationQueue.shift()
                this.notificationText = item.text
                this.notificationColor = item.color
                this.$nextTick(() => this.notification = true)
            }
        }   
    },

    methods: {
        addNotification(text, color) {
            this.notificationQueue.push({ text: text, color: color })

            if (!this.notification) {
                let item = this.notificationQueue.shift()
                this.notificationText = item.text
                this.notificationColor = item.color
                this.notification = true
            }
        } 
    }
}
