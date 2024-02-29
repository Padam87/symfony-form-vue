export default {
    components: {
        SymfonyLabel: () => import('../label'),
        SymfonyFieldset: () => import('../fieldset'),
        SymfonyDate: () => import('../date'),
        SymfonyInput: () => import('../input'),
        SymfonyChoice: () => import('../choice'),
        SymfonyCollection: () => import('../collection'),
    },
    props: {
        form: {},
        value: {
            default: null,
        },
        label: {
            default: true,
        }
    },
    data() {
        return {
            model: this.value === null ? this.createModel(this.form) : this.value,
        }
    },
    methods: {
        getComponent(form) {
            const prefixes = form.vars.block_prefixes;

            if (prefixes.includes('choice')) {
                return 'SymfonyChoice';
            }

            if (prefixes.includes('collection')) {
                return 'SymfonyCollection';
            }

            if (prefixes.includes('date')) {
                return 'SymfonyDate';
            }

            const inputs = ['hidden', 'text', 'email', 'datetime', 'checkbox', 'radio', 'integer', 'number'];

            if (inputs.some(input => prefixes.includes(input))) {
                return 'SymfonyInput';
            }

            return 'SymfonyFieldset';
        },
        handleInput(name, value) {
            this.$set(this.model, name, value);

            this.$emit('input', this.model);
        },
        createModel(form) {
            let vm = this;

            if (Object.keys(form.children).length > 0) {
                let model = {};

                Object.keys(form.children).forEach(name => {
                    model[name] = vm.createModel(form.children[name]);
                });

                return model;
            }

            return form.vars.value;
        }
    }
}
