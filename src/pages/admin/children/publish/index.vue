<template>
<div class="publish-wrapper">
  <BreadcrumbNav :config="breadcrumbNavConfig" />
  <Steps :config="stepsConfig" class="steps" :current="curStep"/>
  <PublishForm :reset="reset"  v-show="curStep === 0" authority="admin" @next="nextForm"/>
  <!--SelectForm v-show="curStep === 1" :form="form" @next="curStep = 2" @pre="curStep = 0"/-->
  <PublishSubmit authority="admin" v-show="curStep === 1" @continute="onContinute" @manage="onManage"/>
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
      curStep: 0,
      breadcrumbNavConfig: [],
      form: null,
      stepsConfig: [
        '填写活动信息',
        // '选择报名信息',
        '等待审核'
      ],
      reset: false
    };
  },
  methods: {
    onContinute () {
      this.curStep = 0;
      this.reset = true;
    },
    onManage () {
      this.$router.push('/admin/data');
    },
    nextForm (form) {
      this.curStep = 1;
      this.reset = false;
      // this.form = form;
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
