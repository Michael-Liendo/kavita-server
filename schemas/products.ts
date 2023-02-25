import {Rule} from 'sanity'

export default {
  name: 'products',
  type: 'document',
  title: 'Products',
  fields: [
    {title: 'Title', name: 'title', type: 'string', validation: (Rule: Rule) => Rule.required()},
    {title: 'Price', name: 'price', type: 'number', validation: (Rule: Rule) => Rule.required()},
    {title: 'Description', name: 'description', type: 'string'},
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      validation: (Rule: Rule) => Rule.required(),
      to: [{type: 'category'}],
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{type: 'url'}],
      validation: (Rule: Rule) => Rule.min(1).required(),
    },
  ],
}
