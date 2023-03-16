import { render, screen } from '@testing-library/react';
import { Chart } from '.';

describe('<ReactEcharts/>', () => {
  it('render', async () => {
    render(<Chart>Hello</Chart>);

    const elem = await screen.findByText('Hello');

    expect(elem.className).toBe('ReactEcharts');
  });
});
