<template>
    <div class="home">
        <h1>Rush hour puzzle</h1>
        <BaseButton @click="$router.push({ name: 'Play' })">Play</BaseButton>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from '../components/BaseButton.vue'

export default defineComponent({
    name: 'Home',
    components: {
        BaseButton,
    },
})
</script>

<style lang="scss" module>
h1 {
    font-weight: bold;
    font-size: 101px;
    margin: 100px auto;
}
</style>