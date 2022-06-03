import React from "react";

const Blogs = () => {
  return (
    <div className='m-5'>
      <h1 className='text-center text-bold text-2xl'>Question and Answer</h1>
      <h2>
        Q1. How will you improve the performance of a React Application? <br />
        ANS  --- Using React components to prevent unnecessary re-renders.
        Code-splitting in React using dynamic import. Maintaining component
        state local where necessary. Lazy loading images in React. Different
        folder structure .
      </h2>
      <h2>
       Q2. What are the different ways to manage a state in a React application?
        <br />
        ANS --- 1.useState
        <br />
        2.useRef <br />
        3. useContext <br />
        4. props <br />
        5.Redux Pros <br />
        6.Redux Cons <br />
      </h2>
      <h2>
      Q3. How does prototypical inheritance work?
        <br />
        ANS  --- The main advantage of prototypal inheritance is that you can add new
        properties to prototypes after they have been created. To add new
        methods and properties to an existing constructor, we create a
        JavaScript prototype. Therefore, we can tell our JS code to inherit
        properties from a prototype.Through a reference pointer function, we can
        reuse properties or methods from one JavaScript object to another. All
        JavaScript objects inherit properties and processes from a prototype:
        Date objects derive from Date.prototype. Array objects derive from
        Array.prototype. Player objects derive from Player.prototype.
      </h2>
      <h2> Q6 .What is a unit test? Why should write unit tests?<br />
     ANS --- An application's smallest testable unit is the unit under test. This is done by developers during the coding phase. Developers use unit testing to verify that the code to be tested -unit- is correct. The main goal of unit testing is to ensure that every part of the system is working well and in accordance with its purpose. If the individual parts are functioning properly, the entire system will work properly. Unit testing is performed by software developers.
      </h2>
      <h2> Q5 .You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?<br />
     ANS  --- Objects of the product must be in the array of products. In order to find the products only by name, I will filter the results. I will query only by name inside the filter method, and if a matching name is found, then it will be added to the resultant array. This problem has the following code: " product.filter(product =rightArrow   product.name 'Name'); ". Results are stored in an array.
     </h2>
    </div>
  );
};

export default Blogs;
