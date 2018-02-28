// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate';

Vue.use(BootstrapVue);
Vue.config.productionTip = false

VeeValidate.Validator.extend('nickname', {
	getMessage: field => 'Sorry, nickname cannot be named "god", "devil", "president"',
	validate: value => {
		if (value === 'god' || value === 'devil' || value === 'president') {
			return false;
		}
		return true;
	}
})

VeeValidate.Validator.extend('telephone', {
	getMessage: field => 'Sorry, not valid telephone',
	validate: value => {
		var pattern = /^[0-9 \+\(\).-]+$/;
		if (value.match(pattern)) {
			return true;
		}
		return false;
	}
})

Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  	el: '#app',
  	components: { App },
  	template: '<App/>'
})