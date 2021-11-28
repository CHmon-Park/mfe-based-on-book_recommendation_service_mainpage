<template>
  <div>
    <header
      class="flex border-gray-500 p-3 justify-between align-middle"
      style="height: 8vh"
    >
      <div id="logo">logo</div>
      <div id="login">login</div>
    </header>
    <div
      class="w-screen bg-cover bg-center flex justify-center items-center"
      style="background-image: url(main.png); height: 92vh"
    >
      <div id="searchbar" style="align-self: center"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { registerMicroApps, start } from 'qiankun'
export default {
  data() {
    return {
      value: '',
    }
  },
  computed: {
    ...mapState(['apps', 'sdk']),
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      // 모든 하위 응용 프로그램 등록
      await registerMicroApps(this.apps)

      // 시작
      await start()
    },

    handleChange() {
      this.sdk.globalState.setGlobalState({
        name: this.value,
      })
    },
    printSelectStr() {},
  },
}
</script>

<style>
</style>
