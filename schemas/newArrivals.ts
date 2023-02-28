import {Rule} from 'sanity'
export default {
  name: 'newArrivals',
  title: 'New items',
  type: 'document',
  fields: [
    {
      name: 'products',
      title: 'New Items Selection',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'products'}]}],
      validation: (Rule: Rule) => Rule.max(4).warning('Only 4 products'),
    },
  ],
}
