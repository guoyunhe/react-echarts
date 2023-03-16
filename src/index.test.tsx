import { render, screen } from '@testing-library/react';
import { ReactEcharts } from '.';

describe('<ReactEcharts/>', () => {
  it('render', async () => {
    render(<ReactEcharts>Hello</ReactEcharts>);

    const elem = await screen.findByText('Hello');

    expect(elem.className).toBe('ReactEcharts');
  });
});
