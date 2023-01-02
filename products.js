import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';


createApp({
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2/',
      apiPath: 'ryantsai',
      products: [],
      tempProduct: {}
    }
  },
  methods: {
    check() {
      const url = `${this.apiUrl}api/user/check`
      axios.post(url)
        .then((res) => {
          console.log('身分確認');
        })
        .catch((err) => {
          console.log(err);
        })
    },
    getData() {
      const url = `${this.apiUrl}api/${this.apiPath}/admin/products`;
      axios.get(url)
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((err) => {
          console.log(err);
        })
    },
    openProduct(item) {
      this.tempProduct = item;
    }
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    axios.defaults.headers.common['Authorization'] = token;
    this.check();
    this.getData();
  }
}).mount('#app');