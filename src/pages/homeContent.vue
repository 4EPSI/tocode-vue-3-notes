<template>
  <NoteForm @onSubmit="handlerSubmit" />
  <NoteList @onRemove="handleRemove" :items="notes" />
</template>

<script>
import NoteForm from '@/components/Notes/NoteForm.vue'
import NoteList from '@/components/Notes/NoteList.vue';
import { itemNotes } from '@/seeders/notes.js'
export default {
  components: {
    NoteForm,
    NoteList
  },
  data() {
    return {
      notes: itemNotes
    }
  },
  mounted() {
    this.getNotes()
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    },
    handlerSubmit(note) {
      // this.notes.push(note)
      // const note = {
      //   title: title,
      //   tags: []
      // }
      this.notes.push(note)
    },
    handleRemove(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>