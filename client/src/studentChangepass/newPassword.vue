<template>
    <div class="text-center p-4 vh-100">
        <div v-if="!sended">
            <div>
                <b-img
                src="https://res.cloudinary.com/intro-pl/image/upload/v1629696116/mehmapp-vue/AppLogo720x720_rwxfk8.png"
                style="width: 100px;height:100px;"
                fluid
                ></b-img>   
            </div>
            
        </div>
        <div v-if="sended">
        <div>
            <b-img
            src="https://res.cloudinary.com/intro-pl/image/upload/v1629696116/mehmapp-vue/AppLogo720x720_rwxfk8.png"
            style="width: 100px;height:100px;"
            fluid
            ></b-img>   
        </div>
        
        <div class="d-flex justify-content-center">
        <b-form>
            <b-form-group
                id="new_password"
                class="mb-3 mt-3"
            >
            <label for="password">New Password</label>
                <b-form-input 
                    id="password"
                    required
                    v-model="password"
                    type="password"
                ></b-form-input>

            </b-form-group>
            <b-form-group
                id="confirm_password"
                class="mb-3 mt-3"
            >
            <label for="confirm">Confirm Password</label>
                <b-form-input 
                    id="confirmed_password"
                    required
                    v-model="confirm_password"
                    type="password"
                ></b-form-input>

            </b-form-group>
            <b-form-group
                id="token"
                class="mb-3 mt-3"
            >
            <label for="token">Confirmation Code</label>
                <b-form-input 
                    id="confirm_code"
                    required
                    v-model="confirmation_code"
                ></b-form-input>
                    
            </b-form-group>
            
        </b-form>
        </div>
        <p style="color:red">
            {{password != confirm_password ? "Password not match" : null}}
        </p>
        <p v-if="incorrect_code" style="color:red">
            Incorrect Code
        </p>
        <b-button
            @click="changePassword"
        >
            Change Password
        </b-button>
        </div>
    </div>
</template>

<script>

    import axios from "../api/api"

    export default {
        data: () => ({
            password: '',
            confirm_password: '',
            confirmation_code: '',
            incorrect_code: false,
            sended: false
        }),
        methods: {
            async changePassword() {

                this.incorrect_code = false

                if(this.password != this.confirm_password) {
                    return this.confirmation_code = ''
                }

                try {
                        await axios.put('/auth/changePassword', {
                        new_password: this.password,
                        password_token: this.confirm_password,
                    })
                }
                catch(err) {
                    this.incorrect_code = true
                }
                
            }
        }
    }
</script>

<stylescoped>

</stylescoped>