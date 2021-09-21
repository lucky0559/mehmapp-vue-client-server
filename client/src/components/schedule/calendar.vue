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
                
            <div v-if="sched_day" >
                <b-table
                    :items="sched_day[0]"
                    :fields="fields"
                    class="text-center"
                >

                <template #cell(buttons)="row" v-if="selected_date"> 
                    <b-button class="m-1" variant="outline-primary" size="sm" @click="setter(row.item)" v-b-modal.edit>
                        Edit
                    </b-button>
                    <b-button class="m-1"  variant="outline-primary" size="sm" @click="del(row.item)">
                        Delete
                    </b-button>
                    <b-button class="m-1" variant="outline-primary" size="sm" @click="setter(row.item)" v-b-modal.set_status>
                        Modify Status
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
                                v-model="user_id"
                                :state="id_checker"
                                
                            ></b-form-input>
                        </b-form-group>
                        
                        <b-form-group id="number" class="mb-3">
                            <label for="number">Contact Number</label>
                            <b-form-input
                                type="number"
                                required
                                id="number"
                                v-model="contact_number"
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
        
         
        

        <!-- add -->
         
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
                        v-model="user_id"
                        :state="id_checker"
                    ></b-form-input>
                </b-form-group>
                <b-form-group id="group_date" class="mb-3">
                    <b-form-datepicker v-model="date" :state="date_checker"></b-form-datepicker>
                </b-form-group>
                <b-form-group id="group_time" label="Time" v-slot="{ ariaDescribedby }">
                    <b-form-radio class="mb-2" v-model="time" :aria-describedby="ariaDescribedby" value="9:00AM - 12:00PM">9:00AM - 12:00PM</b-form-radio>
                    <b-form-radio class="mb-4" v-model="time" :aria-describedby="ariaDescribedby" value="1:00PM - 4:00PM">1:00PM - 4:00PM</b-form-radio>
                </b-form-group>
                <b-form-group id="number" class="mb-3">
                    <b-form-input
                        type="number"
                        required
                        id="number"
                        placeholder="Phone Number"
                        v-model="contact_number"
                        :state="contact_checker"
                    ></b-form-input>
                </b-form-group>
                
            </b-form>
            

            
            

        </b-modal>


    <!-- set status -->
                <b-modal
                    id="set_status" 
                    title="Status"
                    ok-title="Save"
                    @ok ="setStatus"
                >
                    <b-form>
                        <b-form-group 
                            id="group_status" 
                            class="mb-3" 
                        >
                            <label for="status">Status</label>
                            <b-form-input 
                                id="status"
                                v-model="status"
                                :state="status_checker" 
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
            selected_date: '',
            sched_day: [],
            fields: [
                { key: 'appointment_id', label: 'Appointment ID' },
                { key: 'user_id', label: 'User ID' },
                { key: 'date', label: 'Date' },
                { key: 'time', label: 'Time' },
                { key: 'contact_number', label: 'Contact Number' },
                { key: 'status', label: 'Status' },
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

                if(!this.$store.state.form.user_id || !this.$store.state.form.set_date || !this.$store.state.form.selected_time || !this.$store.state.form.contact_number) {
                    this.$store.state.form.user_id = ''
                    this.$store.state.form.set_date = ''
                    this.$store.state.form.selected_time = ''
                    this.$store.state.form.contact_number = ''
                    this.empty = true
                    return console.log('empty field')
                }

                if(this.$store.state.form.contact_number.length < 11 || !this.$store.state.form.contact_number.includes('09')) {
                    this.invalid = true
                    return console.log('Please provide valid contact number')
                }
                

                this.$bvModal.msgBoxConfirm(`Want to add schedule in this student with User ID of ${this.$store.state.form.user_id}? `, {
                    title: "Please Confirm",
                    centered: true
                })
                .then(async value => {
                    if(value) {
                        try {
                            const response = await axios.post('/schedule/add', {
                                user_id: this.$store.state.form.user_id,
                                date: this.$store.state.form.set_date,
                                time: this.$store.state.form.selected_time,
                                contact_number: this.$store.state.form.contact_number
                            })
                            this.added = true
                            this.$store.state.form.appointment_id = ''
                            this.$store.state.form.user_id = ''
                            this.$store.state.form.set_date = ''
                            this.$store.state.form.selected_time = ''
                            this.$store.state.form.contact_number = ''
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
            },
            async edit() {

                try {
                    await axios.put(`/schedule/edit/${this.$store.state.form.appointment_id}`, {
                    user_id: this.$store.state.form.user_id,
                    contact_number: this.$store.state.form.contact_number,
                    })

                    
                    
                    this.selectSched();
                    console.log("Edited" + this.$store.state.form.appointment_id)
                    this.$store.state.form.appointment_id = ''
                    this.$store.state.form.user_id = ''
                    this.$store.state.form.set_date = ''
                    this.$store.state.form.selected_time = ''
                    this.$store.state.form.contact_number = ''
                    this.$store.state.form.status = ''
                    this.editted = true
                }
                catch(err) {

                    
                    
                    if(err.response && err.response.data) {
                        return this.existing = true
                    }
                }
                   
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
                this.$store.state.form.appointment_id = data.appointment_id
                this.$store.state.form.user_id = data.user_id
                this.$store.state.form.set_date = data.date
                this.$store.state.form.selected_time = data.time
                this.$store.state.form.contact_number = data.contact_number
                this.$store.state.form.status = data.status
            },
            async setStatus() {
                try {
                    await axios.put(`/schedule/editStatus/${this.$store.state.form.appointment_id}`, {
                    status: this.$store.state.form.status
                    })

                    
                    
                    this.selectSched();
                    console.log("Edited" + this.$store.state.form.appointment_id)
                    this.$store.state.form.appointment_id = ''
                    this.$store.state.form.user_id = ''
                    this.$store.state.form.set_date = ''
                    this.$store.state.form.selected_time = ''
                    this.$store.state.form.contact_number = ''
                    this.$store.state.form.status = ''
                    this.editted = true
                }
                catch(err) {
                    if(err.response && err.response.data) {
                        return this.existing = true
                    }
                }
            }
        },
        watch: {
            selected_date() {
                this.selectSched();
            }
        },
        computed: {
            id_checker() {
                return !this.$store.state.form.user_id.length > 0 ? false : true
            },
            date_checker() {
                return !this.$store.state.form.set_date.length > 0 ? false : true
            },
            contact_checker() {
                return this.$store.state.form.contact_number.length < 11 || this.$store.state.form.contact_number.length > 11 || !this.$store.state.form.contact_number.includes('09') ? false : true
            },
            status_checker() {
                return this.$store.state.form.status.length <= 0  ? false : true
            },
            user_id: {
                get() {
                    return this.$store.getters.user_id;
                },
                set(value) {
                    this.$store.dispatch('updateUserId', value)
                }
            },
            date: {
                get() {
                    return this.$store.getters.set_date
                },
                set(value) {
                    this.$store.dispatch('updateDate', value)
                }
            },
            time: {
                get() {
                    return this.$store.getters.selected_time
                },
                set(value) {
                    this.$store.dispatch('updateTime', value)
                }
            },
            contact_number: {
                get() {
                    return this.$store.getters.contact_number
                },
                set(value) {
                    this.$store.dispatch('updateContact', value)
                }
            },
            status: {
                get() {
                    return this.$store.getters.status
                },
                set(value) {
                    this.$store.dispatch('updateStatus', value)
                }
            }
        },
        created() {
            var today = new Date();
            var year = today.getFullYear();
            var month = String(today.getMonth() + 1).padStart(2, '0')
            var day = String(today.getDate()).padStart(2, '0')
            this.selected_date = year + '/' + month + '/' + day
            this.selectSched()
        }
        
    }
</script>

<style scoped>

    

</style>