export default {
    type: 'object',
    properties: {
        array: { 
            type: 'array',
            items: {
                type: 'number',
            },
        },
    },
    required: ['array'],
} as const;