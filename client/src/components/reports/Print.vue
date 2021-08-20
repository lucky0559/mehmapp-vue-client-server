<template>
    <b-container class="vh-100">
        <div class="text-center pt-4">
            <b-col>
                
                <b-row>
                    <img src="../../assets/cvsu_logo.png" style="width: 100px;height: 60px; position: relative; left: 50px; top: 75px">
                </b-row>
                    <b-row>
                        <p><strong>CAVITE STATE UNIVERSITY</strong></p>
                    <p><strong>Office of Student Affairs and Services - Guidance Office</strong></p>
                    <p><strong>COUNSELING SERVICES - MASTERLIST</strong></p>
                    </b-row>
                
                    
                
                
            </b-col>
            
        </div>
        <div>
            <p>School Year - <strong>SY {{ year }} </strong></p>
        </div>
        <br><br><br>
        <div>
            <b-table
                :items="this.$store.state.multiple_print"
                :fields="fields"
            >

            </b-table>
        </div>
        <br>
        <div id="print_button">
            <b-button  variant="primary" @click="print" class="mb-4">
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
                    { key: 'appointment_id', label: 'Appointment ID' },
                    { key: 'user_id', label: 'User ID' },
                    { key: 'contact_number', label: 'Contact Number' },
                    { key: 'date', label: 'Date' }
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