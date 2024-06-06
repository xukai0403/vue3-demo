<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { useTestStore } from '@/store/test';

const testStore = useTestStore();
const { count, setCountNumber } = testStore;

onMounted(() => {
  console.log('test')
})
</script>

<template>
  <div>123</div>
  <div>{{ testStore.count }}</div>
  <button @click="setCountNumber">
    set count number
  </button>
</template>
