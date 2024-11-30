export const homepage = {
    name: 'homepage',
    type: 'document',
    title: 'Homepage',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [
                {
                    type: 'string',
                    title: 'Service Name'
                }
            ]
        }
    ]
}
