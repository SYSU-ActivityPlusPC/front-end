<template>
<div class="wrapper">
  <BreadcrumbNav :config="config" class="nav" />
  <router-view></router-view>
</div>  
</template>

<script>
import { BreadcrumbNav } from '@/components';
import { setConfig } from '@/utils';

export default {
  components: {
    BreadcrumbNav
  },
  data () {
    return {
      config: []
    };
  },
  created () {
    this.config = setConfig.bind(this)();
  },
  watch: {
    '$route' (from, to) {
      this.config = setConfig.bind(this)();
    }
  }
};
</script>

<style scoped>
.wrapper {
  padding: 2.647% 7.32% 10px 7.32%;  
}

.nav {
  margin-bottom: 1.8867%;
}
</style>
