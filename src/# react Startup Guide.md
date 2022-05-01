# react Startup Guide

- index.js : is the entry point of the application.
- It is where all the components are rendered.
  
1. A component must return something
2. Note: A component name should be in the form of **PascalCase**

```jsx
function App() {
  const title = "This is the title of the app"
  return (
    <div className="App">
        <div className="content">
            <h1>{title}</h1>
        </div>
    </div>
  );
}
```

3. The values defined inside the return is not an html => it is basically an **jsx**

4. To render a **Dynamic Value** in the jsx, define the variable outside the return statement and use the **Curly Brackets{}** inside the return statement to call the variable.

```jsx
<h1>{title}</h1>
```

5. To use the component in the other files => first you need to export the component from the same folder

```jsx
export default App;
// if we export the component with default keyword we can alias the componet name as we like
```

6. next you need to import the component to use the component

for Example

```jsx
function App() {
  const title = "This is the title of the app"
   
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
```
