<template>
    <div>
        <div>
            <slot></slot>    
        </div>
    </div>
</template>

<script>
    export default {
        // 数据 rules 
        // validate
        //
        provide(){
            return {
                form: this //传递当前form组件
            }
        },
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: Object
        },
        data() {
            return {
                // key: value
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>