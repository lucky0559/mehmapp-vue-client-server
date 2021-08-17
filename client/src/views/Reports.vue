<template>
    <b-container class="vh-100">
        <app-header></app-header>
        <h1>Reports</h1>
        <app-forms></app-forms>
    </b-container>
</template>

<script>

import Header from '../components/Header.vue'
import AssessmentForm from '../components/reports/AssessmentForm.vue'

export default {
    components: {
        appHeader: Header,
        appForms: AssessmentForm
    }
}
</script>