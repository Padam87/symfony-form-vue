<template>
    <div class="form-group">
        <SymfonyLabel :form="form"></SymfonyLabel>

        <table class="table table-collection">
            <thead>
            <tr>
                <th v-for="col in columns" v-if="columns">{{ prototype.children[col].vars.label|trans }}</th>
                <th v-if="!columns"></th>
                <th class="collection-control">
                    <button type="button" class="btn btn-sm btn-success" @click="add">
                        <i class="bi bi-plus"></i>
                    </button>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(row, key) in children">
                <td v-for="col in columns" v-if="columns">
                    <component :is="getComponent(row.children[col])" :form="row.children[col]" :value="model[key][col]" :label="false" @input="value => handleInput(key, value)" />
                </td>
                <td v-if="!columns">
                    <component :is="getComponent(row)" :form="row" :value="model[key]" :label="false" @input="value => handleInput(key, value)" />
                </td>
                <td class="collection-control">
                    <button type="button" class="btn btn-sm btn-danger" @click="remove(key)">
                        <i class="bi bi-dash"></i>
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import SymfonyForm from './form';
import formMixin from './mixin/form';

export default {
    name: "SymfonyCollection",
    components: {
        SymfonyForm,
    },
    mixins: [formMixin],
    data() {
        return {
            children: Array.isArray(this.form.children) ? Object.assign({}, this.form.children) : this.form.children,
            newCount: 0,
        }
    },
    computed: {
        prototype() {
            return this.form.vars.prototype;
        },
        columns() {
            if (!this.prototype.vars.compound) {
                return null;
            }

            return Object.keys(this.prototype.children);
        }
    },
    methods: {
        add() {
            let name = 'new_' + this.newCount++;
            let item = JSON.parse(
                JSON.stringify(this.prototype)
                    .replaceAll(/__name__label__/g, name)
                    .replaceAll(/__name__/g, name)
            );

            this.$set(this.children, name, item);

            this.handleInput(name, this.createModel(item));
        },
        remove(name) {
            this.$delete(this.children, name);

            this.$emit('input', this.model);
        },
    }
}
</script>
