import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        form: {
            appointment_id: '',
            user_id: '',
            set_date: '',
            selected_time: '',
            contact_number: '',
            status: '',
        },
        print_info: [],
        all_forms: [],
        multiple_print: [],
        print_range: [],
    },
    getters: {
        appointment_id: state => {
            return state.form.appointment_id
        },
        user_id: state => {
            return state.form.user_id
        },
        set_date: state => {
            return state.form.set_date
        },
        selected_time: state => {
            return state.form.selected_time
        },
        contact_number: state => {
            return state.form.contact_number
        },
        status: state => {
            return state.form.status
        }
    },
    mutations: {
        update_user_id: (state, payload) => {
            state.form.user_id = payload
        },
        update_date: (state, payload) => {
            state.form.set_date = payload
        },
        update_time: (state, payload) => {
            state.form.selected_time = payload
        },
        update_contact: (state, payload) => {
            state.form.contact_number = payload
        },
        update_status: (state, payload) => {
            state.form.status = payload
        },
        print_info: (state, payload) => {
            state.print_info = []
            state.print_info.push({ formId: payload.formId, userId: payload.userId, fullname: payload.fullname, studentNumber: payload.studentNumber, phoneNumber: payload.phoneNumber })
        },
    },
    actions: {
        updateUserId({commit}, payload) {
            commit('update_user_id', payload)
        },
        updateDate({ commit }, payload) {
            commit('update_date', payload)
        },
        updateTime({ commit }, payload) {
            commit('update_time', payload)
        },
        updateContact({ commit }, payload) {
            commit('update_contact', payload)
        },
        updateStatus({ commit }, payload) {
            commit('update_status', payload)
        },
        printInfo({ commit }, payload) {
            commit('print_info', payload)
        },
    }
})