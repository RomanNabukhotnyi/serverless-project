export default {
    type: 'object',
    properties: {
        array: { 
            type: 'array',
            items: {
                type: 'number',
            },
        },
        n: { type: 'number' },
    },
    required: ['array', 'n'],
} as const;