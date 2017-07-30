<template>
<div class="publish-wrapper">
  <BreadcrumbNav :config="breadcrumbNavConfig" />
  <Steps :config="stepsConfig" class="steps" :current="curStep"/>
  <PublishForm  v-show="curStep === 0" />
  <SelectForm v-show="curStep === 1" />
  <PublishSubmit authority="community" v-show="curStep === 2" @continute="onContinute" @manage="onManage"/>
</div>
</template>

<script>
import BreadcrumbNav from '@/components/breadcrumbNav';
import Steps from '@/components/steps';
import PublishForm from '@/components/publishForm';
import SelectForm from '@/components/selectForm';
import PublishSubmit from '@/components/publishSubmit';
import { setConfig } from '@/utils';
export default {
  components: {
    Steps,
    BreadcrumbNav,
    PublishForm,
    SelectForm,
    PublishSubmit
  },
  created () {
    this.breadcrumbNavConfig = setConfig.bind(this)();
  },
  data () {
    return {
      curStep: 2,
      breadcrumbNavConfig: [],
      stepsConfig: [
        '填写活动信息',
        '选择报名信息',
        '等待审核'
      ]
    };
  },
  methods: {
    onContinute () {
      this.curStep = 0;
    },
    onManage () {
      this.$router.push('/community/activity');
    }
  }
};
</script>

<style scoped>
.publish-wrapper {
  padding: 2.647% 7.32% 10px 7.32%;
}

.steps {
  margin: 1.88679% 0;
}
</style>
