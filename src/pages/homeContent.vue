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
      notes: [
        {
          title: 'Learn Vue 3',
          tags: ['work']
        },
        {
          title: 'Finish course',
          tags: ['work', 'home']
        },
        {
          title: 'hello',
          tags: []
        }
      ],
    }
  },
  methods: {
    handlerSubmit(note) {
      // this.notes.push(note)
      this.notes.push({ title: note, tags: [] })
    },
    handleRemove(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>