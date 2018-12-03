import React from 'react';
import GalleryImage from '../components/GalleryImage/GalleryImage.jsx';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

const shallowWrapper = shallow(<GalleryImage />);

describe('<GalleryImage />', () => {
  it('renders GalleryImage component to page', () => {
    expect(shallowWrapper.find('img.image').exists()).to.equal(true);
  });

  it('should create state object', () => {
    expect(typeof shallowWrapper.state()).to.equal('object');
  });

})

describe('GalleryImage mount tests', () => {
  it('can set props', () => {
    const wrapper = mount(<GalleryImage isMatch={false}/>);
    expect(wrapper.props().isMatch).to.equal(false);
    wrapper.setProps( { isMatch: true } );
    expect(wrapper.props().isMatch).to.equal(true);
  })

  it('can set state', () => {
    const wrapper = mount(<GalleryImage />);
    wrapper.setState( { image: 'http://test.com' } );
    expect(wrapper.state().image).to.equal('http://test.com');
  })

  it('will update thumbnail if selected', () => {
    const wrapper = mount(<GalleryImage changeProfileImage={() => '' }/>);
    wrapper.instance().selectThumbnail({ target: 'test'});
    expect(wrapper.state().selected).to.equal(true);
  })

})