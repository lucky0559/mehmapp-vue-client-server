<template>
    <b-container>
        <b-row>
            <b-col xl="5" lg="4" md="*">
                <b-calendar  v-model="selected_date"  locale="en" class="mb-2">

                </b-calendar>

                <b-row>
                    <b-button style="width: 80px;" variant="primary" v-b-modal.add>Add</b-button>
                </b-row>
                
            </b-col>


        <b-col xl="7" lg="8" md="*">
                
            <div v-if="sched_day" class="m-3">
                <b-table
                    :items="sched_day[0]"
                    :fields="fields"
                    class="text-center"
                >

                <template #cell(buttons)="row" v-if="selected_date"> 
                    <b-button class="m-2" variant="outline-primary" size="sm" @click="setter(row.item)" v-b-modal.edit>
                        Edit
                    </b-button>
                    <b-button style="margin:3" variant="outline-primary" size="sm" @click="del(row.item)">
                        Delete
                    </b-button>
                </template>
                    
                </b-table>
<!-- edit -->
                <b-modal
                    id="edit" 
                    title="Edit"
                    ok-title="Save"
                    @ok ="edit"
                >
                    <b-form>
                        <b-form-group 
                            id="group_uid" 
                            class="mb-3" 
                        >
                            <label for="user_id">User ID</label>
                            <b-form-input 
                                id="user_id"
                                type="number"
                                required
                                v-model="form.user_id"
                                :state="id_checker"
                                
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="group_date" class="mb-3">
                            <b-form-datepicker v-model="form.set_date" :state="date_checker"></b-form-datepicker>
                        </b-form-group>
                        <b-form-group id="group_time" label="Time" v-slot="{ ariaDescribedby }">
                            <b-form-radio class="mb-2" v-model="form.selected_time" :aria-describedby="ariaDescribedby" value="9:00AM - 12:00PM">9:00AM - 12:00PM</b-form-radio>
                            <b-form-radio class="mb-4" v-model="form.selected_time" :aria-describedby="ariaDescribedby" value="1:00PM - 4:00PM">1:00PM - 4:00PM</b-form-radio>
                        </b-form-group>
                        <b-form-group id="number" class="mb-3">
                            <label for="number">Contact Number</label>
                            <b-form-input
                                type="number"
                                required
                                id="number"
                                v-model="form.contact_number"
                                :state="contact_checker"
                            ></b-form-input>
                        </b-form-group>
                        
                    </b-form>
                </b-modal>

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
                        :state="id_checker"
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="group_date" class="mb-3">
                    <b-form-datepicker v-model="form.set_date" :state="date_checker"></b-form-datepicker>
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
                        :state="contact_checker"
                    ></b-form-input>
                </b-form-group>
                
            </b-form>
            

            
            

        </b-modal>

        <b-alert 
    v-model="empty"
    class="position-fixed fixed-top m-0 rounded-0"
    style="z-index: 2000;"
    variant="danger"
    dismissible
    >
    Empty Field/s
    </b-alert>
    <b-alert 
        v-model="invalid"
        class="position-fixed fixed-top m-0 rounded-0"
        style="z-index: 2000;"
        variant="danger"
        dismissible
    >
    Invalid Contact Number
    </b-alert>
    <b-alert 
        v-model="existing"
        class="position-fixed fixed-top m-0 rounded-0"
        style="z-index: 2000;"
        variant="warning"
        dismissible
    >
    Existing Schedule
    </b-alert>
    <b-alert 
        v-model="added"
        class="position-fixed fixed-top m-0 rounded-0"
        style="z-index: 2000;"
        variant="success"
        dismissible
    >
    Schedule Added!
    </b-alert>
    <b-alert 
        v-model="editted"
        class="position-fixed fixed-top m-0 rounded-0"
        style="z-index: 2000;"
        variant="success"
        dismissible
    >
    Editted Saved!
    </b-alert>
    <b-alert 
        v-model="deleted"
        class="position-fixed fixed-top m-0 rounded-0"
        style="z-index: 2000;"
        variant="warning"
        dismissible
    >
    Schedule Deleted!
    </b-alert>
      
    </b-container>
</template>

<script>

import axios from '../../api/api'

    export default {
        data: () => ({
            form: {
                appointment_id: '',
                user_id: '',
                set_date: '',
                selected_time: '',
                contact_number: '',
            },
            selected_date: '',
            sched_day: [],
            fields: [
                { key: 'appointment_id', label: 'Appointment ID' },
                { key: 'user_id', label: 'User ID' },
                { key: 'date', label: 'Date' },
                { key: 'time', label: 'Time' },
                { key: 'contact_number', label: 'Contact Number' },
                { key: 'buttons', label: '' },
            ],
            loading: false,
            empty: false,
            invalid: false,
            existing: false,
            added: false,
            editted: false,
            deleted: false
        }),
        methods: {
            confirm() {

                if(!this.form.user_id || !this.form.set_date || !this.form.selected_time || !this.form.contact_number) {
                    this.form.user_id = ''
                    this.form.set_date = ''
                    this.form.selected_time = ''
                    this.form.contact_number = ''
                    this.empty = true
                    return console.log('empty field')
                }

                if(this.form.contact_number.length < 11 || !this.form.contact_number.includes('09')) {
                    this.invalid = true
                    return console.log('Please provide valid contact number')
                }
                

                this.$bvModal.msgBoxConfirm(`Want to add schedule in this student with User ID of ${this.form.user_id}? `, {
                    title: "Please Confirm",
                    centered: true
                })
                .then(async value => {
                    if(value) {
                        try {
                            const response = await axios.post('/schedule/add', {
                                user_id: this.form.user_id,
                                date: this.form.set_date,
                                time: this.form.selected_time,
                                name: this.form.name,
                                contact_number: this.form.contact_number
                            })
                            this.added = true
                            this.form.appointment_id = ''
                            this.form.user_id = ''
                            this.form.set_date = ''
                            this.form.selected_time = ''
                            this.form.contact_number = ''
                            this.selectSched();
                            console.log(response)
                        }
                        catch(error) {
                            if(error.response) {
                                this.existing = true
                                return console.log(error.response.data)
                            }
                        }
                        
                    }
                    else {
                        console.log("Cancelled!")
                    }
                })
                .catch(err => {
                    console.log("Not Available", err);
                })
            },
            async selectSched() {
                this.loading = true;
                this.sched_day = [];
                let convert =  this.selected_date.split("/").join("-");
                const day = await axios.get(`/schedule/getDate/${convert}`)
                this.loading = false;
                this.sched_day.push(day.data)
                console.log(this.sched_day)
            },
            async edit() {
                await axios.put(`/schedule/edit/${this.form.appointment_id}`, {
                    user_id: this.form.user_id,
                    date: this.form.set_date,
                    time: this.form.selected_time,
                    contact_number: this.form.contact_number
                })
                this.selectSched();
                this.form.appointment_id = ''
                this.form.user_id = ''
                this.form.set_date = ''
                this.form.selected_time = ''
                this.form.contact_number = ''
                this.editted = true
                console.log("Edited" + this.form.appointment_id)

            },
            del(data) {
                this.$bvModal.msgBoxConfirm(`Want to delete this schedule with User ID of ${data.user_id}? `, {
                    title: "Please Confirm to delete",
                    centered: true
                })
                .then (async value => {
                    if(value) {
                        try {
                            await axios.delete(`/schedule/delete/${data.appointment_id}`)
                            this.selectSched();
                            this.deleted = true
                            console.log("Deleted" + data.appointment_id)
                        }
                        catch(error) {
                            console.log(error)
                        }
                        
                    }
                    else {
                        console.log("Delete Cancelled!")
                    }
                } )
                
            },
            setter(data) {
                this.form.appointment_id = data.appointment_id
                this.form.user_id = data.user_id
                this.form.set_date = data.date
                this.form.selected_time = data.time
                this.form.contact_number = data.contact_number
            }
        },
        watch: {
            selected_date() {
                this.selectSched();
            }
        },
        computed: {
            id_checker() {
                return !this.form.user_id.length > 0 ? false : true
            },
            date_checker() {
                return !this.form.set_date.length > 0 ? false : true
            },
            contact_checker() {
                return this.form.contact_number.length < 11 || this.form.contact_number.length > 11 || !this.form.contact_number.includes('09') ? false : true
            }
        }
        
    }
</script>

<style scoped>

    .container {
        background-color: #F3F2F0;
    }

</style>