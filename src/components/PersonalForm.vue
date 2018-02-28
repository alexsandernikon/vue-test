<template>
	<div class="pb-5 py-5 container">
		<form id="personal-form" @submit.prevent="onValidateForm('personeForm')" data-vv-scope="personeForm" v-show="this.stepForm == 'form_one'">
			<div class="row form-group">
				<div class="col-md-6 offset-md-3">
					<label for="firstName" v-text="attributeLabels.firstName"></label>
					<input name="first-name" type="text" class="form-control" id="firstName" v-model="attributes.firstName" v-validate="'required|alpha|min:4'" :class="{'form-control': true, 'is-danger': errors.has('personeForm.first-name')}" />
					<p class="help is-danger" v-show="errors.has('personeForm.first-name')">{{ errors.first('personeForm.first-name') }}</p>
				</div>
			</div>
			<div class="row form-group">
				<div class="col-md-6 offset-md-3">
					<label for="lastName" v-text="attributeLabels.lastName"></label>
					<input name="last-name" type="text" class="form-control" id="lastName" v-model="attributes.lastName" v-validate="'required|alpha|min:4'" :class="{'form-control': true, 'is-danger': errors.has('personeForm.last-name')}" />
					<p class="help is-danger" v-show="errors.has('personeForm.last-name')">{{ errors.first('personeForm.last-name') }}</p>
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
					<input name="age" type="text" class="form-control" id="age" v-model="attributes.age" v-validate="'numeric'" :class="{'form-control': true, 'is-danger': errors.has('personeForm.age')}" />
					<p class="help is-danger" v-show="errors.has('personeForm.age')">{{ errors.first('personeForm.age') }}</p>
				</div>
			</div>
			<div class="row form-group">
				<div class="col-md-6 offset-md-3">
					<label for="skype" v-text="attributeLabels.skype"></label>
					<input name="skype" type="string" class="form-control" id="skype" v-model="attributes.skype" v-validate="'alpha_dash|min:4|max:10'" :class="{'form-control': true, 'is-danger': errors.has('personeForm.skype')}" />
					<p class="help is-danger" v-show="errors.has('personeForm.skype')">{{ errors.first('personeForm.skype') }}</p>
				</div>
			</div>
			<div class="row form-group">
				<button class="btn btn-primary mx-auto">Submit</button>
			</div>
		</form>
		<form id="personal-form" @submit.prevent="onValidateForm('additionalForm')" data-vv-scope="additionalForm" v-show="this.stepForm == 'form_two'">
			<div class="row form-group">
				<div class="col-md-6 offset-md-3">
					<label for="hobbies" v-text="attributeLabels.hobbies"></label>
					<input name="hobbies" type="text" class="form-control" id="hobbies" v-model="attributes.hobbies" v-validate="'required|alpha_spaces'" :class="{'form-control': true, 'is-danger': errors.has('additionalForm.hobbies')}" />
					<p class="help is-danger" v-show="errors.has('additionalForm.hobbies')">{{ errors.first('additionalForm.hobbies') }}</p>
				</div>
			</div>
			<div class="row form-group">
				<div class="col-md-6 offset-md-3">
					<label for="telephones" v-text="attributeLabels.telephones"></label>
					<input name="telephones" type="text" class="form-control" id="telephones" v-model="attributes.telephones" v-validate="'required|telephone'" :class="{'form-control': true, 'is-danger': errors.has('additionalForm.telephones')}" />
					<p class="help is-danger" v-show="errors.has('additionalForm.telephones')">{{ errors.first('additionalForm.telephones') }}</p>
				</div>
			</div>
			<div class="row form-group">
				<div class="col-md-6 offset-md-3">
					<label for="nickname" v-text="attributeLabels.nickname"></label>
					<input name="nickname" v-validate="'required|alpha_dash|nickname'" :class="{'form-control': true, 'is-danger': errors.has('additionalForm.nickname')}" v-model="attributes.nickname" type="text" id="nickname" />
					<p class="help is-danger" v-show="errors.has('additionalForm.nickname')">{{ errors.first('additionalForm.nickname') }}</p>
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
			stepForm: 'form_one',
			attributes: {
				firstName: '',
				lastName: '',
				age: '',
				email: '',
				skype: '',
				hobbies: '',
				telephones: '',
				nickname: ''
			},
			attributeLabels: {
				firstName: 'First name',
				lastName: 'Last name',
				email : 'E-mail',
				age : 'Age',
				skype : 'Skype',
				hobbies : 'Hobbies',
				telephones : 'Telephones',
				nickname : 'Nickname'
			}
		}
	},
	methods: {
		onValidateForm: function (scope) {
			this.$validator.validateAll(scope).then((isValidate) => {
				if (isValidate && this.stepForm == 'form_one') {
					this.stepForm = 'form_two';
				} else if (isValidate && this.stepForm == 'form_two') {
					bus.$emit('models-push', this.attributes);
					for (var key in this.attributes) {
						this.attributes[key] = '';
					}
					this.stepForm = 'form_one';
					setTimeout(() => {
						this.$validator.errors.clear('personeForm');
						this.$validator.errors.clear('additionalForm');
					}, 0);
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
