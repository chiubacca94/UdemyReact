import { useState } from 'react'; // useState is a Hook that must be called in main component function component
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import Section from '../Section';
import Tabs from '../TabButton/Tabs';

export default function Examples() {

    let [selectedTopic, setSelectedTopic] = useState(); // useState returns an array with 2 elements: default, function to update state
    
    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        console.log("Clicked on " + selectedButton)
        setSelectedTopic(selectedButton);
    }
    
    let tabContent = <p>Please select a topic.</p>
    
    if (selectedTopic) {
        tabContent = ( 
          <div id="tab-content">
            <h3>{ EXAMPLES[selectedTopic].title }</h3>
            <p>{ EXAMPLES[selectedTopic].description }</p>
            <pre>
              <code>
                { EXAMPLES[selectedTopic].code }
              </code>
            </pre>
          </div>
        )
    }
    
    return (
        <Section title="Examples" id="examples">
            <Tabs 
              buttons={
              <>
               {/* Need to pass arrow function a pointer to handleSelect so it wont run immediately with () after handleSelect */}
                <TabButton isSelected={selectedTopic == 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic == 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic == 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic == 'state'} onSelect={() => handleSelect('state')}>State</TabButton>

              </>
            }>
              {tabContent}
            </Tabs>
        </Section>
    )
}