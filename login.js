import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      apiUrl: 'https://vue3-course-api.hexschool.io/v2/',
    }
  },
  methods: {
    login(event) {
      const url = `${this.apiUrl}admin/signin`;
      axios.post(url, this.user)
        .then((res) => {
          const obj = {
            token: res.data.token,
            expired: res.data.expired
          };
          document.cookie = `hexToken=${obj.token}; expires=${new Date(obj.expired)};`
          window.location = 'products.html';
        })
        .catch((err) => {
          console.log(err);
        })
      event.target.reset();
    },
  }
}).mount('#app');