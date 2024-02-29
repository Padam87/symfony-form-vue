<template>
    <fieldset :class="['form-group', form.vars.row_attr.class]">
        <legend :class="['col-form-label', { required: form.vars.required }]" v-if="label && form.vars.label">{{ form.vars.label|trans }}</legend>
        <component v-for="(child, name) in form.children" :is="getComponent(child)" :form="child" :value="model[name]" @input="value => handleInput(name, value)" />
    </fieldset>
</template>

<script>
import formMixin from './mixin/form';

export default {
    name: "SymfonyFieldset",
    mixins: [formMixin],
}
</script>
