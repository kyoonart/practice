<template>
<div>
    <ul class="puzzle-wrap">
        <li :class="{'puzzle': true, 'puzzle-empty': !puzzle}" v-for="(puzzle, index) in puzzles" :key="index" v-text="puzzle"></li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            puzzles: Array.from({ length: 15 }, (value, index) => index + 1)
        }
    },
    methods: {
        shuffle(arr) {
            let len = arr.length
            for (let i = 0; i < len - 1; i++) {
                let idx = Math.floor(Math.random() * (len - i))
                let temp = arr[idx]
                arr[idx] = arr[len - i - 1]
                arr[len - i - 1] = temp
            }

            return arr
        }
    },
}
</script>

<style lang="scss" scoped>

</style>