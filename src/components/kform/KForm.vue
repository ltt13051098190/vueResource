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
        methods: {
            validate(cb) {
                const tasks = this.$children.filter(item=>item.prop).map(item=>item.validate())
                Promise.all(tasks).then(()=>cb(true))
                .catch(()=>cb(false))
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>