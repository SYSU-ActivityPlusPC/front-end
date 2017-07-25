<template>
<div class="publish-wrapper">
  <BreadcrumbNav :config="breadcrumbNavConfig" />
  <Steps :config="stepsConfig" :current="currentStep" class="steps"/>
  <publishForm v-if="currentStep === 0"/>
  <publishSubmit v-else/>
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
  padding: 96px 0 0 100px;
}
.steps {
  margin: 20px 0;
}
</style>
