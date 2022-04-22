# Enforcing Conventional Commits and Semantic Versioning

## Semantic Versioning
[There is a great website](https://semver.org/) dedicated to semantic versioning.  
In short, semantic versioning is a numbering scheme to describe..."versions".   
This is most useful in single "applications" that may have many many "versions" that need tending to.  

### A 3-Number Schema
The Semantic Versioning Scheme is described in 3 numbers separated by dots: `3.2.1`, `14.93858.12`, `0.4321.1234`... all of these are appropriate sematic versions.  
#### Major
The first number is "major".  
Major versions hav 'breaking' or incompatible changes from previous versions.  
Breaking changes may be directly associated with "new features" which "break" the user experience from the previous version.  
#### Minor
The second number is "minor".  
#### Patch
The third number is "patch".  


## Conventional Commit Format
[There is a great website](https://www.conventionalcommits.org/en/v1.0.0/) devoted to conventional commits. To review and take from their [summary](https://www.conventionalcommits.org/en/v1.0.0/#summary),  
`The Conventional Commits spec...provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of.`  

```bash
# outline
  <type>[optional scope]: description
  [opt body]
  [opt "footer"]
```
#### Types
The conventional commit website lists a bunch of conventional commit "types":
- fix
  - patch a bug
  - this increments the **patch** part of the semantic versioning scheme: a patch will increment version 2.14.9 to 2.14.10 or from 3.9.1 to 3.9.2
- feat
  - introduce new content to the codebase: a feat will increment the **minor** semver: a feat will increment version 2.14.9 to 2.15.0 or from 3.9.1 to 3.10.0
- build
- chore
- ci
- docs
- style
- refactor
- perf
- test