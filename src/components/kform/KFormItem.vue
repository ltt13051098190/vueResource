<template>
    <div>
        <!-- 显示lable 表单元素 校验 校验提示信息 -->
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <h3>{{form.rules[prop]}}</h3>
        <p v-if="error" class="error">{{error}}</p> 
    </div>
</template>

<script>
   import Schema from 'async-validator'; 
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
        methods: {
            validate() {
                // 当前表单项的校验
                console.log('do validate')
                const rules = this.form.rules[this.prop];
                const value = this.form.model[this.prop];
                const schema = new Schema({[this.prop]:rules})
                // 这里应该返回promise，然后有个全局控制validate
                return schema.validate({[this.prop]:value}, errors=>{
                    if(errors){
                        this.error = errors[0].message
                    } else {
                        this.error = ''
                    }
                })
            }
        },
        mounted(){
            this.$on('validate',()=>{
                this.validate()

            })
        }
    }
</script>

<style scoped>
    .error{
        color: red;
    }
</style>