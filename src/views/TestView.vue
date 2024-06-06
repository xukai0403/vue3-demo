<script setup lang="ts">
import { ref, onMounted } from 'vue';
import _ from 'lodash';

import { useTestStore } from '@/store/test';

const testStore = useTestStore();
const { setCountNumber } = testStore;

const testState = ref<string>('666');
const testObj = ref<number[]>([]);

const handleClick = (value: string) => {
  testState.value = value;
};

onMounted(() => {
  console.log(_.isEmpty(testObj.value));
});
</script>

<template>
  <div class="content">
    <div class="count-number">{{ testStore.count }}</div>
    <div>{{ testState }}</div>
    <button @click="setCountNumber">set count number</button>
    <button @click="handleClick('999')">set test stater</button>
    <a-button type="primary">Primary Button</a-button>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/testView.style.scss';
</style>
