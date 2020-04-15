<template>
<div>
    <k-form :model="model" :rules="rules" ref="loginForm">
        <k-form-item label="请输入用户名" prop='username'>
            <k-input type="username" v-model="model.username" autocomplete='off'></k-input>
        </k-form-item>
        <k-form-item label="请输入密码" prop='password'>
            <k-input type="password" v-model="model.password" autocomplete='off'></k-input>
        </k-form-item>
        <k-form-item>
            <button @click="onSubmit('loginForm')">提交</button>
        </k-form-item>
    </k-form>
</div>
</template>
<script>
import KForm from './Form'
import kFormItem from './FormItem'
import KInput from './Input'
export default {
    components: {
        KForm,
        kFormItem,
        KInput,
    },
    data() {
        return {
            model: { username: 'tom', password: "" },
            rules: {
                username: [{ required: true, message: '请输入用户名' }],
                password: [{ required: true, message: '请输入密码' }]
            }

        }
    },
    methods: {
        onSubmit(form) {
            this.$refs[form].validate(valid => {
                if (valid) {
                    alert('请求登录')
                } else {
                    alert('校验失败')
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>

</style>