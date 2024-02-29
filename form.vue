<template>
    <form :method="form.vars.method" :action="form.vars.action" :id="form.vars.id" :name="form.vars.full_name" @submit="event => $emit('submit', event)">
        <component v-for="(child, name) in form.children" :is="getComponent(child)" :form="child" :value="model[name]" @input="value => handleInput(name, value)" />
    </form>
</template>

<script>
import formMixin from './mixin/form';

export default {
    name: "SymfonyForm",
    mixins: [formMixin],
}
</script>
