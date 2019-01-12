# A-Frame Low Poly

Low poly add-ons for a-frame virtual reality models. Take any existing a-frame
primitive, such as `a-sphere` and replace the prefix to obtain a low-poly
version, such as `lp-sphere`. For example, the below is a low-poly sphere
for a tree's foliage:

```
<lp-sphere position="0 0.6 0"
           color="#59810C"
           radius="1"
           segments-width="10"
           segments-height="10"
           amplitude="0.2"></lp-sphere>
```

You can view the demo pictured below at [aaalv.in/vr/low-poly-trees](http://alvinwan.com/vr/low-poly-trees).

<img width="1203" alt="screen shot 2018-11-24 at 11 32 11 pm" src="https://user-images.githubusercontent.com/2068077/48976744-31921d80-f041-11e8-8aa3-1959bc6fa65b.png">

To get started, include the minified javascript in your a-frame project.

```
<script src="https://cdn.jsdelivr.net/gh/alvinwan/aframe-low-poly@0.0.1/dist/aframe-low-poly.min.js"></script>
```

# Usage

Every low-poly object supports the following attributes:

- `amplitude`: Amount of perturbation for each vertex
- `amplitude-variance`: Variance in amount of perturbation for each vertex
- `seed`: Seed for random-number generator, allowing you to fix randomness during design

Projects that use `aframe-low-poly`:

- Ergo ([aaalv.in/ergo](http://alvinwan.com/ergo)): an endless runner game
- Tree Editor ([trees.aaalv.in](http://trees.alvinwan.com)): a simplistic low-poly tree editor
- Tree Carousel ([aaalv.in/vr/low-poly-trees](http://alvinwan.com/vr/low-poly-trees)): a demo carousel for low-poly trees
