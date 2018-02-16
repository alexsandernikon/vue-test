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
				</tr>
			</thead>
			<tbody>
				<tr v-for="(model, index) in models">
					<td>{{ model.first_name }}</td>
					<td>{{ model.last_name }}</td>
					<td>{{ model.email }}</td>
					<td>{{ model.age }}</td>
					<td>{{ model.skype }}</td>
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