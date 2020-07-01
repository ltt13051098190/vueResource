<template>
    <div>
        <!-- 显示lable 表单元素 校验 校验提示信息 -->
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <h3>{{form.model[prop]}}</h3>
        <p v-if="error">{{error}}</p> 
    </div>
</template>

<script>
    export default {
        inject:['form'],
        props: {
            label: {
                type: String,
                default: ''
            },
            prop:{
                type: String,
                default: ''
            }
        },
        data() {
            return {
                error: ''
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>