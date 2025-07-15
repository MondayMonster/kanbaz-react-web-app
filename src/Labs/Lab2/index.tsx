import React from 'react';
import { Link } from 'react-router-dom';

function Lab2() {
  return (
    <div className="container p-2 border border-secondary mt-3">
      <h1>Lab 2 - CSS Exercises</h1>
      <ul>
        <li><Link to="/lab2/id-selectors">CSS ID Selectors</Link></li>
        <li><Link to="/lab2/class-selectors">CSS Class Selectors</Link></li>
        <li><Link to="/lab2/document-structure">CSS Document Structure</Link></li>
        <li><Link to="/lab2/foreground-color">CSS Foreground Color</Link></li>
        <li><Link to="/lab2/background-color">CSS Background Color</Link></li>
        <li><Link to="/lab2/borders">CSS Borders</Link></li>
        <li><Link to="/lab2/margins">CSS Margins</Link></li>
        <li><Link to="/lab2/corners">CSS Corners</Link></li>
        <li><Link to="/lab2/dimensions">CSS Dimensions</Link></li>
        <li><Link to="/lab2/relative-position">CSS Relative Position</Link></li>
        <li><Link to="/lab2/absolute-position">CSS Absolute Position</Link></li>
        <li><Link to="/lab2/fixed-position">CSS Fixed Position</Link></li>
        <li><Link to="/lab2/z-index">CSS Z Index</Link></li>
        <li><Link to="/lab2/floating-images">CSS Floating Images</Link></li>
        <li><Link to="/lab2/grid-layout">CSS Grid Layout</Link></li>
        <li><Link to="/lab2/flex-layout">CSS Flex Layout</Link></li>
        <li><Link to="/lab2/react-icons">React Icons</Link></li>
      </ul>
      <p><Link to="/">Back to Main</Link></p>
    </div>
  );
}

export default Lab2;
