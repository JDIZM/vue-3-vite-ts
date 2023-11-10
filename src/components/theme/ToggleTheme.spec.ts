import { describe, it, expect, beforeEach } from 'vitest'

import { mount, VueWrapper } from '@vue/test-utils'
import ToggleTheme from './ToggleTheme.vue'

describe('ToggleTheme', () => {
  let wrapper: VueWrapper<any>

  const button = () => wrapper.find('button')
  const icon = () => wrapper.find('svg')

  beforeEach(() => {
    wrapper = mount(ToggleTheme)
  })

  it('renders properly', () => {
    expect(wrapper.exists()).toBe(true)
    expect(icon().exists()).toBe(true)
    expect(button().exists()).toBe(true)
  })

  it('contains a button with theme text', () => {
    expect(button().text()).toContain('light')
  })

  it('changes theme when clicked', async () => {
    expect(button().text()).toContain('light')
    await button().trigger('click')
    expect(button().text()).toContain('dark')
  })
})
