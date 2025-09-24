 <section id="examples">
            <h2>Examples</h2>
            <menu>
                {/* Need to pass arrow function a pointer to handleSelect so it wont run immediately with () after handleSelect */}
                <TabButton isSelected={selectedTopic == 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic == 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic == 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic == 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>
            { tabContent }
        </section>

SAME AS

   <Section title="Examples" id="examples">
            <menu>
                {/* Need to pass arrow function a pointer to handleSelect so it wont run immediately with () after handleSelect */}
                <TabButton isSelected={selectedTopic == 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic == 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic == 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic == 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>
            { tabContent }
        </Section>