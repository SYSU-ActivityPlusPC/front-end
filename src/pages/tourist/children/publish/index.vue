<template>
<div class="publish-wrapper">
  <BreadcrumbNav :config="breadcrumbNavConfig" />
  <Steps :config="stepsConfig" :current="currentStep" class="steps"/>
  <PublishForm v-if="currentStep === 0" @next="currentStep = 1" />
  <publishSubmit v-else @continute="currentStep = 0" />
</div>
</template>

<script>
import publishSubmit from './publishSubmit';
import { BreadcrumbNav, Steps, PublishForm } from '@/components';

export default {
  components: {
    BreadcrumbNav,
    Steps,
    PublishForm,
    publishSubmit
  },
  data () {
    return {
      breadcrumbNavConfig: [
        {
          href: '/tourist',
          text: '主页'
        },
        {
          href: '/tourist/publish',
          text: '发布活动'
        }
      ],
      stepsConfig: [
        '填写活动信息',
        '等待审核'
      ],
      currentStep: 1
    };
  }
};
</script>

<style scoped>
.publish-wrapper {
  padding: 20px 7.32%;
}
.steps {
  margin: 20px 0;
}
</style>
