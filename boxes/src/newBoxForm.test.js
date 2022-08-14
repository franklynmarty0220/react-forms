import React from 'react';
import { render, screen } from '@testing-library/react';
import NewBoxForm from './newBoxForm'

it("renders without crashing", function() {
    render(<NewBoxForm />);
  });
  
  it("matches snapshot", function() {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  });