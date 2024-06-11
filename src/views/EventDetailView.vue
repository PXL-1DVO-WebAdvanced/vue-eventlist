<template>
    <div class="container">
      <form @submit.prevent="saveEvent()">
          <div class="form-group">
            <label for="dateInput">Date</label>
            <input type="date" class="form-control" id="dateInput"   >
          </div>
          <div class="form-group mt-3">
            <label for="titleInput">title</label>
            <input type="text" class="form-control form-control-lg" id="titleInput" v-model="this.event.title">

          </div>
          <div class="form-group mt-3">
            <label for="descriptionInput">Description</label>
            <textarea class="form-control" id="descriptionInput" rows="3" ></textarea>
          </div>
          <div class="form-group mt-3">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
      </form>
    </div>
  </template>

    <script>
    import {useEventStore} from '@/stores/EventStore'

    export default {
        data() {
            return {
                store: useEventStore(),
            }
        },
        methods: {
            saveEvent() {
                this.store.updateEvent(this.event)
                this.$router.push({name: 'event-list'})
            }
      
        },
        computed: {
            event() {
                return this.store.getEvent(this.$route.params.id)
            }
        }
    }
    </script>