import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("## Mark down Peview");
  const handleChange = e => {
    setMarkdown(e.target.value);
  };
  return (
    <main>
      <section className="markdown">
        <textarea
          onChange={e => handleChange(e)}
          value={markdown}
          className="input"
        ></textarea>
        <article className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
