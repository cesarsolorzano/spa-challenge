import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Pagination from './Pagination';

describe('Pagination', () => {
   it('should render only next and prev items', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Pagination
        changePage={() => {}}
        total={0}
        limit={10}
        offset={0}
      />);
    const result = renderer.getRenderOutput();
    const items = result.props.children.props.children;

    expect(items[0].props.className).toBe('disabled');
    expect(items[1].length).toBe(0);
    expect(items[2].props.className).toBe('disabled');
  });

  it('should render items with disabled class', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Pagination
        changePage={() => {}}
        total={10}
        limit={10}
        offset={0}
      />);
    const result = renderer.getRenderOutput();
    const items = result.props.children.props.children;

    expect(items[0].props.className).toBe('disabled');
    expect(items[1].length).toBe(1);
    expect(items[2].props.className).toBe('disabled');
  });

  it('should render the second page', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Pagination
        changePage={() => {}}
        total={20}
        limit={10}
        offset={0}
      />);
    const result = renderer.getRenderOutput();
    const items = result.props.children.props.children;
    expect(items[0].props.className).toBe('disabled');
    expect(items[1].length).toBe(2);
    expect(items[2].props.className).toBe('');
  });

  it('should render the third page', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Pagination
        changePage={() => {}}
        total={30}
        limit={10}
        offset={10}
      />);
    const result = renderer.getRenderOutput();
    const items = result.props.children.props.children;
    expect(items[0].props.className).toBe('');
    expect(items[1].length).toBe(3);
    expect(items[2].props.className).toBe('');
  });

  it('should render the fifth page', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Pagination
        changePage={() => {}}
        total={50}
        limit={10}
        offset={0}
      />);
    const result = renderer.getRenderOutput();
    const items = result.props.children.props.children;
    expect(items[0].props.className).toBe('disabled');
    expect(items[1].length).toBe(5);
    expect(items[2].props.className).toBe('');
  });

  
  it('should render the last item as disabled', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Pagination
        changePage={() => {}}
        total={50}
        limit={10}
        offset={40}
      />);
    const result = renderer.getRenderOutput();
    const items = result.props.children.props.children;
    expect(items[0].props.className).toBe('');
    expect(items[1].length).toBe(5);
    expect(items[2].props.className).toBe('disabled');
  });

  it('should render the last page with less items', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Pagination
        changePage={() => {}}
        total={51}
        limit={10}
        offset={40}
      />);
    const result = renderer.getRenderOutput();
    const items = result.props.children.props.children;
    expect(items[0].props.className).toBe('');
    expect(items[1].length).toBe(6);
    expect(items[2].props.className).toBe('');
  });
});

