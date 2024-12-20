<template>
  <NoteForm @onSubmit="handlerSubmit" />
  <NoteList @onRemove="handleRemove" :items="notes" />
</template>

<script>
import NoteForm from '@/components/Notes/NoteForm.vue'
import NoteList from '@/components/Notes/NoteList.vue';
export default {
  components: {
    NoteForm,
    NoteList
  },
  data() {
    return {
      notes: ['task 1', 'task 2', 'task 3'],
    }
  },
  methods: {
    handlerSubmit(note) {
      this.notes.push(note)
    },
    handleRemove(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>