<template>
  <div class="posts-page">
    <PostList />
  </div>
</template>

<script>
  import PostList from '@/components/Posts/PostList'

  export default {
    components: {
      PostList
    },
    asyncData(context) {
      return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //   resolve({
        //     loadedPosts: [
        //       {
        //         id: '1',
        //         title: 'First Post',
        //         previewText: 'This is our first post!',
        //         thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
        //       },
        //       {
        //         id: '2',
        //         title: 'Second Post',
        //         previewText: 'This is our second post!',
        //         thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
        //       },
        //     ]
        //  });
        // }, 1000);
        reject(new Error())
      })
      .then(data => {
        return data
      })
      .catch(e => {
        context.error(e);
      });
    }
  }

</script>

<style scoped>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
