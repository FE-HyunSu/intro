/*
barChart를 그려주는 함수입니다.
d3.js 기반으로 svg로 차트를 그립니다. 
매개변수로, tagName 과 chartData를 가집니다.
querySelector(tagName) 요소에 해당 차트를 그립니다.
chartData를 통해, 차트의 세부 정보를 적용합니다.
{
	meta: { barWidth: ${Number}, boxHeight: ${Number}, detailView: true, unit: {String}, radius: ${Number} },
	data: [
		{ name: ${String}, value: ${Number}, color: ${String ColorCode} },
		...
	],
}
*/
function chartBar(tagName, chartData) {
  const chartBox = document.querySelector(tagName);
  const data = chartData.data; // chart 상세 Data
  const width = chartData.meta.boxWidth; // 차트 영역의 가로값.
  const height = chartData.meta.boxHeight; // 차트 영역의 세로값.
  const chartRadius = chartData.meta.radius; // 차트 모서리 radius.
  const chartUnit = chartData.meta.unit; // 차트 단위.
  const margin = { top: 40, left: 40, bottom: 40, right: 40 }; // margin 값을 객체로 지정해둔다.
  const detailView = chartData.meta.detailView;
  chartBox.innerHTML = '';

  let dataValues = data.map((item) => {
    return Number(item.value);
  });

  // x
  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.name)) // x축과 매칭되는 이름을 찾는다. 시작되는 입력 영역
    .range([margin.left, width - margin.right]) // x축 그래프 출력범위
    .padding(0.5); // 그래프 두께의 padding 값. 0 ~ 1 사이로 적용.

  const y = d3
    .scaleLinear()
    .domain([0, Math.max(...dataValues)]) // 입력영역
    .nice()
    .range([height - margin.bottom, margin.top]); // 출력범위로 매핑

  const xAxis = (g) =>
    g
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .call((g) => g.select('.domain').remove())
      .call((g) => g.selectAll('line').remove());

  const yAxis = (g) =>
    g
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y))
      .call((g) => g.select('.domain').remove())
      .call((g) => g.selectAll('line').attr('x2', width).style('stroke', '#f5f5f5'));

  // svg 변수에 tagName 선택자에, svg 타입으로 추가하고, 그래프의 크기 width, height만큼 지정한다.
  const svg = d3
    .select(tagName)
    .append('svg')
    .style('width', width)
    .style('height', height)
    .style('max-width', '100%')
    .style('max-height', '100%')
    .attr('viewBox', '0 0 ' + width + ' ' + height);

  svg.append('g').call(xAxis); // x축
  svg.append('g').call(yAxis); // y축

  if (detailView) {
    // unit 표기
    svg
      .append('g') // g태그 추가.
      .selectAll('rect')
      .data(data)
      .enter()
      .append('text') // g > text 추가.
      .text((d) => d.value + chartUnit) // text에 value 값 입력.
      .attr('x', (d) => x(d.name))
      .attr('y', (d) => y(d.value))
      .attr('dy', '-12')
      .style('font-weight', 'normal')
      .style('font-size', '2.8rem')
      .attr('alignment-baseline', 'middle');
  }
  // chart item
  svg
    .append('g')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d) => x(d.name)) // 데이터와 매칭되는 요소에서 시작됨.
    .attr('y', (d) => y(d.value)) // y축 시작점
    .attr('rx', chartRadius) // 그래프 radius 값.
    .attr('width', x.bandwidth()) // 그래프 폭.
    .attr('data-x', (d) => d.name) // 마우스 오버 데이터 이름.
    .attr('data-y', (d) => d.value) // 마우스 오버 데이터 값.
    .attr('data-color', (d) => d.color) // 마우스 오버 데이터 박스 bg.
    .transition() // 모션을 줄거야, 이 분기점 기준으로 아래에 선언.
    .duration(1500) // 속도는 1.5s.
    .attr('height', (d) => y(0) - y(d.value)) // 높이값 지정.
    .attr('fill', (d) => d.color); // 차트 막대 bg.

  svg.node();
}

/*
  pie chart를 그려줍니다.
  tagName 을 매개변수로 갖습니다.
  
*/
function chartPie(tagName) {
  const chartBox = document.querySelector(tagName);
  // chart의 width, height 값을 선언.
  const svgDimensions = {
    width: 300,
    height: 300,
  };
  // width, height 값의 절반만큼 radius 값을 지정하여, pie 모양을 만든다.
  const radius = Math.min(svgDimensions.width, svgDimensions.height) / 2;
  // pie chart에 입력할 값들을 적용한다.
  const data = [420, 80, 130, 210, 510, 80];
  // svg 변수에 chart 적용.
  const svg = d3
    .select(tagName)
    .append('svg')
    .attr('width', svgDimensions.width)
    .attr('height', svgDimensions.height)
    .style('border', '1px solid rgba(0,0,0,0.1)');

  const g = svg
    .append('g')
    .attr('transform', `translate(${svgDimensions.width / 2}, ${svgDimensions.height / 2})`);
  const color = d3.scaleOrdinal(['#ff9800', '#ffa726', '#ffb74d', '#ffcc80', '#ffe0b2', '#fff3e0']);

  const pie = d3.pie();
  const arc = d3.arc().innerRadius(0).outerRadius(radius);
  const arcs = g
    .selectAll('arc')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class', 'arc')
    .on('mouseover', onMouseOver)
    .on('mouseout', onMouseOut);

  arcs
    .append('path')
    .attr('fill', (d, i) => color(i))
    .attr('d', arc);

  arcs
    .append('text')
    .attr('transform', (d) => `translate(${arc.centroid(d)})`)
    .text((d) => d.value)
    .attr('font-family', 'sans-serif')
    .attr('font-size', '18px')
    .attr('font-weight', 'bold')
    .attr('fill', '#fff')
    .attr('text-anchor', 'middle')
    .attr('display', 'none');

  function onMouseOut(d, i) {
    d3.select(this).select('path').transition().duration(200).style('fill', color(i));
    d3.select(this).select('text').attr('display', 'none');
  }

  function onMouseOver(d, i) {
    d3.select(this).select('path').transition().duration(200).style('fill', '#e65100');
    d3.select(this).select('text').attr('display', 'block');
  }
}
