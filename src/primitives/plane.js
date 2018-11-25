var extendDeep = AFRAME.utils.extendDeep;

// The mesh mixin provides common material properties for creating mesh-based primitives.
// This makes the material component a default component and maps all the base material properties.
var meshMixin = AFRAME.primitives.getMeshMixin();

AFRAME.registerPrimitive('lp-plane', extendDeep({}, meshMixin, {
  // Preset default components. These components and component properties will be attached to the entity out-of-the-box.
  defaultComponents: {
    'low-poly-plane': {},
  },
  mappings: LowPoly.addMappings('low-poly-plane', {
    'width': 'low-poly-plane.width',
    'height': 'low-poly-plane.height',
    'segments-width': 'low-poly-plane.widthSegments',
    'segments-height': 'low-poly-plane.heightSegments',
  })
}));

AFRAME.registerComponent('low-poly-plane', {
  schema: LowPoly.addSchema({
    // Geometry
    width: {default: 1},
    height: {default: 1},
    widthSegments: {default: 10},
    heightSegments: {default: 10},
  }),

  play: function() {
    LowPoly.create(this, createPlaneGeometry);
  },

  update: function() {
    LowPoly.create(this, createPlaneGeometry);
  },

  remove: function () {
    this.el.removeObject3D('mesh');
  },

});

function createPlaneGeometry(data) {
  return new THREE.PlaneGeometry(data.width, data.height, data.widthSegments, data.heightSegments);
}
