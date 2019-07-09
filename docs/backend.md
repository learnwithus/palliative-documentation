# Backend

## Intro
Notes on Directus

## Administration
You can administer the DIrectus Instance directly by visiting [https://api.palliative.vchlearn.ca/admin](https://api.palliative.vchlearn.ca/admin)

## Structure


#### PAPI contains the following collections which are used to store all the information PAT needs:

### ♔ `Info`
A singleton collection that contains basic info about the data
- __version:__ Version number of current data

### ♕ `Plans` 
List of all plans that are reused by the protocols
- __plan:__ Name of the plan
- __details:__ Further details about the plan (such as time contraints)

### ♖ `Protocols`
Contains Protocols
- __name:__ The Protocol name
- __assessment_questions:__ Assessment Questinos
- __additional_questions:__ Additional Questions
- __plans:__ Plans

### ♗ `Protocol Plans`
Links together to protocol table and the plans table
- __protocol:__ protocol ID
- __plans:__ plan ID

### ♖ `Question Types`
AList of the types of questions that can be displayed by PAT
- __type:__ string

### ♖ `Intro Questions`
Questions asked before protocol is picked
- __question:__ The Question text

### ♖ `Assessment Letters`
List of OPRSTUV letters used for assessment
- __letter:__ Single letter of acronymn
- __title:__ Full word that the letter stands for

### ♖ `Assessment Questions`
List of questions asked once a protocol is selected
- __protocol:__ ID of protocol
- __question_type:__ ID od question_type to indicate which kind of question it is
- __question:__ Question text

### ♖ `Assessment Answers`
List of answers for the questions asked as part of OPQRSTUV
- __quesiton:__ Question ID
- __answer:__ Answer text

### ♖ `Additional Questions`
Are either questions or outcomes.
- __protocol:__ Id of protocol
- __question_type:__ id of question_type to indicate question type
- __question:__ Question text