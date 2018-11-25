LowPolyFactory.simple('plane', createPlaneGeometry, [
  {hyphenated: 'width', camelCased: 'width', schemaValue: {default: 1}},
  {hyphenated: 'height', camelCased: 'height', schemaValue: {default: 1}},
  {hyphenated: 'segments-width', camelCased: 'widthSegments', schemaValue: {default: 10}},
  {hyphenated: 'segments-height', camelCased: 'heightSegments', schemaValue: {default: 10}},
])

function createPlaneGeometry(data) {
  return new THREE.PlaneGeometry(data.width, data.height, data.widthSegments, data.heightSegments);
}
