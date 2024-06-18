<script setup lang="ts">
import { ref, onMounted, reactive, watch } from 'vue';
import _ from 'lodash';

import { useTestStore } from '@/store/test';

interface TestObj {
  name: string;
  age: number;
}

const testStore = useTestStore();
const { setCountNumber } = testStore;

const testState = ref<string>('666');
const testObj = ref<number[]>([]);
const testObj2 = reactive<TestObj>({
  name: 'test',
  age: 18,
});

const handleClick = (value: string) => {
  testState.value = value;
  testObj2.name = 'test2';
};

watch(() => testObj2.name, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

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
    <div>{{ testObj2.name }}</div>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/testView.style.scss';
</style>
