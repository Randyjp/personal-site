---
title: Mistakes of a Cypress newbie
author: [RandyPerez]
date: '2021-11-21'
featuredImage: './cypress-tree.jpeg'
shortDescription: 'Mistakes I made while learning Cypress'
tags: ['javascript', 'Cypress', 'test', 'web development']
---


Cypress is one of the most popular frameworks for writing end-to-end tests. Compared to other alternatives, like Selenium, it's easy for frontend developers to start using it; everything is just JavaScript. While it sounds like a blessing, it can be a double-edged sword if we are not careful. How so? Well, it's easy to jump into writing tests without having much of a clue of cypress' best practices. At least that's what I did... 


Anyways, let's talk about the mistake I made along the way and how to avoid them. 

## 1 - Waiting an arbitrary number of milliseconds for HTTP calls to resolve

Here's the worst mistake that I made early on with cypress. You click on an element that triggers an HTTP call. Now what? We need to wait until the asynchronous code resolves. Easy! 2-3 seconds is more than enough:

```javascript
// bad
cy.get('[data-testid="get-users-btn"]').click(); //calls '/users'
cy.wait(2000); // wait 2000ms (2 seconds)
//... other actions and assertions ...
```

### Why is this bad? 

1. It completely ignores the nature of asynchronous code. We have no idea about the current Network conditions or when the event loop will finish processing the code.
2. Our tests are bound to be slow. If our async call resolves in `500ms`, we still have to wait `2000ms`.
3. Tests become unpredictable(flaky). If our async call resolves in `3000ms`, our test will fail. However, it passes for runs that take less than `2000ms`.

Even worst, here's what the cypress docs have to say about this pattern: "You almost never need to wait for an arbitrary period of time. There are always better ways to express this in Cypress." Yikes! The message is clear.

### Alternative and best practices: 

Cypress docs recommend to: "wait explicitly for this route to finish". Here's how that works on our previous example: 

```javascript
// GOOD
cy.intercept('GET', '/users').as('getUsers')

cy.get('[data-testid="get-users-btn"]').click(); //calls '/users'
cy.wait('@getUsers') // <--- wait explicitly for this route to finish
//... other actions and assertions ...
```

[Read more about unnecessary waiting](https://docs.cypress.io/guides/references/best-practices#Unnecessary-Waiting)



## 2 - Interacting with the DOM in cypress hooks(before, beforeEach, after...)

```javascript
  before(() => {
    cy.visit('/login') // this is fine
    // bad idea
    cy.get('[data-testid="user-txt"]').type('randyjp') /
    cy.get('[data-testid="password-txt"]').type('1234') 
    cy.get('[data-testid="login-btn"]').click()
  })
```

What's wrong? It looks good. We want to login prior to our tests thus we place  that portion of the code in a `before` hook. There's a catch, Cypress does not retry commands/assertions within hooks. (Retry-ability)[https://docs.cypress.io/guides/core-concepts/retry-ability] is CORE for reliable cypress tests. Having our test engine run things multiple times can save us from unnecessary failures. Here's what the docs have to say about it: 

"The retry-ability allows the tests to complete each command as soon as the assertion passes, without hard-coding waits. If your application takes a few milliseconds or even seconds to render each DOM element - no big deal, the test does not have to change at all."

### Alternative and best practices: 

Move all the commands that interact with the DOM into your `it` blocks. 

```javascript
//  example:
  before(() => {
    cy.visit('/login')
  })

  it('should login and do wonderful things', () => {
    cy.get('[data-testid="user-txt"]').type('randyjp') /
    cy.get('[data-testid="password-txt"]').type('1234') 
    cy.get('[data-testid="login-btn"]').click()
  })

```

**Note**: Ideally, you should log in programmatically.

## 3 - Creating "tiny" tests with a single assertion


In unit test land, it fairly common to have a bunch of tiny tests that works on an equally small section of the application. This is not a good approach for end-to-end tests. Cypress runs a series of setup/teardown events in between async blocks; too many of them will slow down the performance of your test suite. 

```javascript
//bad 
describe('my form', () => {
  before(() => {
    cy.visit('/users/new')
    cy.get('#first').type('johnny')
  })

  it('has validation attr', () => {
    cy.get('#first').should('have.attr', 'data-validation', 'required')
  })

  it('has active class', () => {
    cy.get('#first').should('have.class', 'active')
  })

  it('has formatted first name', () => {
    cy.get('#first').should('have.value', 'Johnny') // capitalized first letter
  })
})
```

### Alternative and best practices: 

Just throw everything in one or two `it` blocks, and don't worry about it. When your tests fail, cypress will point you to the exact command causing the issue.

```javascript
// better
describe('my form', () => {
  before(() => {
    cy.visit('/users/new')
  })

  it('validates and formats first name', () => {
    cy.get('#first')
      .type('johnny')
      .should('have.attr', 'data-validation', 'required')
      .and('have.class', 'active')
      .and('have.value', 'Johnny')
  })
})
```

## 4 - Having no Structure

One aspect that I love about cypress is writing an entire test in a single file. It saves you from overthinking. Nevertheless, as your number of tests grows they become repetitive and, sometimes, large. Moving the same code from file to file is far from ideal; even small refactors will be a nightmare. 


One thing that helps remediate the situation is to come up with a structure or architecture that improves readability and re-usability. How should that architecture look? It doesn't matter! Pick a structure that works for your team and keep tweaking it as new scenarios pop up. Overthinking these kinds of things is one of the most common mistakes that we make as developers.


Here's the structure that works for me. I have a utils file that holds common `constants`, `selectors` ,and `actions`. It's a simple way of enabling code re-use in your tests.

```javascript
export const constants = {
  ACCOUNT_USER_NAME: "John Doe",
};

export const selectors = {
  FORM_SAVE_BUTTON: '[data-testid="save-btn"]',
  FORM_NAME_FIELD: "[data-testid=user-name]",
};

export const actions = {
  submitForm: () => {
    cy.get(FORM_NAME_FIELD).type(constants.ACCOUNT_USER_NAME);
    cy.get(selectors.FORM_SAVE_BUTTON).click();
  },
};
```

