export default {
    type: 'object',
    properties: {
        array: { 
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    firstName: { type: 'string' },
                    lastName: { type: 'string' },
                    birthDate: { type: 'string' },
                },
                required: ['firstName', 'birthDate'],
            },
        },
    },
    required: ['array'],
} as const;