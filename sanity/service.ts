export const service = {
    name: 'service',
    type: 'document',
    title: 'Service',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'points',
            title: 'Points',
            type: 'array',
            of: [{ type: 'number' }]
        }        
    ]
}