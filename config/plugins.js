module.exports = ({ env }) => ({
    transformer: {
        enabled: true,
        config: {
            responseTransforms: {
                removeAttributesKey: true,
                removeDataKey: true,
            },
        }
    },
    documentation: {
        enable: true,
        config :  {
            openapi: '3.0.0',
            info: {
                version: '1.0.1',
                title: 'API documentation',
                description: 'All available API routes',
                termsOfService: 'YOUR_TERMS_OF_SERVICE_URL',
                contact: {
                    name: 'LEMASSON Louis',
                    email: 'galou2608@gmail.com',
                    url: 'YOUR_WEBSITE_URL'
                },
                license: {
                    name: 'Apache 2.0',
                    url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
                },
            },
            'x-strapi-config': {
                plugins: [ 'upload', 'users-permissions'],
                path: '/documentation',
            },
            servers: [
                {
                    url: 'http://localhost:1337/api',
                    description: 'PaysaBloo backend API server'
                }
            ],
            externalDocs: {
                description: 'Find out more',
                url: 'https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html'
            },
            security: [
                {
                    bearerAuth: []
                }
            ]
        }
    }
});