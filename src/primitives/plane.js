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

  /**
   * Use play() instead of init(), because component mappings – unavailable as dependencies – are
   * not guaranteed to have parsed when this component is initialized.
   */
  play: function() {
    const data = this.data;
    const geometry = new THREE.PlaneGeometry(data.width, data.height, data.widthSegments, data.heightSegments);
    LowPoly.play(this, geometry);

    this.geometry = geometry;
  },

  update: function(oldData) {
    LowPoly.update(oldData, this.data, this.geometry);
  },

  remove: function () {
    this.el.removeObject3D('mesh');
  },

});
