<template>
    <b-container>
        <b-row>
            <b-col xl="5" lg="5" md="*">
                <b-calendar  v-model="selected_date"  locale="en" class="mb-2"></b-calendar>

                <b-row>
                    <b-button style="width: 80px;" variant="primary" v-b-modal.add>Add</b-button>
                </b-row>
                
            </b-col>


        <b-col xl="7" lg="7" md="*">
                
            <div v-if="sched_day" class="m-3">
                <b-table
                    :items="sched_day"
                    :fields="fields"
                >
                    
                </b-table>

                <div class="text-center" v-if="loading">
                    <b-spinner variant="secondary" class="m-5"></b-spinner>
                </div>
                
            <!-- {{ sched_day }} -->
            </div>
        
        </b-col>
        </b-row>
        
         
        

        
         
        <b-modal 
            id="add" 
            title="Add"
            ok-title="Add"
            @ok ="confirm"
            >
            <b-form>
                <b-form-group 
                    id="group_uid" 
                    class="mb-3" 
                >
                    <b-form-input 
                        id="user_id"
                        type="number"
                        placeholder="User ID"
                        required
                        v-model="form.user_id"
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="group_date" class="mb-3">
                    <b-form-datepicker v-model="form.set_date"></b-form-datepicker>
                </b-form-group>
                <b-form-group id="group_time" label="Time" v-slot="{ ariaDescribedby }">
                    <b-form-radio class="mb-2" v-model="form.selected_time" :aria-describedby="ariaDescribedby" value="9:00AM - 12:00PM">9:00AM - 12:00PM</b-form-radio>
                    <b-form-radio class="mb-4" v-model="form.selected_time" :aria-describedby="ariaDescribedby" value="1:00PM - 4:00PM">1:00PM - 4:00PM</b-form-radio>
                </b-form-group>
                <b-form-group id="number" class="mb-3">
                    <b-form-input
                        type="number"
                        required
                        id="number"
                        placeholder="Phone Number"
                        v-model="form.contact_number"
                    ></b-form-input>
                </b-form-group>
                
            </b-form>

            <b-modal
                id="confirm"
                title="Confirm"
            >

            </b-modal>

        </b-modal>
      
    </b-container>
</template>

<script>

import axios from '../../api/api'

    export default {
        data: () => ({
            form: {
                user_id: '',
                set_date: '',
                selected_time: '',
                contact_number: '',
                name: ''
            },
            selected_date: '',
            sched_day: [],
            fields: [
                { key: 'appointment_id', label: 'Appointment ID' },
                { key: 'user_id', label: 'User ID' },
                { key: 'name', label: 'Name' },
                { key: 'date', label: 'Date' },
                { key: 'time', label: 'Time' },
                { key: 'contact_number', label: 'Contact Number' },
            ],
            loading: false
        }),
        methods: {
            confirm() {
                this.$bvModal.msgBoxConfirm(`Want to add schedule in this student? ${this.form.user_id} `, {
                    title: "Please Confirm",
                    centered: true
                })
                .then(value => {
                    if(value) {
                        console.log("Confirmed!")
                    }
                    else {
                        console.log("Cancelled!")
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            },
            async selectSched() {
                this.loading = true;
                this.sched_day = [];
                let convert =  this.selected_date.split("/").join("-");
                const day = await axios.get(`/schedule/getDate/${convert}`)
                this.loading = false;
                this.sched_day.push(day.data)
                
            }
        },
        watch: {
            selected_date() {
                this.selectSched();
            }
        }
        
    }
</script>

<style scoped>

    .container {
        background-color: #F3F2F0;
    }

</style>