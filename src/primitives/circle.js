var extendDeep = AFRAME.utils.extendDeep;

// The mesh mixin provides common material properties for creating mesh-based primitives.
// This makes the material component a default component and maps all the base material properties.
var meshMixin = AFRAME.primitives.getMeshMixin();

AFRAME.registerPrimitive('lp-circle', extendDeep({}, meshMixin, {
  // Preset default components. These components and component properties will be attached to the entity out-of-the-box.
  defaultComponents: {
    'low-poly-circle': {},
  },
  mappings: LowPoly.addMappings('low-poly-circle', {
    'radius': 'low-poly-circle.radius',
    'segments': 'low-poly-circle.segments',
  })
}));

AFRAME.registerComponent('low-poly-circle', {
  schema: LowPoly.addSchema({
    // Geometry
    radius: {default: 1},
    segments: {default: 10},
  }),

  play: function() {
    LowPoly.create(this, createCircleGeometry);
  },

  update: function() {
    LowPoly.create(this, createCircleGeometry);
  },

  remove: function () {
    this.el.removeObject3D('mesh');
  },

});

function createCircleGeometry(data) {
  return new THREE.CircleGeometry(data.radius, data.segments);
}
