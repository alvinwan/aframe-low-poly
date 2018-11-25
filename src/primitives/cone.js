LowPolyFactory.simple('cone', createCylinderGeometry, [
  {hyphenated: 'radius-top', camelCased: 'topRadius', schemaValue: {default: 1}},
  {hyphenated: 'radius-bottom', camelCased: 'bottomRadius', schemaValue: {default: 1}},
  {hyphenated: 'height', camelCased: 'height', schemaValue: {default: 1}},
  {hyphenated: 'segments-radial', camelCased: 'radialSegments', schemaValue: {default: 10}},
  {hyphenated: 'segments-height', camelCased: 'heightSegments', schemaValue: {default: 10}},
])

function createCylinderGeometry(data) {
  return new THREE.CylinderGeometry(
    data.topRadius, data.bottomRadius, data.height, data.radialSegments, data.heightSegments);
}
