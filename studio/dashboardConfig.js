export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60269095356820f46874a6e6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-717u3jgs',
                  apiId: '6f529465-d281-41a6-bb52-6acd4204b1df'
                },
                {
                  buildHookId: '6026909510cae5ec7fd4a0bc',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nnpxxii2',
                  apiId: 'd312fe74-2311-4399-90f6-499002f66e4e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sowmyalankireddy/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nnpxxii2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
