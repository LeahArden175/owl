import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './Participant';
import renderer from 'react-test-renderer';


//smoke test
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant />, div);
    ReactDOM.unmountComponentAtNode(div);
});


// snapshot test
it('renders participant if logged in', () => {
    const tree = renderer
        .create(<Participant name={'bob'} inSession={true}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})