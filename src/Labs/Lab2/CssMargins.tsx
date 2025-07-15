import "./index.css";

export default function CssMargins() {
  return (
    <div id="wd-css-margins" className="container p-2 border border-secondary mt-3">
      <h2>Margins</h2>

      {/* 1. Red border, yellow background, big padding top/left */}
      <div className="wd-border-fat wd-border-red wd-border-solid 
                      wd-bg-color-yellow wd-padded-top-left">
        Fat red border with yellow background and big padding above and left
      </div>

      {/* 2. Blue border, yellow background, big padding bottom */}
      <div className="wd-border-fat wd-border-blue wd-border-solid 
                      wd-bg-color-yellow wd-padded-bottom-right">
        Fat blue border with yellow background and big padding at bottom
      </div>

      {/* 3. Yellow border, blue background, big padding all around */}
      <div className="wd-border-fat wd-border-yellow wd-border-solid 
                      wd-bg-color-blue wd-fg-color-white wd-padding-fat">
        Fat yellow border with blue background and big padding all around
      </div>

      {/* 4. Red border, yellow background, margin bottom */}
      <div className="wd-border-fat wd-border-red wd-border-solid 
                      wd-bg-color-yellow wd-padding-fat wd-margin-bottom">
        Fat red border with yellow background and margin at bottom
      </div>

      {/* 5. Blue border, yellow background, margin left/right (centered) */}
      <div className="wd-border-fat wd-border-blue wd-border-solid 
                      wd-bg-color-yellow wd-padding-fat wd-margin-right-left">
        Fat blue border with yellow background and centered because margins on both sides
      </div>

      {/* 6. Yellow border, blue background, margin all around */}
      <div className="wd-border-fat wd-border-yellow wd-border-solid 
                      wd-bg-color-blue wd-fg-color-white wd-padding-fat wd-margin-all-around">
        Fat yellow border with blue background and big margins all around
      </div>
    </div>
  );
}
