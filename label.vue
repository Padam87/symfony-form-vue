<template>
    <label :for="form.vars.full_name" :class="{ required: form.vars.required }">
        {{ form.vars.label|trans }}

        <span class="invalid-feedback d-block" v-if="form.vars.errors.errors.length > 0">
            <span class="d-block" v-for="error in form.vars.errors.errors">
                <span class="form-error-icon badge badge-danger text-uppercase">{{ 'Error'|trans({}, 'validators') }}</span>
                <span class="form-error-message">{{ error }}</span>
            </span>
        </span>
    </label>
</template>

<script>
export default {
    name: "SymfonyLabel",
    props: {
        form: {}
    },
}
</script>
