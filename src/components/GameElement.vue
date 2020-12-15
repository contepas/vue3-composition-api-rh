<template>
    <div
        :style="elementStyle"
        :class="$style.vehicle"
        ref="gameElement"
        @click="move($event)"
        @mousemove="calculateDirection($event)"
        @mouseleave="calculateDirection()"
    >
        <SvgArrow 
            v-if="direction" 
            :width="38" 
            :direction="direction"
            color="white"
        />
    </div>
</template>

<script lang="ts">
import SvgArrow from './icons/SvgArrow.vue'
import { defineComponent, computed, PropType, ref, Ref, watch } from 'vue'

export default defineComponent({
    name: 'GameElement',
    components: { SvgArrow },
    props: {
        elementId: {
            type: String,
            default: null,
        },
        positionRaw: {
            type: Array as PropType<number[]>,
            required: true,
        },
    },
    setup(props, { emit }) {
        if (!props.positionRaw?.length || props.positionRaw?.length < 1)
            throw `positionRaw can't be empty`

        const orientation = computed(() => {
            const { positionRaw } = props
            return positionRaw[0] + 1 === positionRaw[1]
                ? 'orizzontal'
                : 'vertical'
        })
        const measures = computed(() => {
            const { positionRaw } = props
            const vertical = orientation.value === 'vertical'
            return {
                width: vertical ? 100 : 100 * positionRaw.length,
                height: vertical ? 100 * positionRaw.length : 100,
            }
        })
        const position = computed(() => {
            const { positionRaw } = props
            const vertical = orientation.value === 'vertical'
            return {
                top: Math.trunc(positionRaw[0] / 6) * 100,
                left: (positionRaw[0] % 6) * 100,
            }
        })

        const styleBase = computed(() => {
            const { width, height } = measures.value
            const { top, left } = position.value
            return `width: ${width}px; height: ${height}px; top: ${top}px; left: ${left}px;`
        })

        const styleObstacle = computed(() => {
            const { elementId } = props
            return !elementId ? `border-radius: 3px; background-color: #333;` : ''
        })

        const styleRedCar = computed(() => {
            const { elementId } = props
            return elementId === 'A' ? `background-color: red; border-radius: 25px;` : ''
        })

        const elementStyle = computed(() => styleBase.value + styleObstacle.value + styleRedCar.value)

        const gameElement: Ref<HTMLElement | null> = ref(null)

        const direction: Ref<'up' | 'down' | 'left' | 'right' | null> = ref(null)
        const calculateDirection = (event: MouseEvent) => {
            direction.value = null
            if (!event || styleObstacle.value) {
                return
            }
            const element = gameElement.value?.getBoundingClientRect()
            if (orientation.value === 'vertical') {
                const y = element ? event.clientY - element.top : null
                
                direction.value = y && y < measures.value.height / 2 ? 'up' : 'down'
            } else {
                const x = element ? event.clientX - element.left : null
                direction.value = x && x < measures.value.width / 2 ? 'left' : 'right'
            }
            
        }
        const move = (event: MouseEvent) => {
            calculateDirection(event)
            emit('move', direction.value)
        }

        watch(measures, () => {
            direction.value = null
        })

        return {
            measures,
            position,
            elementStyle,
            move,
            gameElement,
            direction,
            calculateDirection,
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
    display: flex;
    justify-content: center;
    border-radius: 50px;
    background-color: green;
    cursor: pointer;
    @apply border-green-600;
}
</style>
