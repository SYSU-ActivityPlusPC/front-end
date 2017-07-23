<template>
<div class="wrapper">
  <ul>
    <li>了解平台</li>
    <li>了解我们</li>
    <li>联系我们</li>
  </ul>
</div>
</template>

<script>
export default {
};
</script>

<style scoped>
.wrapper {
  padding: 20px 0;
  display: flex;
  justify-content: center;
}
ul {
  list-style: none;
  counter-reset: count;
}


li::before {
  content: "\02022";
  color: rgb(136, 136, 136);
}

li {
  display: inline-block;
  color: rgb(136, 136, 136);
  margin: 0 60px;
}
</style>
