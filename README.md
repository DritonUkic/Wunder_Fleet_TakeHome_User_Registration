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

<<<<<<< HEAD
### Preperation 
  #### Technologies
  ##### Only JavaScript with Bootstrap
=======
### Preperation: 
  #### Technologies:
  ##### Only JavaScript 
>>>>>>> 42661048644470f42ae66f4476bc4dfeedab11ab
  * Pros:
    * Fast loading time
    * No overhead
    * Quickly done
    * Less files
<<<<<<< HEAD
    * Wunder uses Bootstrap
  * Cons:
    * Harder to maintain/scale
    * Therefore not well suited for large teams
=======
  * Cons:
    * Harder to maintain/scale
    * Therefor not well suited for large teams
>>>>>>> 42661048644470f42ae66f4476bc4dfeedab11ab
      
  ##### Angular with Material, Rxjs and NgRx using Redux pattern
   * Pros:
      * Scalable and easy to maintain
      * Well suited for large teams
   * Cons:
      * Takes longer to build
      * Unnecessary overhead for this small app
      * Many files
 ### Decision     
   I've decided to go with the second approach because working in a large team was a topic in the interview and I think it will draw more attention to the application.  
   In the context of a small application only consisting of a register form with local storage and one POST request with no further development it would be smarter to write the app in "vanilla" JavaScript.  
   I will compile the Angular application so there won´t be the requirement of having node installed.
 ### Architecture
   #### Components
      UI-Loader
        Header
         - Navbar
         - Logo
        Pages
         - Register
           * Personal
           * Address
           * Payment
           * Success
         Footer  
  
   #### Actions
       Register
        - Personal
        - Address
        - Payment
        - Success
        - GetStates
        
       LocalStorage
        - SetData
          * Register
        - GetData
          * Register  
               
  #### Reducers
        Register
          - Personal
            * setFirstName
            * setLastName
            * setTelephone
            * Default
          - Address
            * setStreet
            * setHouseNumber
            * setZipCode
            * Default
          - Payment
            * setAccountOwner
            * setHouseNumber
            * setZipCode
            * Default
            
  #### Classes
  ```typescript
  let localStorage = {
    customerData:{
      personalData:{
        firstname: string,
        lastname: string,
        telephone: string // Number will remove starting 0s and there wont be any calculations with it
      },
      addressData:{
        street: string,
        houseNumber: string,
        zipCode: string // Number can´t store a dash
      },
      paymentData:{
        accountOwner: string,
        iban: string,
        customerId: number // Not in view, will be auto-generated,
        paymentDataId: string
      },
      lastRegisterStep: number // 0- Personal, 1- Address, 2- Payment, 3- Success

      
<<<<<<< HEAD
    }
  };

  ```
  ### Screenshots
  ### Results
=======
   I've decided to go with the second approach because working in a large team was a topic in the interview and I think it will draw more attention to the application. 
   In the context of a small application only consisting of a register form with local storage and one POST request with no further development it would be smarter to write the app in "vanilla" JavaScript.
   I will compile the Angular application so there won´t be the requirement of having node installed
   
  ### Screenshots:
  ### Results:
>>>>>>> 42661048644470f42ae66f4476bc4dfeedab11ab
