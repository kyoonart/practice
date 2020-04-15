<template>
<div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="errorMessage">{{errorMessage}}</p>
</div>
</template>

<script>
import Schema from 'async-validator'
export default {
    name:"Item",
    inject: ['form'],
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: {
            type: String,
        },
    },
    data() {
        return {
            errorMessage: ''
        }
    },
    mounted() {
        this.$on('validate', this.validate)
    },
    methods: {
        validate() {
            const value = this.form.model[this.prop];
            const rules = this.form.rules[this.prop];
            const desc = {[this.prop]: rules };
            const schema = new Schema(desc);
            return schema.validate({[this.prop]: value }, errors => {
                if (errors) {
                    this.errorMessage = errors[0].message;
                } else {
                    this.errorMessage = ''
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>