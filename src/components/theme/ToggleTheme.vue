<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'
// @ts-expect-error
import Moon from '@carbon/icons-vue/es/moon/16'
// @ts-expect-error
import Sun from '@carbon/icons-vue/es/sun/16'

const theme = useTheme()
const icon = computed(() => (theme.mode.value === 'dark' ? Moon : Sun))
</script>

<template>
  <div class="theme-toggle">
    <button @click="theme.toggleTheme">
      <Component :is="icon" /><span>{{ theme.mode.value }}</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.theme-toggle {
  button {
    width: 90px;
  }
  svg {
    vertical-align: middle;
    margin-right: 0.25rem;
  }
  span {
    vertical-align: middle;
  }
}
</style>
