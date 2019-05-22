# API

## Intro

PAPI provides a RESTful JSON API can that be accessed at [https://api.palliative.vchlearn.ca/_/](https://api.palliative.vchlearn.ca/_/)

The "/_/" tells PAPI to respond with the default project endpoint where the palliative information is stored.

This is further explained in the [🐰Directus Docs](https://docs.directus.io/api/reference.html#introduction) and in the backend section of this documentation.
    
## (GET)ing the Data

For PAT, we have created a custom, read-only, api endpoint that provides all neccesary data to run the PAT application.  This can be found here:

[https://api.palliative.vchlearn.ca/_/custom/bundle](https://api.palliative.vchlearn.ca/_/custom/bundle)


## Other
If you want to request just a single collection from the API, please refer to the directus documentation