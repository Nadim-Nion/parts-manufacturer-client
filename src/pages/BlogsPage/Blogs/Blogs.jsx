import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-4xl text-center font-bold text-purple-700 my-5'>Frequently Asked Questions (FAQ) in JS</h2>
            <div className='my-7'>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Q.1 How will you improve the performance of a React Application?</div>
                    <div className="collapse-content">
                        <p>To improve the performance of a React application: <br /> <br />

                            <b>1. Optimize component re-renders:</b> Use `React.memo` and `PureComponent` to prevent unnecessary re-renders. <br /> <br />

                            <b>2. Code splitting:</b> Use dynamic imports and `React.lazy` to load components only when needed. <br /> <br />

                            <b>3. Memoization:</b> Use `useMemo` and `useCallback` hooks to memoize expensive calculations and functions. <br /> <br />

                            <b>4. Virtualization:</b> Implement windowing with libraries like `react-window` or `react-virtualized` for large lists. <br /> <br />

                            <b>5. Efficient state management:</b> Minimize state usage and lift state up only when necessary to reduce re-renders. <br /> <br />

                            These techniques help in maintaining a responsive and efficient React application.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Q.2 What are the different ways to manage a state in a React application?</div>
                    <div className="collapse-content">
                        <p>In a React application, state can be managed in several ways: <br /> <br />

                            <b>1. Reacts built-in state hooks:</b> Use `useState` and `useReducer` for local component state management. <br /> <br />

                            <b>2. Context API:</b> Manage global state across the application with `useContext` and `Context.Provider`. <br /> <br />

                            <b>3. Custom Hooks:</b> Create reusable state logic by encapsulating state management in custom hooks. <br /> <br />

                            <b>4. State management libraries:</b> Use libraries like Redux, Zustand, or Recoil for more complex state management needs. <br /> <br />

                            <b>5. URL state:</b> Manage state through URL parameters using `React Router` for scenarios like filtering or pagination. <br /> <br />

                            These methods offer flexibility depending on the complexity and scope of the state.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Q.3 How does prototypical inheritance work?</div>
                    <div className="collapse-content">
                        <p>Prototypical inheritance in JavaScript allows objects to inherit properties and methods from other objects. Every object has a prototype, which is another object that it inherits from. When a property or method is accessed on an object, JavaScript first looks for it on the object itself. If it is not found, the search continues up the prototype chain until it reaches `Object.prototype`, or `null`, if no match is found. This chain allows for shared behavior and efficient reuse of code.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Q.4 Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</div>
                    <div className="collapse-content">
                        <p>In React, you should not set the state directly, like `products = [...]`, because it does not trigger a re-render of the component. Reacts `useState` hook provides the `setProducts` function to update the state, which ensures the component re-renders with the new state. Directly modifying the state also leads to potential inconsistencies and bugs, as React may not track those changes. Using `setProducts` ensures React manages state updates properly and keeps the UI in sync.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Q.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?  </div>
                    <div className="collapse-content">
                        <p>To implement a search to find products by name in an array, you can use the `filter` method along with the `includes` method for case-insensitive matching. Here is an example: </p> <br />

                        <p>
                            To search for products by name, use the `filter` method on the array. You compare each products name with the search query, converting both to lowercase for case-insensitive matching. This approach creates a new array containing only the products whose names include the search query. For example, if the search query is <b>Phone</b>, it will return all products with <b>Phone</b> in their names, ensuring the results are dynamically filtered based on user input.
                        </p> <br />

                        <p> This function takes the `products` array and a `searchTerm`, then returns a new array of products whose names include the `searchTerm`. The `toLowerCase()` method ensures the search is case-insensitive.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Q.6 What is a unit test? Why should we write unit tests?</div>
                    <div className="collapse-content">
                        <p><p>A unit test is a type of software testing that focuses on verifying the functionality of individual components or functions in isolation, typically testing a single unit of code like a function or method. Unit tests help ensure that each part of the codebase works as expected. <br /> <br />

                            Writing unit tests is important because they: <br />

                            1. Catch bugs early by validating code behavior. <br />

                            2. Make refactoring safer by providing immediate feedback on changes. <br />

                            3. Improve code quality and maintainability. <br />

                            4. Serve as documentation for how the code is supposed to work.</p></p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;