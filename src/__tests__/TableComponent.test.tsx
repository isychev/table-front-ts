import * as React from 'react';
import { mount } from 'enzyme';
import TableComponent from '../TableComponent';

describe('test TableComponent', () => {
  it('should return null without tableConfig', () => {
    const props: any = {};
    const wrapper = mount(<TableComponent {...props} />);
    expect(wrapper.html()).toEqual(null);
  });
});
