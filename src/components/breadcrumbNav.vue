<template>
<Breadcrumb separator="<span class='breadcrumb-separator'>></span>">
  <template v-for="(item, index) in config">
    <BreadcrumbItem :href="item.href" :key="index">{{item.text}}</BreadcrumbItem>
  </template>
</Breadcrumb>  
</template>

<script>
import Breadcrumb from 'iview/src/components/breadcrumb';
export default {
  props: {
    config: {
      type: Array,
      required: true
    }
  },
  components: {
    Breadcrumb,
    BreadcrumbItem: Breadcrumb.Item
  }
};
</script>

<style scoped>
.breadcrumb-separator {
  color: #333333;
}
</style>
