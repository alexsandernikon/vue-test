<template>
	<div class="pb-5 py-5 container">
		<form id="personal-form" @:submit.prevent="onSubmit">
			<div class="row form-group">
				<div class="col-md-6 offset-md-3">
					<label for="first_name" v-text="attributeLabels.first_name"></label>
					<input type="text" class="form-control" id="first_name" v-model="attributes.first_name" />
					<span class="help is-danger"></span>
				</div>
			</div>
			<div class="row form-group">
				<div class="col-md-6 offset-md-3">
					<label for="last_name" v-text="attributeLabels.last_name"></label>
					<input type="text" class="form-control" id="last_name" v-model="attributes.last_name" />
					<span class="help is-danger"></span>
				</div>
			</div>
			<div class="row form-group">
				<div class="col-md-6 offset-md-3">
					<label for="email" v-text="attributeLabels.email"></label>
					<input type="email" class="form-control" id="email" v-model="attributes.email" />
					<span class="help is-danger"></span>
				</div>
			</div>
			<div class="row form-group">
				<div class="col-md-6 offset-md-3">
					<label for="age" v-text="attributeLabels.age"></label>
					<input type="text" class="form-control" id="age" v-model="attributes.age" />
					<span class="help is-danger"></span>
				</div>
			</div>
			<div class="row form-group">
				<div class="col-md-6 offset-md-3">
					<label for="skype" v-text="attributeLabels.skype"></label>
					<input type="string" class="form-control" id="skype" v-model="attributes.skype" />
					<span class="help is-danger"></span>
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
	methods () {
	    onSubmit: () => {
	      alert();
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
