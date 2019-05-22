# Backend

## Intro
Notes on DIrectus


#### PAPI contains the following collections which are used to store all the information PAT needs:

### THE BELOW INFO IS OUT OF DATE

### ♔ `Main`
A singleton collection that serves as the root of the JSON tree for PAT
- __intro:__ ID of protocol that will serve as intro.
- __protocols:__ Linked to all protocols that we want PAT to see

### ♕ `Protocols` 
A collection of protocols that begin the branching scenarios.  Includes the Intro Scenario
- __name:__ The name of the protocol
- __starting_branch:__ Links to the first branch of the protocol
- __main_id:__ links protocol to main collection (will be blank if it a protocol we don't want to show up or if it is the intro)

### ♖ `Branches`
Are either questions or outcomes.
- __text:__ The Question or Outcome text
- __is_outcome:__ Whether or not the branch is an outcome
- __asnwers:__ If it is not an outcome, it is a quesiton and has answers

### ♗ `Answers`
Answers for question branches
- __text:__ The answer text
- __branch_id:__ The ID of the question branch that this answer answers 
- __next_branch:__ The ID of the next branch to be shown if this answer is chosen