<template>
  <div id="app">
    <iRow type="flex" class="row-height">
      <iCol span="4">
        <navMenu />
      </iCol>
    </iRow>
  </div>
</template>

<script>
import navMenu from '@/components/navMenu';
import { Row, Col } from 'iview';

export default {
  name: 'app',
  components: {
    navMenu,
    iRow: Row,
    iCol: Col
  }
};
</script>

<style scoped>
#app {
  height: 100%;
}
.row-height {
  height: 100%;
}
</style>
