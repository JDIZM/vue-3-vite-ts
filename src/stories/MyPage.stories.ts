import { within, userEvent } from '@storybook/testing-library'
import type { Meta, StoryFn } from '@storybook/vue3';
import MyPage from './MyPage.vue'

export default {
  title: 'Example/Page',
  component: MyPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen'
  }
} as Meta<typeof MyPage>;

const Template: StoryFn<typeof MyPage> = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyPage },

  // Here we define the `template`
  template: '<my-page />'
})

export const LoggedOut = Template.bind({})

// More on interaction testing: https://storybook.js.org/docs/vue/writing-tests/interaction-testing
export const LoggedIn = Template.bind({})
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const loginButton = await canvas.getByRole('button', { name: /Log in/i })
  await userEvent.click(loginButton)
}
