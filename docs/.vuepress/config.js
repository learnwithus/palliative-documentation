module.exports = {
    title: 'VCH Palliative Documenation',
    description: 'Everything you need to know',
    themeConfig: {
        nav: [
            { text: 'API', link: 'http://api.palliative.vchlearn.ca/' },
            { text: 'PAPI Editor', link: 'https://palliative.vchlearn.ca/' },
            {
                text: 'Repositories',
                items: [
                  { text: 'Documentation', link: 'https://github.com/learnwithus/palliative-documentation' },
                  { text: 'PAPI Editor', link: 'https://github.com/stuible/vch-palliative-editor' },
                  { text: 'PAT', link: 'https://github.com/learnwithus/palliative-app' }
                ]
              }
        ],
        sidebar: {
            // '/api/': [
            //     '',     /* /foo/ */
            //     'one',  /* /foo/one.html */
            //     'two'   /* /foo/two.html */
            // ],

            // '/backend/': [
            //     '',      /* /bar/ */
            //     'three', /* /bar/three.html */
            //     'four'   /* /bar/four.html */
            // ],

            // fallback
            '/': [
                '',
                'pat',
                'api', 
                'backend',    
                'papi'
            ]
        }
    }
}