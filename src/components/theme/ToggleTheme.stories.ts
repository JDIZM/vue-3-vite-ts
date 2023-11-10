import type { Meta, StoryObj } from '@storybook/vue3'
import ToggleTheme from './ToggleTheme.vue'

const meta = {
  title: 'Theme/ToggleTheme',
  component: ToggleTheme,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'centered'
  },
  args: {
    // More on args: https://storybook.js.org/docs/vue/writing-stories/args
    // The args you need here will depend on your component
  }
} satisfies Meta<typeof ToggleTheme>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
