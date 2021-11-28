<template>
  <div
    class="items-center justify-items-stretch text-center"
    style="width: 70vw"
  >
    <img src="..\..\static\logowhite.svg" class="mx-auto" />
    <div class="text-lg lg:text-3xl text-white font-bold">
      LIGHT UP YOUR READING
    </div>
    <div class="flex justify-around bg-white rounded-lg">
      <input
        type="text"
        v-model="query"
        v-on:keyup.enter="search"
        style="width: 95%"
        class="h-10"
      />

      <button v-on:click="search">
        <img
          src="..\..\static\searchdark.svg"
          class="object-contain w-5 float-right"
        />
      </button>
    </div>
    <div class="flex justify-around text-white invisible lg:visible">
      <div
        v-for="keyword in keywords.slice(num, num + 5)"
        v-bind:key="keyword.id"
      >
        <!--<nuxt-link
            :to="{ name: 'searchlist', params: { keyword: keyword } }"
            v-on:click="search(keyword)"
          >
            {{ keyword }}
          </nuxt-link>-->
        <button v-on:click="searchKeyword(keyword)">
          {{ keyword }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from '../components/Logo.vue'
// import VueSearchPanel from "../components/vue-search-panel.vue";
// import InstantSearch from '../components/vue-instant-search.vue'
// import InnerSearch from "../components/vue-innersearch.vue";
/* import vueResource from "vue-resource";

Vue.use(vueResource); */

// var num = new Array();

/* while (true) {
  if (num.length == 7) {
    break;
  }
  const data = Math.floor(Math.random() * 19);
  if (data in num) {
    continue;
  }
  num.push(data);
} */

export default {
  layout: 'main',
  components: {
    // Logo: Logo,
    // InstantSearch,
    // InnerSearch
    // VueSearchPanel: VueSearchPanel
  },
  data() {
    return {
      keywords: [
        'BookRecommend',
        'horror',
        'fantasy',
        'adventure',
        'thriller',
        'romance',
        'documentary',
        'action',
        'mystery',
        'blockbuster',
        'horror',
        'fantasy',
        'adventure',
        'thriller',
        'romance',
        'documentary',
        'action',
        'mystery',
        'blockbuster',
      ],
      num: Math.random() * 14,
      query: '',
    }
  },
  methods: {
    /* function format(): {
      var args = Array.prototype.slice.call (arguments, 1);
      return arguments[0].replace (/\{(\d+)\}/g, function(match, index){
        return args[index];
      });
    }, */
    search() {
      console.log(new Date())
      window.location.href = '/searchlist?query=' + this.query
    },
    /* async search() {
      this.searchResult = await this.$axios
        .$get("http://172.16.101.206:5000/search?user_input=" + this.query)
        .then(function(res) {
          return res;
        });
      console.log(this.searchResult);
      const translatePromise = async () => {
        this.searchResult = await this.searchResult;
        console.log(this.searchResult);
      };

      translatePromise();
      translatePromise();

      window.location.href =
        "/searchlist?result=" + this.searchResult.hits.hits;
    }, */
    /* async searchKeyword(keyword) {
      this.searchResult = await this.$axios.$get(
        "http://172.16.101.206:5000/search?user_input=" + this.query
      );
      this.searchResult = await this.$axios.$get(
        "http://172.16.101.206:5000/search?user_input=" + this.query
      );
      console.log(this.searchResult);
      window.location.href = "/searchlist?query=" + this.query;
    } */
    searchKeyword(keyword) {
      window.location.href = '/searchlist?query=' + keyword
    },
  },
}
</script>
