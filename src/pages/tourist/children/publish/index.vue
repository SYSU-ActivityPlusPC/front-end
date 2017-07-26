<template>
<div class="publish-wrapper">
  <BreadcrumbNav :config="breadcrumbNavConfig" />
  <Steps :config="stepsConfig" :current="currentStep" class="steps"/>
  <publishForm v-if="currentStep === 0" @next="currentStep = 1" />
  <publishSubmit v-else @continute="currentStep = 0" />
</div>
</template>

<script>
import BreadcrumbNav from '@/components/breadcrumbNav';
import Steps from '@/components/steps';
import publishForm from '@/components/publishForm';
import publishSubmit from './publishSubmit';

export default {
  components: {
    BreadcrumbNav,
    Steps,
    publishForm,
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
