<template>
  <NoteForm @onSubmit="handlerSubmit" />
</template>

<script>
import NoteForm from '@/components/Notes/NoteForm.vue'
export default {
  components: {
    NoteForm
  },
  methods: {
    handlerSubmit(value) {
      console.log(value);
    },
  }
}
</script>