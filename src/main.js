class LowPoly {

  static addMappings(name, mapping) {
    return Object.assign({}, mapping, {
      amplitude: name + '.amplitude',
      'amplitude-variance': name + '.amplitudeVariance',
      seed: name + '.seed',
    });
  }

  static addSchema(schema) {
    return Object.assign({}, schema, {
      // Randomness amplitude and variance.
      amplitude: {default: 0.05},
      amplitudeVariance: {default: 0.001},

      // Material.
      flatShading: {default: true},

      // Randomness
      seed: {default: "apples"},
    });
  }

  static create(that, geometryGenerator) {
    const data = that.data,
          el = that.el;

    let material = el.components.material;
    let geometry = geometryGenerator(data);
    geometry.mergeVertices();
    LowPoly.randomizeVertices(data, geometry);

    if (!material) {
      material = {};
      material.material = new THREE.MeshPhongMaterial();
    }

    if (data.flatShading) {
      material.material.setValues({
        flatShading: true,
      });
    }

    that.mesh = new THREE.Mesh(geometry, material.material);
    el.setObject3D('mesh', that.mesh);
  }

  static update(oldData, newData, geometry) {
    if (!geometry) {
      console.log('[ERR] Passed geometry in update is invalid.')
      return;
    }
    LowPoly.randomizeVertices(newData, geometry);
  }

  static randomizeVertices(data, geometry) {
      Random.seed(data.seed);
      for (let v, i = 0, l = geometry.vertices.length; i < l; i++) {
        v = geometry.vertices[i];

        LowPoly.randomizeVertexDimension(v, 'x', data.amplitude, data.amplitudeVariance);
        LowPoly.randomizeVertexDimension(v, 'y', data.amplitude, data.amplitudeVariance);
        LowPoly.randomizeVertexDimension(v, 'z', data.amplitude, data.amplitudeVariance);
      }
      geometry.verticesNeedUpdate = true;
  }

  static randomizeVertexDimension(vertex, dimension, amplitude, amplitudeVariance) {
    let ang = Random.random() * Math.PI * 2,
        amp = amplitude + Random.random() * amplitudeVariance;

    const key = 'original-' + dimension;
    if (!(key in vertex)) {
      vertex[key] = vertex[dimension];
    }
    var value = vertex[key];

    vertex[dimension] = value + Math.sin(ang) * amp;
  }
}

class Random {
  // https://stackoverflow.com/a/47593316/4855984

  static seed(seed) {
    // Create a xfnv1a state:
    var seed = Random.xfnv1a(seed.toString());

    // output one 32-bit hash to produce the seed for mulberry32.
    this.random = Random.mulberry32(seed());
  }

  static xfnv1a(k) {
      for(var i = 0, h = 2166136261 >>> 0; i < k.length; i++)
          h = Math.imul(h ^ k.charCodeAt(i), 16777619);
      return function() {
          h += h << 13; h ^= h >>> 7;
          h += h << 3;  h ^= h >>> 17;
          return (h += h << 5) >>> 0;
      }
  }

  static mulberry32(a) {
      return function() {
        var t = a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
      }
  }

  static random() {
    return this.random();
  }
}
