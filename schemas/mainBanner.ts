import {Rule} from 'sanity'

export default {
  name: 'main_banners',
  type: 'document',
  title: 'Main Banners',
  fields: [
    {
      title: 'Head Main banners',
      name: 'head_main_banners',
      type: 'object',
      fields: [
        {
          title: 'Banners Computer',
          name: 'banners_computer',
          type: 'array',
          of: [{type: 'url'}],
          validation: (Rule: Rule) => Rule.min(1).max(3).required(),
        },
        {
          title: 'Banners Mobile',
          name: 'banners_mobile',
          type: 'array',
          of: [{type: 'url'}],
          validation: (Rule: Rule) => Rule.max(1).required(),
        },
      ],
    },
  ],
}
