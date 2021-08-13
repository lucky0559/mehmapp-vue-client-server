<template>

    <b-container fluid id="login">
        <b-row class="vh-100 row-reverse">

            <b-col id="sidePart" sm="2" lg="7">
                
            </b-col>

            <b-col  id="cont" lg="5" md="12" >
                <b-form id="form">
                <b-form-group>
                    <b-input-group class="mb-4">
                        <b-form-input type="email" placeholder="Email"  required></b-form-input>
                    </b-input-group>
                
                    <b-input-group class="mb-4">
                        <b-form-input type="password" placeholder="Password"  required></b-form-input>
                    </b-input-group>
                    
                </b-form-group>
                
                <b-container>
                    <b-row align-h="center">
                        <b-button style="width: 100px;" variant="primary" @click="login">Sign In</b-button>
                    </b-row>
                </b-container>
                

                </b-form>
            </b-col>
            
            
        </b-row>
        
    </b-container>
  
</template>

<script>

    import axios from '../api/api'

    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async login() {
                try {
                    await axios.post('authRoutes/signin', {
                        email: this.email,
                        password: this.password
                    })
                    console.log("LoggedIn!!!!")
                    this.$router.push({ path: '/schedule' })
                }
                catch(err) {
                    console.log("Invalid email or password");
                    this.password = '';
                }
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