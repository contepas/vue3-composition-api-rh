<template>
    <div :style="style" :class="$style.vehicle">
        <div>{{}}</div>
        <div>{{}}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'

export default defineComponent({
    name: 'GameVehicle',
    props: {
        // elementType: {
        //     type: String,
        //     required: true,
        //     validation: (elementType: string) =>
        //         ['redCar', 'vehicle', 'obstacle'].includes(elementType),
        // },
        elementId: {
            type: String,
            required: true,
        },
        positionRaw: {
            type: Array as PropType<number[]>,
            required: true,
        },
    },
    setup(props) {
        if (!props.positionRaw?.length || props.positionRaw?.length < 1)
            throw `positionRaw can't be empty`
            
        const direction = computed(() => {
            const { positionRaw } = props
            console.log('POSITION')
            console.log(props.elementId)
            console.log(positionRaw)
            return (positionRaw[0] + 1) === positionRaw[1]
                ? 'orizzontal'
                : 'vertical'
        })
        const measures = computed(() => {
            const { positionRaw } = props
            const vertical = direction.value === 'vertical'
            return {
                width: vertical ? 100 : 100 * positionRaw.length,
                height: vertical ? 100 * positionRaw.length : 100,
            }
        })
        const position = computed(() => {
            const { positionRaw } = props
            const vertical = direction.value === 'vertical'
            return {
                top: Math.trunc(positionRaw[0] / 6) * 100, //vertical ? positionRaw.length * 100 : (positionRaw[0] % 6) * 100,
                left: (positionRaw[0] % 6) * 100,
            }
        })
        const style = computed(() => {
            const { width, height } = measures.value
            const { top, left } = position.value
            return `width: ${width}px; height: ${height}px; top: ${top}px; left: ${left}px`
        })
        return {
            direction,
            measures,
            position,
            style,
        }
    },
})
</script>

<style module>
.vehicle {
    width: 200px;
    height: 100px;
    border: 1px solid;
    top: 0px;
    position: absolute;
    left: 100px;
    @apply border-green-600;
}
</style>
