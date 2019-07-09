# API

## Intro

The Palliative Directus instance provides a RESTful JSON API can that be accessed at [https://api.palliative.vchlearn.ca/_/](https://api.palliative.vchlearn.ca/_/)

The "/_/" tells PAPI to respond with the default project endpoint where the palliative information is stored.

This is further explained in the [🐰Directus Docs](https://docs.directus.io/api/reference.html#introduction) and in the backend section of this documentation.
    
## (GET)ing the Data

For PAT, we have created a custom, read-only, api endpoint that provides all neccesary data to run the PAT application.  This can be found here:

[https://api.palliative.vchlearn.ca/_/custom/bundle](https://api.palliative.vchlearn.ca/_/custom/bundle)

### Example Data
```json
{
  //Contains basic information about the data being returned by the API
  "info": {
    "id": 1,
    "version": 0 //Current Version of the Data
  },
  "data": {
    // Questions asked before a protocol is selected
    "intro_questions": [
      {
        "id": 1,
        "question": "Great first question??"
      },
      ...
    ],
    "protocols": [
      {
        "id": 1,
        "name": "First Protocol",
        // Questions asked after OPRSTUV assessment is done
        "additional_questions": [
          {
            "id": 2,
            "protocol": {
              "id": 1
            },
            "question_type": {
              "id": 5,
              "type": "boolean" // free_form", "multiple_select", "boolean", "single_select" or "scale"
            },
            "question": "Do you like it that there are more questions?"
          },
          ...
        ],
        // Questions asked during OPRSTUV assessment
        "assessment_questions": [
          {
            "id": 1,
            "question": "How many Octopusses are under the ocean?",
            "assessment_letter": {
              "id": 1 // The ID of the assment letter (OPQRSTU or V) that this assessment question belongs to
            },
            "protocol": { // Protocol that this question belongs to (not really useful)
              "id": 1
            },
            "question_type": {
              "id": 2,
              "type": "single_select" // "multiple_select", "boolean", "single_select" or "scale"
            },
            "answers": [
              {
                "id": 1,
                "answer": "Lots",
                "question": 1 // ID of question this answer belongs to (not really useful)
              },
              ...
            ]
          },
          ...
        ],
        "plans": [
          {
            "plan": 1 // ID of plan that is included in this protocol
          },
          ...
        ]
      }
    ],
    // Array of ancronymn steps involved in assessment (OPQRSTUV)
    "assessment_letters": [
      {
        "id": 1,
        "letter": "O",
        "title": "Onset"
      },
      ... // OPQRSTUV
    ],
    // Array of all plans that can be used by multiple protocols
    "plans": [
      {
        "id": 1,
        "plan": "After hours nurse to follow-up in 30 to 60 minutes if symptom management",
        "details": null
      },
      ...
    ]
  }
}
```
### Additional Notes on the Response above

#### info.version
PAT Will only download a new copy of this data if the version number is incremented, this happens automatically when using PAPI but must be done manually if editing content using the Directus Admin Interface



## Other
If you want to request just a single collection from the API, please refer to the directus documentation