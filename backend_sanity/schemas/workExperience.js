export default {
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
           {
                name:'name',
                title:'Name',
                type:'string'
            },
            {
                name:'company',
                title:'Company',
                type:'string'
            },
            {
                name:'desc',
                title:'Desc',
                type:'string'
            },
            {
                name:'duration',
                title:'Duration',
                type:'string'
            },
            {
                name:'points',
                title:'Points',
                type:'array',
                of:[{ type:'string'}]
            },
            {
                name:'icon',
                title:'Icon',
                type: 'image',
                options: {
                  hotspot: true,
                },
            },
            {
                name:'iconBg',
                title:'IconBackground',
                type:'string'
            },
    ]
}