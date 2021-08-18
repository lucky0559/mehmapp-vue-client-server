<template>

    <div id="login">
        <b-row class="vh-100 row-reverse">

            <b-col id="sidePart" sm="12" lg="7" md="12">
                
            </b-col>

            <b-col  id="cont" lg="5" md="12" sm="12">
                <b-form id="form">
                <b-form-group>
                    <b-input-group class="mb-4">
                        <b-form-input v-model="email" type="email" placeholder="Email"  required @keyup.enter="login"></b-form-input>
                    </b-input-group>
                
                    <b-input-group class="mb-3">
                        <b-form-input v-model="password" type="password" placeholder="Password"  required @keyup.enter="login"></b-form-input>
                    </b-input-group>
                    <div style="margin-bottom: 25px;">
                        {{ error }}
                    </div>
                    
                </b-form-group>
                
                <b-container>
                    <b-row align-h="center">
                        <b-button style="width: 100px;" variant="primary" @click="login">Sign In</b-button>
                    </b-row>
                </b-container>
                

                </b-form>
            </b-col>
            
            
        </b-row>
        
    </div>
  
</template>

<script>

    import axios from '../api/api'

    export default {
        data() {
            return {
                email: '',
                password: '',
                error: ''
            }
        },
        methods: {
            async login() {
                try {
                    await axios.post('auth/signin', {
                        email: this.email,
                        password: this.password
                    })
                    .then(res => {
                        if(res.status === 201) {
                            console.log(res.data.token)
                            localStorage.setItem('token', res.data.token)
                            console.log("LoggedIn!!!!")
                            this.error = ''
                            this.$router.push({ path: '/schedule' })
                        }
                    })
                    
                }
                catch(err) {
                    this.error = err.response.data.error
                    console.log("Invalid email or password");
                    this.password = '';
                }
            }
        },
        created() {
            if(localStorage.getItem('token') != null) {
                this.$router.push('/schedule')
            }
        }
    }
</script>

<style scoped>

    .row-reverse {
        flex-direction: row-reverse;
    }

    #sidePart {
        background-color: #2CD681;
    }

    #cont {
        background-color: #F6EFE9;
        padding: 40px;
    }

    #form {
        top: 30%;
        position: relative;
    }

    .input {
        margin: 0;
        width: 70%;
    }

    .loginForm {
        background-color: aqua;
        height: 85px;
        width: 100%;
    }

    #rightSide {
        background-color:black;
        height: 585px;
        width: 60%;
    }
</style>