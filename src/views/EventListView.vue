<template>
    <div class="eventlist">
        <h2>Upcoming Events</h2>
        <div class="eventlist__container">
            <!-- Add EventCardComponent here for each event -->
            <EventCardComponent v-for="event in store.events" :key="event.id" :event="event" />
        </div>
    </div>
</template>

<script>
import {useEventStore} from '@/stores/EventStore'
import EventCardComponent from '@/components/EventCardComponent.vue'

export default {
        data() {
            return {
                store: useEventStore(),
            }
        },
        mounted() {
            this.store.fetchEvents()
        },
        components: {
            EventCardComponent
        }
    
}

</script>