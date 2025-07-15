import "./index.css";

export default function CssClassSelectors() {
  return (
    <div id="wd-css-class-selectors" className="container p-2 border border-secondary mt-3">
      <h3>Class Selectors</h3>
      <p className="wd-class-selector">
        This paragraph uses a class selector with blue on yellow.
      </p>
      <h4 className="wd-class-selector">
        This heading shares the same class styling.
      </h4>
    </div>
  );
}
