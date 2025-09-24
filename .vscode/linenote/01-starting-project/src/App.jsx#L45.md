                // title={concept.title} 
                // description={concept.description}
                // image={concept.image}

SAME BUT SHORTER WITH &&:

{!selectedTopic &&  <p>Please select a topic.</p> }
          {selectedTopic && (<div id="tab-content">
            <h3>{ EXAMPLES[selectedTopic].title }</h3>
            <p>{ EXAMPLES[selectedTopic].description }</p>
            <pre>
              <code>
                { EXAMPLES[selectedTopic].code }
              </code>
            </pre>
          </div>) }

...

          {!selectedTopic ?  <p>Please select a topic.</p> : null }
          {selectedTopic ? (<div id="tab-content">
            <h3>{ EXAMPLES[selectedTopic].title }</h3>
            <p>{ EXAMPLES[selectedTopic].description }</p>
            <pre>
              <code>
                { EXAMPLES[selectedTopic].code }
              </code>
            </pre>
          </div>) : null }