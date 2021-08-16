<template>
    <b-container fluid class="p-4"> 
        <b-navbar toggleable="md">
            <b-navbar-brand>MeHMApp</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/schedule" exact-active-class="active">
                             Schedule
                    </b-nav-item>
                    <b-nav-item to="/reports" active-class="active">
                        Assessment Form Reports
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </b-container>
</template>


<style scoped>

    .container {
        margin: 20px;
    }

    .active {
        background-color: #2CD681;
        border-radius: 10px;
    }


</style>