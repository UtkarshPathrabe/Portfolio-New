export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'number'
    },
    {
      name: 'timeLine',
      title: 'TimeLine',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'board',
      title: 'Board',
      type: 'string',
    },
    {
      name: 'score',
      title: 'Score',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ]
};