// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store, // 스토어 사용등록
  components: { App },
  template: '<App/>',
  methods:{
    // 스토어 변수 업데이트 메서드
    chgData(헐, 슉) {
      console.log("업데이트!",pm);
      // 뮤테이션 메서드 호출하기!
      this.$store.commit('chgData',pm);
    }, // chgData 메서드 //
  }
})

