export default{
    name:'Resume',
    title:'Resume',
    type: 'document',
    fields:[
        {
            name: "title",
            type: "string",
            title: "Title",
            description: "This title will be used as a caption for the download.",
        },
        {
            name:'rsURL',
            title:'resume',
            type: 'file',
            options: {
              accept: '.pdf',
            },
            validation:(Rule) => Rule.required()
        },
        
    ]
}