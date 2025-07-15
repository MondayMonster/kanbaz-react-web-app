import "./index.css"; 

export default function CssIdSelectors() {
  return (
    <div id="wd-css-id-selectors" className="container p-2 border border-secondary mt-3">
      <h3>ID selectors</h3>
      <p id="wd-id-selector-1">
        This is a white on red paragraph using ID selector.
      </p>
      <p id="wd-id-selector-2">
        This is a black on yellow paragraph using a different ID selector.
      </p>
    </div>
  );
}
