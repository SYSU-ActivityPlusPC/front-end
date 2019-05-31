<template>
<div class="footer">
  <p>备案号：粤ICP备17076034号-1 版权所有：中大活动</p>
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
.footer {
  height: 40px;
  display: flex;
  justify-content: center;
}
ul {
  height: inherit;
  list-style: none;
  counter-reset: count;
  display: flex;
  align-items: center;
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
