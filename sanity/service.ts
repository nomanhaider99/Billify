export const service = {
    name: 'service',
    type: 'document',
    title: 'Service',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'points',
            title: 'Points',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'point',
                            title: 'Point',
                            type: 'string',
                            description: 'Add a key point or detail about the service.',
                        },
                    ],
                },
            ],
            description: 'Add multiple key points or features of the service.',
        },
    ],
};
