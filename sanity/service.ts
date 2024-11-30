export const service = {
    name: 'service',
    type: 'document',
    title: 'Service',
    fields: [
        {
            name: 'service',
            title: 'Service',
            type: 'array',
            of: [
                {
                    type: 'string',
                    title: 'Service Name'
                }
            ]
        }
    ],
};
