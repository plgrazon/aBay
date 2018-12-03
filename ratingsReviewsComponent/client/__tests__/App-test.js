import React from 'react';
import App from '../components/App.jsx';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

const shallowWrapper = shallow(<App />);

describe('App shallow tests', () => {
  it('renders App component to page', () => {
    expect(shallowWrapper.find('div.reviewsApp').exists()).to.equal(true);
  });
});