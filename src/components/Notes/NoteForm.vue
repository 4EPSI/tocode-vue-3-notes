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
        :isActive="activeTags" 
        @onItemClick="toggleTag" 
      />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue';

export default {
  components: {
    TagsList
  },
  data() {
    return {
      value: '',
      tags: ['home', 'work', 'travel'],
      activeTags: []
    };
  },
  methods: {
    onSubmit() {
      const note = {
        title: this.value,
        tags: this.activeTags
      };
      this.$emit('onSubmit', note);
      this.value = '';
      this.activeTags = [];
    },
    toggleTag(tag) {
      if (this.activeTags.includes(tag)) {
        this.activeTags = this.activeTags.filter(t => t !== tag);
      } else {
        this.activeTags.push(tag);
      }
    }
  }
};
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
