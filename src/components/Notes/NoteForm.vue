<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <input 
        type="text"
        required
        v-model="value"
        placeholder="Type ur note"
      />
      <TagsList @onItemClick="handlerTagClick" :items="tags" />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue'
export default {
  components: {
    TagsList
  },
  data() {
    return {
      value: '',
      tags: ['home', 'work', 'travel']
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.value)
      this.value = ''
    },
    handlerTagClick(tag) {
      console.log(tag);
      if(this.tags.includes(tag)) {
        this.tags = this.tags.filter(t => t !== tag)
      } else {
        this.tags.push(tag)
      }
    }
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  input {
    margin-bottom: 0;
  }
}
</style>