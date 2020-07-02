<template>
    <div class="v-header">
        <div v-on:click="openMenu" class="header-menu">
            <div class="header-burger"></div>
        </div>
        <h3 class="header-logo">My-shop</h3>
    </div>
</template>

<script>

export default {
  name: 'v-header',

  methods: {
    openMenu: function() {
        this.$emit('openMenu', true);
    }
  }
}

</script>

<style>

    .header-menu {
        cursor: pointer;
        height: 25px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header-burger {
        width: 24px;
        height: 3px;
        background-color: #fff;
        position: relative;
    }

    .header-burger::after, .header-burger::before {
        width: 24px;
        height: 3px;

        content: '';
        left: 0;
        top: -6px;
        background-color: #fff;
        position: absolute;
    }

    .header-burger::before {
        top: 6px
    }

    .v-header {
        width: 100%;
        background-color: #FFD700;
        padding: 5px 10px;
        color: #fff;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
