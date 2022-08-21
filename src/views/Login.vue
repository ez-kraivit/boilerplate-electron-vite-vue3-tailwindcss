<template>
  <main class="relative min-h-screen w-full backgroundSVC draggable">
    <div class="p-6" x-data="app">
      <header class="flex w-full justify-between">
        <svg class="h-7 w-7 cursor-pointer text-gray-400 hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
        </svg>
        <button type="button"
          class="rounded-2xl border-b-2 border-b-gray-300 bg-white py-3 px-4 font-bold text-pink-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
          @click="redirect('/register')">สมัครสมาชิก</button>
      </header>
      <section
        class="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center p-10 bg-white rounded-lg shadow-lg">
        <div>
          <div class="space-y-4">
            <header class="mb-3 text-2xl font-bold text-pink-600">ยินดีต้อนรับ !</header>
            <div class="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-pink-400">
              <input v-model="username" name="username" type="text" placeholder="ไอดีผู้ใช้" autoComplete="off"
                @keydown.enter="login(username, password)"
                class="my-3 w-full border-none bg-transparent outline-none focus:outline-none" />
            </div>
            <div
              class="flex w-full items-center space-x-2 rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200 focus-within:ring-pink-400">
              <input v-model="password" name="password" type="password" placeholder="รหัสผ่าน" autoComplete="off"
                @keydown.enter="login(username, password)" class="my-3 w-full border-none bg-transparent outline-none" />
              <a href="#" class="font-medium text-gray-400 hover:text-gray-500">ลืม?</a>
            </div>
            <button
              class="w-full rounded-2xl border-b-4 border-b-pink-600 bg-pink-500 py-3 font-bold text-white hover:bg-pink-400 active:translate-y-[0.125rem] active:border-b-pink-400"
              @click="login(username, password)">
              ล็อคอิน
            </button>
          </div>
        </div>
        <footer>
          <div class="mt-8 text-sm text-gray-400">
            <a href="#" class="font-medium text-gray-500">ข้อกำหนด</a> และ
            <a href="#" class="font-medium text-gray-500">นโยบายความเป็นส่วนตัว</a>.
          </div>
        </footer>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      username: '' as string,
      password: '' as string,
    }
  },
  created() {
    // console.log(router.)
    // const routes = this.$route
    // console.log(routes)
  },
  methods: {
    ...mapActions('general',['setLogin']),
    async login(username: string, password: string) {
      const rep = await this.setLogin(username,password)
      rep ? (this as any).$router.push({ path: '/' }) : alert("So Sad")
    },
    redirect(path: string) {
      (this as any).$router.push({ path })
    }
  }
}
</script>