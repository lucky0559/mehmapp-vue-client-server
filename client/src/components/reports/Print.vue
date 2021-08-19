<template>
    <b-container>
        <div class="text-center pt-4">
            <p><strong>CAVITE STATE UNIVERSITY</strong></p>
            <p><strong>Office of Student Affairs and Services - Guidance Office</strong></p>
            <p><strong>COUNSELING SERVICES - MASTERLIST</strong></p>
        </div>
        <div>
            <p>School Year - <strong>SY {{ year }} </strong></p>
        </div>
        <br><br><br>
        <div>
            <b-table
                :items="this.$store.state.print_info"
                :fields="fields"
            >

            </b-table>
        </div>
        <br>
        <br>
        <br>
        <div id="print_button">
            <b-button  variant="primary" @click="print">
                Print
            </b-button>
        </div>
        
    </b-container>
</template>

<script>


    export default {
        data() {
            return {
                year: '',
                fields: [
                    { key: 'formId', label: 'Form ID' },
                    { key: 'userId', label: 'User ID' },
                    { key: 'fullname', label: 'Fullname' },
                    { key: 'studentNumber', label: 'Student Number' }
                ]
            }
        },
        beforeCreate() {
            if(localStorage.getItem('token') === null) {
                this.$router.push({ path: '/' })
            }
        },
        methods: {
            print() {
                window.print();
            }
        },
        created() {
            const date = new Date();
            const year = date.getFullYear();
            this.year = year;
        }
    }
</script>

<style scoped>
    @media print {
        #print_button {
            display: none !important;
        }
    }
</style>