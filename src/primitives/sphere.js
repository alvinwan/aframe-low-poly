LowPolyFactory.simple('sphere', createSphereGeometry, [
  {hyphenated: 'radius', camelCased: 'radius', schemaValue: {default: 1}},
  {hyphenated: 'segments-width', camelCased: 'widthSegments', schemaValue: {default: 10}},
  {hyphenated: 'segments-height', camelCased: 'heightSegments', schemaValue: {default: 10}},
])


function createSphereGeometry(data) {
  return new THREE.SphereGeometry(data.radius, data.widthSegments, data.heightSegments);
}
