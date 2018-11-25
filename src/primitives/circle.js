LowPolyFactory.simple('circle', createCircleGeometry, [
  {hyphenated: 'radius', camelCased: 'radius', schemaValue: {default: 1}},
  {hyphenated: 'segments', camelCased: 'segments', schemaValue: {default: 10}},
])

function createCircleGeometry(data) {
  return new THREE.CircleGeometry(data.radius, data.segments);
}
