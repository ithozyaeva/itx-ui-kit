import { TagsGroup as TagsGroupComponent } from '@/components';
import { ref } from 'vue'

export default {
  title: 'Molecules/TagsGroup',
  component: TagsGroupComponent,
  argTypes: {
    multiple: { control: 'boolean' },
  },
}

export const TagsGroup = (args: any) => ({
  components: { TagsGroupComponent },
  setup() {
    const model = ref(args.multiple ? ['Tag'] : 'Tag')

    return { args, model }
  },
  template: `
    <TagsGroupComponent v-bind="args" v-model="model" />
    <p style="margin-top: 10px;">Selected: {{ model }}</p>
  `,
})

TagsGroup.args = {
  tags: ['Tag', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'],
  multiple: false,
}
