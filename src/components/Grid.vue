<template>
	<div class="pb-5 py-5 container" v-if="models.length">
		<table class="table">
	      	<thead>
				<tr>
					<th>First name</th>
					<th>Last name</th>
					<th>E-mail</th>
					<th>Age</th>
					<th>Skype</th>
					<th>Hobbies</th>
					<th>Telephones</th>
					<th>Nickname</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(model, index) in models">
					<td>{{ model.firstName }}</td>
					<td>{{ model.lastName }}</td>
					<td>{{ model.email }}</td>
					<td>{{ model.age }}</td>
					<td>{{ model.skype }}</td>
					<td>{{ model.hobbies }}</td>
					<td>{{ model.telephones }}</td>
					<td>{{ model.nickname }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import bus from '../bus'

export default {
	name: 'Grid',
	props: ['models']
}
</script>