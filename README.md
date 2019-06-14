# Wunder_Fleet_TakeHome_User_Registration Task 
<details>
           <summary>Possible optimizations</summary>
           <p>Placeholder</p>
</details>
<details>
           <summary>What can be done better</summary>
           <p>Placeholder</p>
</details>

## Design Document 
  ### Goals:
- [ ] Small app using JS, Git, SCSS and optionally any third party library or framework.
- [ ] Basic user registration with 4 separated steps and only one active step at a time.
- [ ] The steps will be personal, address, payment and success.
- [ ] Locally saved data
- [ ] The payment step will execute a POST request to the backend when the "next" button gets clicked.
  
- [ ] The user will be able to leave the registration on every step/view and to reload his progress.
- [ ] No access control or validation
- [ ] Custom SCSS style accordingly to the corporate identity.
- [ ] Minimal UI
- [ ] Structure of the code using MVC/MVI/MVVM or any other pattern with explanation

  ### Preperation: 
  #### Technologies:
  ##### Only JavaScript 
    * Pros:
      * Fast loading time
      * No overhead
      * Quickly done
      * Less files
    * Cons:
      * Harder to maintain/scale
      * Therefor not well suited for large teams
      
  ##### Angular with Rxjs and NgRx using Redux pattern
   * Pros:
      * Scalable and easy to maintain
      * Well suited for large teams
   * Cons:
      * Takes longer to build
      * Unnecessary overhead for this small app
      * Many files
      
   I've decided to go with the second approach because working in a large team was a topic in the interview and I think it will draw more attention to the application. 
   In the context of a small application only consisting of a register form with local storage and one POST request with no further development it would be smarter to write the app in "vanilla" JavaScript.
   I will compile the Angular application so there won´t be the requirement of having node installed
   
  ### Screenshots:
  ### Results: