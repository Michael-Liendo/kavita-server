import {Rule} from 'sanity'
export default {
  name: 'productWeekSelection',
  title: 'Week Products Select',
  type: 'document',
  fields: [
    {
      name: 'products',
      title: 'Week Selection',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'products'}]}],
      validation: (Rule: Rule) => Rule.max(4).warning('Only 4 products'),
    },
  ],
}
