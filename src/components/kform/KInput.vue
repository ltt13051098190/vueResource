<template>
    <div>
        <input :type="type" :value="value" @input="onInput" v-bind="$attrs"> 
    </div>
</template>

<script>
    export default {
        // 取消默认继承  vue默认会把继承下来的属性默认展开在根目录上 所以可以使用inheritAttrs ：false
        inheritAttrs: false,
        props: {
            value:{
                type: String,
                default: 'text'
            },
            type: {
                type: String,
                default: 'text'
            },
        },
        methods: {
            onInput(e) {
                // 事件派发
                this.$emit('input', e.target.value)
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>