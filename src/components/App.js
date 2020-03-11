import React from 'react';
import Panel from "./Panel.js"

export default function App() {
  return (
    <div className="App">
      <h1>Noroff Task</h1>
      <Panel heading="Mitt første panel" content="Kommer jeg først?" img="https://i.ytimg.com/vi/jHWKtQHXVJg/maxresdefault.jpg">
        <p>Jeg er bare child</p>
      </Panel>
      <Panel heading="Det andre panelet" content="Innhold" img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-cats-are-best-pets-1559241235.jpg?crop=0.586xw:0.880xh;0.0684xw,0.0611xh&resize=640:*">
        <p>Child content</p>
      </Panel>
      <Panel heading="Det siste panelet" content="Ingen kommentar" img="https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg">
      </Panel>
    </div>
  );
}
