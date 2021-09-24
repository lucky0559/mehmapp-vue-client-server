<template>
    <b-container class="pb-3">
        <div>
            
            <b-col cols="2">
                <app-date-picker
                    v-model="range"
                    range
                    valueType="format"
                > </app-date-picker>

                <div class="mt-3 mb-3 d-grid justify-content-end">
                    <label>User ID</label>
                    <b-form-input
                        v-model="filter"
                        placeholder="Search User ID"
                    >
                    </b-form-input>
                </div>
                

            </b-col>
            
            <b-col>
                <b-button 
                    variant="primary" 
                    class="mt-2 mb-2" 
                    @click="ranger"
                >Print</b-button>
            </b-col>
        </div>
        
        <b-table
            :items="filteredReports"
            :fields="fields"
            class="text-center mt-3"
        >
            <!-- <template #cell(buttons)="row" v-if="forms"> 
                    <b-button class="m-2" variant="outline-primary" size="sm" @click="setter(row.item)">
                        Print
                    </b-button>
            </template> -->
        </b-table>
        <div class="text-center" v-if="loading">
            <b-spinner variant="secondary" class="m-5"></b-spinner>
        </div>

         
    </b-container>
</template>

<script>

    import axios from '../../api/api'
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    import moment from 'moment'

    export default {
        data() {
            return {
                fields: [
                    { key: 'formId', label: 'Form ID' },
                    { key: 'userId', label: 'User ID' },
                    { key: 'studentNumber', label: 'Student Number' },
                    { key: 'phoneNumber', label: 'Contact Number' },
                    { key: 'userdescribe', label: 'Describe' },
                    { key: 'userPresentIssues', label: 'Present Issues' },
                    { key: 'userProblemIssue', label: 'Problem Issue' },
                    { key: 'userReceivedCounseling', label: 'Received Counseling' },
                    { key: 'userIfYes', label: 'If Yes' },
                    { key: 'userDuration', label: 'Duration' },
                    { key: 'userPreviousCounseling', label: 'Previous Counseling' },
                    // { key: 'buttons', label: '' },
                ],
                forms: [],
                loading: true,
                range: '',
                start: '',
                end: '',
                allRange: [],
                filter: '',
            }
        },
        async beforeCreate() {
            const response = await axios.get('/form/allForms')
            this.$store.state.all_forms = response.data
            this.loading = false
            
        },
        methods: {
            setter(data) {
                this.$store.dispatch('printInfo', data)
                this.$router.push({path: '/print'})
            },
            async ranger() {
                if(this.range.length > 0) {


                    this.$store.state.multiple_print = []
                    var date = await axios.get(`/schedule/getDate/${this.range[0]}`)
                    if(!date.data[0] == "") {
                            if(date.data.length > 0) {
                            for(let b=0; b < date.data.length; b++) {
                                this.$store.state.multiple_print.push(date.data[b])
                            }
                        }
                    }
                    
                    var initial = this.range[0]
                    var start = moment(this.range[0], "YYYY-MM-DD")
                    var end = moment(this.range[1], "YYYY-MM-DD")
                    var days_diff = moment.duration(end.diff(start)).asDays();
                    console.log(this.allRange)

                    for(let i = 0; i < days_diff; i++) {
                        var split = initial.split('-')
                        let new_date = new Date(parseInt(split[0]), parseInt(split[1]) - 1, parseInt(split[2]) + 1)
                        initial = this.formatDate(new_date)
                        const response = await axios.get(`/schedule/getDate/${initial}`)
                        if(!response.data[0] == "") {
                            
                                
                            
                            if(response.data.length > 1) {
                                for(let a = 0; a < response.data.length; a++) {
                                    this.$store.state.multiple_print.push(response.data[a])
                                }
                            }
                            else {
                                this.$store.state.multiple_print.push(response.data[0])
                            }
                           
                            
                        }
                    }

                    console.log(this.$store.state.multiple_print)

                    this.$store.state.print_range = this.range

                    this.$router.push({path: '/print'})

                }
                else {
                    console.log('empty')
                }
            },
            formatDate(date) {
                var m = moment(date)
                return m.format('YYYY-MM-DD')
            }
        },
        components: { 
            appDatePicker: DatePicker 
        },
        computed: {
            filteredReports() {
                let filt_report = this.$store.state.all_forms

                if(this.filter != '' && this.filter) {
                    filt_report = filt_report.filter((report) => {
                        return report.userId.includes(this.filter)
                    })
                }
                return filt_report;
            }
        }
    }
</script>

<style scoped>

</style>