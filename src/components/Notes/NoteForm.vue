<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <input 
        type="text"
        required
        v-model="value"
        placeholder="Type your note"
      />
      <TagsList 
        :items="tags" 
        :isActive="activeTag" 
        @onItemClick="setActiveTag" 
      />
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
      tags: ['home', 'work', 'travel'],
      activeTag: null
    }
  },
  methods: {
    onSubmit() {
      const note = {
        title: this.value,
        tags: this.activeTag ? [this.activeTag] : []
      };
      this.$emit('onSubmit', note);
      this.value = '';
      this.activeTag = null;
    },
    setActiveTag(tag) {
      this.activeTag = this.activeTag === tag ? null : tag;
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
