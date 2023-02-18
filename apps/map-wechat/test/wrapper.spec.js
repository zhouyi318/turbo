import React from 'react'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai'
import sinon from 'sinon'
import Wrapper from '../src/components/Wrapper'

configure({ adapter: new Adapter() });

describe('Wrapper', () => {
  it('renders with text', () => {
    const text = 'test text'
    const wrapper = shallow((
      <Wrapper>
        {text}
      </Wrapper>
    ));
    expect(wrapper.contains(text)).to.equal(true);
  })

  it('fires the onClick callback', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Wrapper onClick={onButtonClick} />);
    wrapper.find('div').simulate('click');
    expect(onButtonClick).to.have.property('called', true);
  })
})
