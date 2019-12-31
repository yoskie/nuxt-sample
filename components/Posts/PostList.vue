<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
      title="Hello there!"
      previewText="This is my first post"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
      title="Hello there!"
      previewText="This is my first post2"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
      title="Hello there!"
      previewText="This is my first post3"
    />
  </section>
</template>

<script>
  import PostPreview from '@/components/Posts/PostPreview'

  export default {
    components: {
      PostPreview: PostPreview
    },
    props: {
      isAdmin: {
        type: Boolean,
        default: false
      }
    }
  }

</script>

<style scoped>
  .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
