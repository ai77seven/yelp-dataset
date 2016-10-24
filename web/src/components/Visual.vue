<template>
  <div class="visual">
    <h1>{{ msg }}</h1>
    <h1>Demo</h1>
    <div id="map"></div>
  </div>
</template>

<script>
/* eslint-disable quotes */
/* eslint-disable key-spacing */
/* eslint-disable comma-spacing */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
/* eslint-disable padded-blocks */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable comma-dangle */

/*
var script = document.createElement('script');
script.src = ''
document.getElementsByTagName('head')[0].appendChild(script);
*/

/*
var mscript = document.createElement('script');
mscript.async = false
mscript.defer = false
mscript.src = '';
document.getElementsByTagName('head')[0].appendChild(mscript);
*/

var myscript = document.createElement('script');
myscript.src = './static/map.js';
document.getElementsByTagName('head')[0].appendChild(myscript);

export default {
  name: 'visual',
  data () {
    return {
      msg: 'Welcome to Yelp Dataset Visualization Project'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
#map {
  height: 600px;
  width: 1000px;
  margin: 10px auto;
}
</style>
