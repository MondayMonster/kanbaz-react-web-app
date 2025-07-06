import { Link } from 'react-router-dom';

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h1>Lab 1 - HTML Elements Demo</h1>
      <h3>Siddhant Narode</h3>
      <h3>CS5610.60924.202560</h3>
      <h3>GitHub Link</h3>
      <a href="https://github.com/MondayMonster/kanbaz-react-web-app" target="_blank">View Source on GitHub</a>
      
      <h2>Navigation</h2>
      <Link to="/Kambaz">Go to Kambaz App</Link>
      <hr />

      <h2>Example Elements</h2>
      <h3>Heading Example</h3>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>

      <h3>Paragraph Example</h3>
      <p>This is a paragraph.</p>

      <h3>List Example</h3>
      <ul>
        <li>First item</li>
        <li>Second item</li>
      </ul>

      <h3>Image Example</h3>
      <img src="/images/reactjs.jpg" alt="React" width="150"/>

      <h3>Form Example</h3>
      <input placeholder="Username" /><br />
      <input type="password" placeholder="Password" /><br />


    </div>
  );
}
