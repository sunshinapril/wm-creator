<script setup lang="ts">
import useLanguage from "@/stores/modules/language";
import type {LANGUAGE} from '@/config'
defineProps<{
  msg: string;
}>();
import { computed, inject } from 'vue'
const reload: any = inject('reload')

const locale = computed(() => useLanguage().language)
const toggle = (lang: LANGUAGE) => {
  useLanguage().setLanguage(lang)
  reload()
}
</script>

<template>
  <div class="greetings">
    <div>{{locale}}</div>
    <div>{{$t('title')}}</div>
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
    </h3>
  </div>
  <div>
    <el-button type="primary" mb-2 @click="toggle('en')">Switch En</el-button>
    <el-button type="primary" mb-2 @click="toggle('zh')">Switch Zh</el-button>
    <br />

    <el-table mb-1 :data="[]" />
    <el-pagination :total="100" />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
