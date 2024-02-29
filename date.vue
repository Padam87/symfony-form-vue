<template>
    <div class="form-group" v-show="!hidden">
        <SymfonyLabel :form="form" v-if="label && form.vars.label"></SymfonyLabel>
        <input :type="this.form.vars.type" :id="form.vars.id" :name="form.vars.full_name" :required="form.vars.required" class="form-control" v-model="date" @input="$emit('input', model)">
    </div>
</template>

<script>
import formMixin from './mixin/form';
import moment from "moment";

export default {
    name: "SymfonyDate",
    mixins: [formMixin],
    computed: {
        hidden() {
            return this.form.vars.block_prefixes.includes('hidden');
        },
        date: {
            get() {
                if (this.model == null) {
                    return null;
                }

                return moment(this.model).format('YYYY-MM-DD');
            },
            set(value) {
                this.model = value;
            }
        },
    }
}
</script>
