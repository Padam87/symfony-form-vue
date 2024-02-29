<template>
    <div class="form-group" v-show="!hidden">
        <SymfonyLabel :form="form" v-if="label && form.vars.label"></SymfonyLabel>
        <Selectpicker
                :required="form.vars.required"
                :id="form.vars.id"
                :name="form.vars.full_name"
                class="form-control"
                v-model="model"
                :options="form.vars.choices"
                @input="event => $emit('input', model)"
        ></Selectpicker>
    </div>
</template>

<script>
import formMixin from './mixin/form';

import Selectpicker from "../selectpicker";

export default {
    name: "SymfonyChoice",
    mixins: [formMixin],
    components: { Selectpicker },
    computed: {
        hidden() {
            return this.form.vars.block_prefixes.includes('hidden');
        },
    }
}
</script>
