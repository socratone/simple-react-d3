import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Home = () => {
  const element = useRef(null);

  useEffect(() => {
    const SVG_HEIGHT = 500;
    const RECT_WIDTH = 20;

    let svg = d3
      .select(element.current)
      .append('svg')
      .attr('width', 500)
      .attr('height', SVG_HEIGHT);

    svg
      .selectAll('rect')
      .data([100, 200, 300, 400, 500, 450, 350, 250, 150])
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (RECT_WIDTH * 2))
      .attr('y', (d) => SVG_HEIGHT - d)
      .attr('width', RECT_WIDTH)
      .attr('height', (d) => d)
      .attr('fill', 'dodgerblue');
  }, []);

  return (
    <div
      style={{ display: 'inline-block', border: '1px solid grey', margin: '20px' }}
      ref={element}
    ></div>
  );
};

export default Home;
