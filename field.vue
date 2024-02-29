<template>
    <component :is="getComponent(form)" :form="form" v-model="model" :label="label" @input="$emit('input', model)"/>
</template>

<script>
import formMixin from './mixin/form';

export default {
    name: "SymfonyField",
    mixins: [formMixin],
}
</script>
