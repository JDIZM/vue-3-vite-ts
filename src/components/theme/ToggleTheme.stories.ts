import ToggleTheme from './ToggleTheme.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Theme/ToggleTheme',
  component: ToggleTheme,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen'
  }
} as Meta<typeof ToggleTheme>

const Template: StoryFn<typeof ToggleTheme> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ToggleTheme },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args }
  },
  // Then, the spread values can be accessed directly in the template
  template: '<toggle-theme />'
})

export const Default = Template.bind({})
