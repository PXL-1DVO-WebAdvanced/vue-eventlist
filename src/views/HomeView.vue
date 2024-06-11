<template>
    <div class="home">
        <h1> {{ title }} </h1>
        <!-- Add button to navigate to the EventList -->
        <button class="button" @click="gotoEvents">View Events</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'Welcome to the EventList App!'
        }
    },
    methods: {
        gotoEvents() {
            this.$router.push('/events')
        }
    }
}
</script>