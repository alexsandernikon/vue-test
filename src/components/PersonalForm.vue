<template>
	<div class="pb-5 py-5 container">
		<form id="personal-form" @submit.prevent="onValidateForm('personeForm')" data-vv-scope="personeForm">
			<div class="row form-group">
				<div class="col-md-6 offset-md-3">
					<label for="first_name" v-text="attributeLabels.first_name"></label>
					<input name="first_name" type="text" class="form-control" id="first_name" v-model="attributes.first_name" v-validate="'required|alpha'" :class="{'form-control': true, 'is-danger': errors.has('personeForm.first_name')}" />
					<p class="help is-danger" v-show="errors.has('personeForm.first_name')">{{ errors.first('personeForm.first_name') }}</p>
				</div>
			</div>
			<div class="row form-group">
				<div class="col-md-6 offset-md-3">
					<label for="last_name" v-text="attributeLabels.last_name"></label>
					<input name="last_name" type="text" class="form-control" id="last_name" v-model="attributes.last_name" v-validate="'required|alpha'" :class="{'form-control': true, 'is-danger': errors.has('personeForm.last_name')}" />
					<p class="help is-danger" v-show="errors.has('personeForm.last_name')">{{ errors.first('personeForm.last_name') }}</p>
				</div>
			</div>
			<div class="row form-group">
				<div class="col-md-6 offset-md-3">
					<label for="email" v-text="attributeLabels.email"></label>
					<input name="email" v-validate="'required|email'" :class="{'form-control': true, 'is-danger': errors.has('personeForm.email')}" v-model="attributes.email" type="text" id="email" />
					<p class="help is-danger" v-show="errors.has('personeForm.email')">{{ errors.first('personeForm.email') }}</p>
				</div>
			</div>
			<div class="row form-group">
				<div class="col-md-6 offset-md-3">
					<label for="age" v-text="attributeLabels.age"></label>
					<input name="age" type="text" class="form-control" id="age" v-model="attributes.age" v-validate="'required|alpha'" :class="{'form-control': true, 'is-danger': errors.has('personeForm.age')}" />
					<p class="help is-danger" v-show="errors.has('personeForm.age')">{{ errors.first('personeForm.age') }}</p>
				</div>
			</div>
			<div class="row form-group">
				<div class="col-md-6 offset-md-3">
					<label for="skype" v-text="attributeLabels.skype"></label>
					<input name="skype" type="string" class="form-control" id="skype" v-model="attributes.skype" v-validate="'required|alpha'" :class="{'form-control': true, 'is-danger': errors.has('personeForm.skype')}" />
					<p class="help is-danger" v-show="errors.has('personeForm.skype')">{{ errors.first('personeForm.skype') }}</p>
				</div>
			</div>
			<div class="row form-group">
				<button class="btn btn-primary mx-auto">Submit</button>
			</div>
		</form>
	</div>
</template>

<script>
import bus from '../bus'

export default {
	name: 'PersonalForm',
	data () {
		return {
			attributes: {
				first_name: '',
				last_name: '',
				age: '',
				email: '',
				skype: ''
			},
			attributeLabels: {
				first_name: 'First name',
				last_name: 'Last name',
				email : 'E-mail',
				age : 'Age',
				skype : 'Skype',
			}
		}
	},
	methods: {
		onValidateForm: function (scope) {
			this.$validator.validateAll(scope).then((isValidate) => {
				if (isValidate) {
					bus.$emit('models-push', this.attributes);
				}
			});
		}
	  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
	font-weight: normal;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
