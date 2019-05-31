# A-Frame Low Poly

Low poly add-ons for a-frame virtual reality models. [View the aframe low-poly demo &raquo;](http://alvinwan.com/aframe-low-poly/demo)

<img width="1429" alt="Screen Shot 2019-05-30 at 11 42 04 PM" src="https://user-images.githubusercontent.com/2068077/58686776-969e3700-8334-11e9-8b91-2ed7b0a5c56a.png">

Take any existing a-frame primitive, such as `a-sphere` and replace the prefix to obtain a low-poly
version, such as `lp-sphere`. For example, the below is a low-poly sphere for a tree's foliage:

```
<lp-sphere color="#59810C" max-amplitude="0.2" position="0 0.6 0"></lp-sphere>
```

The above spheres are used in the demo pictured below at [aaalv.in/vr/low-poly-trees](http://alvinwan.com/vr/low-poly-trees). For more, see [aaalv.in/vr](http://alvinwan.com/vr)

<img width="1203" alt="screen shot 2018-11-24 at 11 32 11 pm" src="https://user-images.githubusercontent.com/2068077/48976744-31921d80-f041-11e8-8aa3-1959bc6fa65b.png">

# Usage

Looks like what you need? To get started, include the minified javascript in your a-frame project.

```
<script src="https://cdn.jsdelivr.net/gh/alvinwan/aframe-low-poly@0.0.5/dist/aframe-low-poly.min.js"></script>
```

## Low-Poly Attributes

Every low-poly object supports the following attributes. Modify the following attributes just like you would any other AFrame VR attribute:

**`max-amplitude: <x double> <y double> <z double>`**

**`min-amplitude: <x double> <y double> <z double>`**

Maximum and minimum amount of perturbation allowed for each vertex. The vertex will not be moved more or less than this amount away from the original position.

Example:

```
<lp-plane max-amplitude="1 0 0" min-amplitude="0.5 0 0"></lp-plane>
```

**`seed`**

Seed for random-number generator, allowing you to fix randomness during design.

> **`max-amplitude-difference: <x double> <y double> <z double>`** *coming soon*
>
> **`min-amplitude-difference: <x double> <y double> <z double>`** *coming soon*
>
> Maximum and minimum difference in perturbation between adjacent points. For now,
> use the curvature specification below to achieve a similar effect.

## Terrain

**`LowPolyTerrain.registerCurvature(componentName, function({x, y, z}, {xmin, ymin, zmin}, {xmax, ymax, zmax})`**

Allows you to specify curvature of the surface. Function that accepts the vertex's *original position* and outputs the vertex's new position. This is applied *before* customizable randomization. All random perturbations are applied to the vertex's new position.

Example:

```
LowPolyTerrain.registerCurvature('sine', function (vertex, min, max) {
    var py = (vertex.y - min.y) / (max.y - min.y);
    var z = Math.sin(py * 2 * Math.PI) + min.z;
    return {x: vertex.x, y: vertex.y, z: z}
});
```

## Cloning

**`clone=<selector>`**

Duplicate entire entities without repeating common HTML. For example, say you have a template tree and many trees in your environment. Simply create one tree, and use the `clone` attribute for the rest, changing the position and rotating as necessary. This keeps your code streamlined and eases development (e.g., changing tree trunks for all cloned trees involves a single-line change)

Example:

```
<a-entity id="tree" ... ></a-entity>
<a-entity clone="#tree"></a-entity>
```

## Projects

Projects that use `aframe-low-poly`:

- Ergo ([aaalv.in/ergo](http://alvinwan.com/ergo)): an endless runner game
- Tree Editor ([trees.aaalv.in](http://trees.alvinwan.com)): a simplistic low-poly tree editor
- Tree Carousel ([aaalv.in/vr/low-poly-trees](http://alvinwan.com/vr/low-poly-trees)): a demo carousel for low-poly trees
