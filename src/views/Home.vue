<template>
  <main class="relative min-h-screen w-full backgroundSVC draggable">
    <div class="p-6 " x-data="app">
      <header class="flex w-full justify-between">
        <svg class="h-7 w-7 cursor-pointer text-gray-400 hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
        </svg>
        <button type="button"
          class="rounded-2xl border-b-2 border-b-gray-300 bg-white py-3 px-4 font-bold text-pink-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
          @click="logout()">ออกจากระบบ</button>
      </header>
      <section
        class="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center p-10 bg-white rounded-lg shadow-lg">
        <div>
          Home
        </div>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
export default {
  created: function () {
  },
  methods: {
    ...mapActions('general',['setLogout']),
    async logout(){
      const rep = await this.setLogout()
      if (rep) (this as any).$router.push({ path: '/login' }) 
    }
  }
}
</script>