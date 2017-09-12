<template>
    <div id="note-editor">
        <textarea v-if="editNote"
            :value="activeNoteText"
            @input="editNote"
            class="form-control">
        </textarea>
    </div>
</template>

<script>
    export default {
        computed: {
            activeNoteText () {
                return this.$store.state.activeNote ? this.$store.state.activeNote.text : ''
            }
        },
        methods: {
            editNote(el) {
                this.$store.dispatch('editNote', el.target.value)
            }
        }
    }
</script>