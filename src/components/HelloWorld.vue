<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title>Convex Counter</v-card-title>
          <v-card-text>
            <p>Count: {{ count }}</p>
            <v-btn @click="incrementCount" color="primary">Increment</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useConvexClient } from '../composables/useConvexClient';
import { api } from '../../convex/_generated/api';

const count = ref(0);
const { client } = useConvexClient();

onMounted(async () => {
  count.value = await client.query(api.counter.getCount);
});

const incrementCount = async () => {
  count.value = await client.mutation(api.counter.increment);
};
</script>

<!-- <script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script> -->

<!-- <template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template> -->

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
