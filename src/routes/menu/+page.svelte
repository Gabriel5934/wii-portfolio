<script lang="ts">
	import dayjs from 'dayjs';

	const weekday = new Date().toLocaleDateString('pt-br', { weekday: 'long' }).slice(0, 3);
	const date = dayjs().format('DD/MM');
</script>

<div class="w-screen h-screen">
	<div class="h-3/4" />
	<div class="bg-lightGray w-100 h-1/4 py-4 flex justify-between">
		<div
			class="bg-lightGray w-96 h-full rounded-r-full border-solid border-gray border-8 drop-shadow-md p-8 flex justify-end"
		>
			<div
				class="h-full border-solid border-4 border-lightBlue rounded-full aspect-square drop-shadow-sm bg-lightGray"
			/>
		</div>
		<span class="text-lg text-darkGray font-bold">{weekday}{' '}{date}</span>
		<div
			class="bg-lightGray w-96 h-full rounded-l-full border-solid border-gray border-8 drop-shadow-md p-8 flex justify-start"
		>
			<div
				class="h-full border-solid border-4 border-lightBlue rounded-full aspect-square drop-shadow-sm bg-lightGray"
			/>
		</div>
	</div>
</div>
