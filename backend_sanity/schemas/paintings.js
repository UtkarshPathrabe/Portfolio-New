export default {
  name:'paintings',
  title:'Paintings',
  type:'document',
  fields:[
    {
      name:'name',
      title:'Name',
      type:'string'
    },
    {
      name:'height',
      title:'Height',
      type:'number'
    },
    {
      name:'width',
      title:'Width',
      type:'number'
    },
    {
      name:'rank',
      title:'Rank',
      type:'number'
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
}