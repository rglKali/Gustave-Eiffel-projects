import {useState} from "react";
import './CodeSample.css'

const CodeSample = ({ language, code }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);

    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  return (
    <div className="code-sample">
      <div className="code-header">
        <span className="code-language">{language}</span>
        <button className="code-copy" onClick={handleCopyClick}>
          {copySuccess ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default CodeSample;
