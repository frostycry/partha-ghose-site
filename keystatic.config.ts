import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'your-github-username/your-repo-name'
  },
  collections: {
    publications: collection({
      label: 'Publications',
      slugField: 'title',
      path: 'content/publications/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        year: fields.text({ label: 'Year' }),
        journal: fields.text({ label: 'Journal' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Particle Physics', value: 'particle_physics' },
            { label: 'Foundations of Quantum Mechanics', value: 'quantum_mechanics' },
            { label: 'Quantum Cognition', value: 'quantum_cognition' }
          ],
          defaultValue: 'quantum_mechanics'
        })
      }
    }),
    books: collection({
      label: 'Books',
      slugField: 'title',
      path: 'content/books/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publisher: fields.text({ label: 'Publisher' })
      }
    })
  }
});
