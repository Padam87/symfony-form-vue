<template>
    <div class="form-group" v-show="!hidden">
        <SymfonyLabel :form="form" v-if="label && form.vars.label"></SymfonyLabel>
        <input :type="type" :id="form.vars.id" :name="form.vars.full_name" :required="form.vars.required" class="form-control" v-model="model" @input="$emit('input', model)">
    </div>
</template>

<script>
import formMixin from './mixin/form';

export default {
    name: "SymfonyInput",
    mixins: [formMixin],
    computed: {
        hidden() {
            return this.form.vars.block_prefixes.includes('hidden');
        },
        type() {
            if (this.hidden) {
                return 'hidden';
            }

            return this.form.vars.type;
        },
    },
}
</script>
