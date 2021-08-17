<template>
    <b-container>
        <!-- <b-form-input
            placeholder="Search Form ID"
            style="width: 170px"
            type="number"
            v-model="id"
            @keyup.enter="search"
        ></b-form-input> -->
        <b-table
            :items="forms"
            :fields="fields"
            class="text-center"
        >

        </b-table>
        <div class="text-center" v-if="loading">
            <b-spinner variant="secondary" class="m-5"></b-spinner>
        </div>
         
    </b-container>
</template>

<script>

    import axios from '../../api/api'

    export default {
        data() {
            return {
                fields: [
                    { key: 'formId', label: 'Form ID' },
                    { key: 'userId', label: 'User ID' },
                    { key: 'fullname', label: 'Fullname' },
                    { key: 'studentNumber', label: 'Student Number' },
                    { key: 'phoneNumber', label: 'Contact Number' },
                    { key: 'userdescribe', label: 'Describe' },
                    { key: 'userPresentIssues', label: 'Present Issues' },
                    { key: 'userProblemIssue', label: 'Problem Issue' },
                    { key: 'userReceivedCounseling', label: 'Received Counseling' },
                    { key: 'userIfYes', label: 'If Yes' },
                    { key: 'userDuration', label: 'Duration' },
                    { key: 'userPreviousCounseling', label: 'Previous Counseling' },
                ],
                forms: [],
                loading: true,
                
            }
        },
        async beforeCreate() {
            const response = await axios.get('/form/allForms')
            this.forms = response.data
            this.loading = false
            
        },
        
    }
</script>

<style scoped>

</style>