<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p @click="$store.commit('add')">counter :{{$store.state.counter}}</p>
    <p @click="$store.dispatch('add')">async counter :{{$store.state.counter}}</p>
    <p>dbcounter: {{$store.getters.dbcouter}}</p>
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label='用户名' prop="username">
        <KInput v-model="model.username" placeholder="请输入username"></KInput>  
        <p>{{model}}</p>
      </KFormItem>
      <KFormItem label='密码' prop="password">
        <KInput v-model="model.password" type="password" placeholder="请输入password"></KInput>  
        <p>{{model}}</p>
      </KFormItem>
      <KFormItem>
        <button @click="login">登录</button>
      </KFormItem>

    </KForm>
  </div>
</template>

<script>
import KInput from '@/components/kform/KInput.vue';
import KFormItem from '@/components/kform/KFormItem.vue';
import KForm from '@/components/kform/KForm.vue';
export default {
  name: 'HelloWorld',
  components: {
    KInput,KFormItem, KForm
  },
  data() {
    return {
      model: {
        username: 'ltt',
        password: ''
      },
      rules: {
        username: [{
          required: true,
          message: 'qing shu ru username'
        }],
        password: [{
          required: true,
          message: 'qing shu ru password'
        }]
      }

    }
  },
  props: {
    msg: String
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(isValid=>{
        if(isValid){
          console.log('requese login')
        }else {
          alert('jiaoyan shibai')
        }
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
