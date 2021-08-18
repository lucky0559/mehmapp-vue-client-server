<template>
    <b-container class="vh-100">
        <app-header></app-header>
        <h1>Schedule</h1>
        <app-calendar></app-calendar>
        
        
    </b-container>
</template>

<script>

import Header from '../components/Header.vue'
import Calendar from '../components/schedule/calendar.vue'

    export default {
        components: {
            appHeader: Header,
            appCalendar: Calendar
        },
        created() {
            if(localStorage.getItem('token') === null) {
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    
</style>