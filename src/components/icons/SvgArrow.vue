<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        :style="style"
        :width="width"
        viewBox="0 0 492.004 492.004"
        style="enable-background:new 0 0 492.004 492.004;"
        xml:space="preserve"
    >
        <path
            :fill="color" d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136    c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002    v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864    c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872    l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"
        />
    </svg>
</template>

<script lang="ts">
import { defineComponent, computed, watchEffect } from 'vue'

export default defineComponent({
    name: 'SvgArrow',
    props: {
        width: {
            type: Number,
            default: 80
        },
        direction: {
            type: String,
            default: 'right',
            validation: (direction: string) => 
                ['right', 'up', 'down', 'left'].includes(direction)
        },
        color: {
            type: String,
            default: '#333',
        },
    },
    setup(props) {
        const degrees = computed(() => {
            switch(props.direction) {
                case 'down':
                    return '90'
                case 'left':
                    return '180'
                case 'up':
                    return '270'
                case 'right':
                    return '0'
            }
        })
        const style = computed(() => {
            return `transform: rotate(${degrees.value}deg)`
        })
        // Debugging porpouse
        // watchEffect(() => {
        //     console.log(props.direction)
        //     console.log(style.value)
        // })
        return {
            style,
        }
    },
})
</script>
