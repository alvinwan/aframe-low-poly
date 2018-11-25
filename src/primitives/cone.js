var extendDeep = AFRAME.utils.extendDeep;

// The mesh mixin provides common material properties for creating mesh-based primitives.
// This makes the material component a default component and maps all the base material properties.
var meshMixin = AFRAME.primitives.getMeshMixin();

AFRAME.registerPrimitive('lp-cone', extendDeep({}, meshMixin, {
  // Preset default components. These components and component properties will be attached to the entity out-of-the-box.
  defaultComponents: {
    'low-poly-cone': {},
  },
  mappings: LowPoly.addMappings('low-poly-cone', {
    'radius-top': 'low-poly-cone.topRadius',
    'radius-bottom': 'low-poly-cone.bottomRadius',
    height: 'low-poly-cone.height',
    'segments-radial': 'low-poly-cone.radialSegments',
    'segments-height': 'low-poly-cone.heightSegments',
  })
}));

AFRAME.registerComponent('low-poly-cone', {
  schema: LowPoly.addSchema({
    // Geometry
    topRadius: {default: 1},
    bottomRadius: {default: 1},
    height: {default: 1},
    radialSegments: {default: 10},
    heightSegments: {default: 10},
  }),

  /**
   * Use play() instead of init(), because component mappings – unavailable as dependencies – are
   * not guaranteed to have parsed when this component is initialized.
   */
  play: function() {
    const data = this.data;
    const geometry = new THREE.CylinderGeometry(
      data.topRadius, data.bottomRadius, data.height, data.radialSegments, data.heightSegments);
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
