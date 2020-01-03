import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost;
      },
      setToken(state, token) {
        state.token = token;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get(process.env.FIREBASE_ENV)
          .then(res => {
            const postsArray = []
            for  (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(e => context.error(e));
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }
        return axios.post(process.env.FIREBASE_ENV + '?auth=' + vuexContext.state.token, createdPost)
          .then(result => {
            vuexContext.commit('addPost', {...createdPost, id: result.data.name})
          })
          .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return axios.put(`${process.env.FIREBASE_URL}/posts/` + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
          .then(res => {
            vuexContext.commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts)
      },
      authenticateUser(vuexContext, authData) {
        let authUrl =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          process.env.FB_API_KEY;
        if (!authData.isLogin) {
          authUrl =
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
            process.env.FB_API_KEY;
        }
        return this.$axios
          .$post(authUrl,
            {
              email: authData.email,
              password: authData.password,
              returnSecureToken: true
            })
            .then(result => {
              vuexContext.commit('setToken', result.idToken);
        })
          .catch(e => console.log(e));
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  });
};

export default createStore
