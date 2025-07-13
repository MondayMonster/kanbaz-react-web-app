import "./index.css";

export default function CssCorners() {
  return (
    <div id="wd-css-corners">
      <h2>Corners</h2>

      <div className="wd-corner-top wd-bg-color-yellow wd-border-fat wd-border-blue wd-border-solid wd-padding-fat">
        Rounded top corners
      </div>

      <div className="wd-corner-bottom wd-bg-color-blue wd-border-fat wd-border-red wd-border-solid wd-padding-fat wd-fg-color-white">
        Rounded bottom corners
      </div>

      <div className="wd-corner-all wd-bg-color-red wd-border-fat wd-border-yellow wd-border-solid wd-padding-fat wd-fg-color-white">
        All corners rounded
      </div>

      <div className="wd-corner-except-top-right wd-bg-color-gray wd-border-fat wd-border-blue wd-border-solid wd-padding-fat">
        Rounded corners except top right
      </div>
    </div>
  );
}
