<template>
    <div id="users-list">
        <span>{{users}}</span>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Home",
        computed:mapGetters([
            'title',
            'users'
        ])
    }
</script>