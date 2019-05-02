module.exports = {
    title: 'VCH Palliative',
    description: 'Everything you need to know',
    themeConfig: {
        sidebar: {
            '/api/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],

            '/backend/': [
                '',      /* /bar/ */
                'three', /* /bar/three.html */
                'four'   /* /bar/four.html */
            ],

            // fallback
            '/': [
                '',        /* / */
                'api', /* /contact.html */
                'backend'    /* /about.html */
            ]
        }
    }
}