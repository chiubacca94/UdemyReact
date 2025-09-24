  THIS WONT WORK BECAUSE YOU NEED TO USESTATE
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    console.log("Clicked on " + selectedButton)
    tabContent = `You selected ${selectedButton}. This is where the example will go.`
  }

<TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>

        
{tabContent}