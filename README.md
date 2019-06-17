# Wunder_Fleet_TakeHome_User_Registration Task 
## Possible optimizations
  * Ask the user if he wants his data locally saved -> IBAN details on a public computer = dangerous
  * At end of session set a cookie with expire date and delete localstorage
  * Log init of components as action
  * With components for each view in register, we can lazyload the components to improve initial page load time
  * With correct form handling the register checkform() function gets obsolete
  * When implementing more Components, create a module for register
  * Delete alertService
  * Put current view into the router output URL
  * Only import Material components we really need

## What can be done better
  * Effects instead of services
  * Function SubmitPaymentData in register belongs to Payment actions
  * Error handling
  * Register store as forFeature
  * Meta-Reducer to compose map of reducers into a single reducer
  * Module and store for ui-loader
  * Components for every step, register isn´t atomic
  * Router and components instead of a variable 'currentStep'
  * Fully integrate corporate identity, including theme colors
  * Smoother UI with animations

## Explanation of used pattern
  This task required view renders and state reproduction, therefore i´ve decided to go with the redux pattern because it´s proficient for view renders and state reproduction.
  It´s really easy to understand, debug and refactor the code when neccessary, especially when using redux dev tools.
  Here is an image of the architecture:
  ![architecture](https://github.com/DritonUkic/Wunder_Fleet_TakeHome_User_Registration/tree/screenshots/architecture.png)

## Design Document 
  ### Goals:
- [x] Small app using JS, Git, SCSS and optionally any third party library or framework.
- [x] Basic user registration with 4 separated steps and only one active step at a time.
- [x] The steps will be personal, address, payment and success.
- [x] Locally saved data
- [x] The payment step will execute a POST request to the backend when the "next" button gets clicked.
- [x] The user will be able to leave the registration on every step/view and to reload his progress.
- [x] No access control or validation
- [x] Custom SCSS style accordingly to the corporate identity.
- [x] Minimal UI
- [x] Structure of the code using MVC/MVI/MVVM or any other pattern with explanation

### Preperation 
  #### Technologies
  ##### Only JavaScript with Bootstrap
  * Pros:
    * Fast loading time
    * No overhead
    * Quickly done
    * Less files
    * Wunder uses Bootstrap
  * Cons:
    * Harder to maintain/scale
    * Therefore not well suited for large teams
      
  ##### Angular with Material, Flex-Layout, Rxjs and NgRx using Redux pattern
   * Pros:
      * Scalable and easy to maintain
      * Well suited for large teams
      * Proficient view renders
      * Proficient state reproduction
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
               
  #### Reducers
        Register
          - Personal
            * setPersonal(Personal)
            * setFirstName(string)
            * setLastName(string)
            * setTelephone(string)
            * Default
          - Address
            * setAddress(Address)
            * setStreet(string)
            * setHouseNumber(string)
            * setZipCode(string)
            * setCity(string)
            * Default
          - Payment
            * setPayment(Payment)
            * setAccountOwner(string)
            * setIban(string)
            * setCustomerId(number)
            * setPaymentDataId(string)
            * Default
            
  #### Classes/ Interfaces
  ```typescript
  
    export interface Personal {
        firstName: string;
        lastName: string;
        telephone: string;
    };
  
    export interface Address {
        street: string;
        houseNumber: string;
        zipCode: string;
        city: string;
    };
    
    
    export interface Payment {
        accountOwner: string;
        iban: string;
        customerId: number;
        paymentDataId: string;
    };
    
    
    class customerData{
      personalData: Personal;
      addressData: Address;
      paymentData: Payment;
      lastRegisterStep: number;
      active: boolean;
    }
  

  ```
  #### LocalStorage Functions
        CheckLS -> Check if a storedUser exists and then manipulate states
        Update[*Interfaces]LS -> Update storedUser with new states
        getStep -> Get storedUser.lastRegisterStep
        getActive -> Get storedUser.active ("Is user registered?")
        getUser -> Get storedUser

  #### Design (NOT IMPLEMENTED)
        Animations:
          * Welcome to Wunder-Fleet
          * Let's get started!
          * 4 bubbles representing each view on the right, which get bigger on focus
          * One active input at a time, the rest goes to the background

  #### Additional Informations
        When starting the Angular application from localhost, it´s neccessary to deactivate web-security for the POST request to work properly.
        For Google Chrome on Windows 10 clone a shortcut, open the properties and under shortcut/target add  
        --disable-web-security --user-data-dir="C:\tmpChromeSession"
        to the path.
          Example: "[Path to chrome.exe]" --disable-web-security --user-data-dir="C:\tmpChromeSession"

  ### Screenshots
    #### Personal View
      ![Personal view](https://github.com/DritonUkic/Wunder_Fleet_TakeHome_User_Registration/tree/screenshots/personal.png)
    #### Address View
      ![Address view](https://github.com/DritonUkic/Wunder_Fleet_TakeHome_User_Registration/tree/screenshots/address.png)
    #### Payment View
      ![Payment view](https://github.com/DritonUkic/Wunder_Fleet_TakeHome_User_Registration/tree/screenshots/payment.png)
    #### Success View
      ![Success view](https://github.com/DritonUkic/Wunder_Fleet_TakeHome_User_Registration/tree/screenshots/success.png)
    #### Error View
      ![Error view](https://github.com/DritonUkic/Wunder_Fleet_TakeHome_User_Registration/tree/screenshots/error.png)


