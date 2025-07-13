import "./index.css";

export default function CssDocumentStructure() {
  return (
    <div id="wd-css-document-structure">
      <div className="wd-selector-1">
        <h3>Document Structure Selectors</h3>
        <div className="wd-selector-2">
          <p className="wd-selector-3">
            This paragraph has white text on red background.
            <br />
            <span className="wd-selector-4">
              This span is blue on yellow.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
