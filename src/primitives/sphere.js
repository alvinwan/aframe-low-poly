var extendDeep = AFRAME.utils.extendDeep;

// The mesh mixin provides common material properties for creating mesh-based primitives.
// This makes the material component a default component and maps all the base material properties.
var meshMixin = AFRAME.primitives.getMeshMixin();

AFRAME.registerPrimitive('lp-sphere', extendDeep({}, meshMixin, {
  // Preset default components. These components and component properties will be attached to the entity out-of-the-box.
  defaultComponents: {
    'low-poly-sphere': {},
  },
  mappings: LowPoly.addMappings('low-poly-sphere', {
    'radius': 'low-poly-sphere.radius',
    'segments-height': 'low-poly-sphere.heightSegments',
    'segments-width': 'low-poly-sphere.widthSegments',
  })
}));

AFRAME.registerComponent('low-poly-sphere', {
  schema: LowPoly.addSchema({
    // Geometry
    radius: {default: 1},
    heightSegments: {default: 5},
    widthSegments: {default: 5}
  }),

  play: function() {
    LowPoly.create(this, createSphereGeometry);
  },

  update: function() {
    LowPoly.create(this, createSphereGeometry);
  },

  remove: function () {
    this.el.removeObject3D('mesh');
  },

});

function createSphereGeometry(data) {
  return new THREE.SphereGeometry(data.radius, data.widthSegments, data.heightSegments);
}
