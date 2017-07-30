<template>
<div class="wrapper">
  <BreadcrumbNav :config="breadcrumbNavConfig" class="nav" />
  <router-view></router-view>
</div>
</template>

<script>
// import {BreadcrumbNav} from '@/components';
import BreadcrumbNav from '@/components/breadcrumbNav';
import { setConfig } from '@/utils';
export default {
  components: {
    BreadcrumbNav
  },
  data () {
    return {
      breadcrumbNavConfig: []
    };
  },
  created () {
    this.breadcrumbNavConfig = setConfig.bind(this)();
  },
  watch: {
    '$route' (from, to) {
      this.breadcrumbNavConfig = setConfig.bind(this)();
    }
  }
};
</script>

<style scoped>
.wrapper {
  padding: 2.647% 7.32% 10px 7.32%;
}
.nav {
  margin-bottom: 1.471%;
}
</style>
