<template>
    <b-container fluid class="p-4"> 
        <b-navbar toggleable="md">
            <b-navbar-brand>
                <b-img
                    src="https://res.cloudinary.com/intro-pl/image/upload/v1629637389/mehmapp-vue/AppLogo_yp5npy.png"
                    style="width: 70px;height:70px;"
                    fluid
                ></b-img>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/schedule" active-class="active">
                             Schedule
                    </b-nav-item>
                    <b-nav-item to="/reports" active-class="active">
                        Assessment Form Reports
                    </b-nav-item>
                    <b-nav-item @click="logout" exact-active-class="active">
                        Logout
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </b-container>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push('/')
        }
    }
}
</script>


<style scoped>

    .container {
        margin: 20px;
    }

    .active {
        background-color: #2CD681;
        border-radius: 10px;
    }


</style>