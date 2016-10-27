import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import Example from '../src/component/example';

describe('<Example />', function () {
  beforeEach(function() {
    this.wrapper = shallow(<Example />);
  });

  it('should have a div', function () {
    expect(this.wrapper.find('div')).to.have.length(1);
  });
});