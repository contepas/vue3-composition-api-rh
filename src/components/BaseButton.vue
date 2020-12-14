<template>
    <button :class="buttonStyle">
        <span><slot>Button</slot></span>
        <span v-if="isLoading" class="ml-15">
            <SvgLoading width="16px" height="16px" color="white" />
        </span>
    </button>
</template>

<script lang="ts">
import { defineComponent, computed, useCssModule } from 'vue'
import SvgLoading from './icons/SvgLoading.vue'

export default defineComponent({
    name: 'BaseButton',
    components: { SvgLoading },
    props: {
        isLoading: {
            type: Boolean,
            default: false,
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const buttonStyle = computed(() => {
            const { disabled, button } = useCssModule()
            const { isDisabled, isLoading } = props
            return [button, { [disabled]: isDisabled || isLoading }]
        })
        return {
            buttonStyle,
        }
    },
})
</script>

<style module>
.button {
    @apply bg-transparent text-green-600 border-green-700 font-extrabold w-48 py-3 px-4 border rounded  
    focus:outline-none focus:bg-green-600 focus:text-white
    hover:border-transparent hover:text-white  hover:bg-green-600;
}
.disabled {
    @apply text-gray-600;
}
</style>
