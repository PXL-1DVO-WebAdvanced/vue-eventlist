import { defineStore } from 'pinia';

export const useEventStore = defineStore('EventStore', {
    state: () => ({
        events:[],
    }),
    getters: {
        allEvents: (state) => {
            return state.events;
        },
        getEvent: (state) => {
            return (id) => state.events.find((event) => event.id === parseInt(id))
        },
        updateEvent(event) {
            // In real life you should update your database here
            console.log("update successful!");
            const index = state.events.findIndex(e => e.id === event.id);
            if (index !== -1) {
                state.events[index] = event;
            }
        },
        saveEvent(event) {
            // In real life you should update your database here
            console.log("save successful!");
            state.events.push(event);
        }
    },
    actions: {
        fetchEvents () {
            if (this.events.length > 0) {
                return;
            }
            this.events = [
              { id: 1, date: "2024-05-28", title: 'Bespreking examen Web Advanced', description: 'Overlopen van het examen', showAs: 'busy' },
              { id: 2, date: "2024-05-29", title: 'Herhalingsoefening maken', description: '', showAs: 'free' },
              { id: 3, date: "2024-05-30", title: 'Blackboard examen', description: 'Upload/download examen toevoegen aan cursus Web Advanced', showAs: 'free' },
              { id: 4, date: "2024-06-13", title: 'Examen', description: '3u tanden bijten', showAs: 'busy' },
              { id: 5, date: "2024-06-14", title: 'Verbeteren', description: 'Hopelijk weinig werk', showAs: 'free' },
              { id: 6, date: "2024-07-01", title: 'Vakantie!', description: 'Hopelijk met veel zon!', showAs: 'free' }
          ];
        },
    },
});
