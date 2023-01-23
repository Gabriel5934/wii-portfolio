<script lang="ts">
	import dayjs from 'dayjs';

	import menuTheme from '$lib/audio/menu_theme.mp3';

	let navBarHidden = true;
	let tilesHidden = true;

	setTimeout(() => {
		navBarHidden = false;
	}, 1000);

	setTimeout(() => {
		tilesHidden = false;
	}, 2000);

	const weekday = new Date().toLocaleDateString('pt-br', { weekday: 'long' }).slice(0, 3);
	const date = dayjs().format('DD/MM');
</script>

<div class="w-screen h-screen main">
	<div class="h-3/4 elements flex gap-8 px-1/4 py-14">
		<button
			class="h-full w-full border-gray border-8 rounded-3xl drop-shadow-sm bg-white smooth-corners tiles {tilesHidden
				? 'opacity-0'
				: 'opacity-100'}"
		/>
		<div
			class="h-full w-full border-gray border-8 rounded-3xl drop-shadow-sm bg-white smooth-corners tiles {tilesHidden
				? 'opacity-0'
				: 'opacity-100'}"
		/>
		<div
			class="h-full w-full border-gray border-8 rounded-3xl drop-shadow-sm bg-white smooth-corners tiles {tilesHidden
				? 'opacity-0'
				: 'opacity-100'}"
		/>
	</div>
	<div
		class="bg-lightGray w-100 h-1/4 py-4 flex justify-between border-t-4 border-lightBlue navBar {navBarHidden
			? 'opacity-0'
			: 'opacity-100'}"
	>
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

<embed src={menuTheme} loop="true" autostart="true" width="2" height="0" />

<style>
	.main {
		animation: fadeInBackgroundColor ease 1s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}

	.navBar {
		transition: opacity 1s;
	}

	.tiles {
		transition: opacity 1s;
	}

	.tiles:nth-child(1) {
		transition-delay: 0.2s;
	}

	.tiles:nth-child(2) {
		transition-delay: 0.4s;
	}

	.tiles:nth-child(3) {
		transition-delay: 0.6s;
	}

	@keyframes fadeInBackgroundColor {
		0% {
			background-color: black;
		}
		100% {
			background-color: white;
		}
	}

	@supports (mask-image: paint(smooth-corners)) {
		.smooth-corners.is-loaded {
			border-radius: 0;
			mask-image: paint(smooth-corners);
			--smooth-corners: 10;
		}
	}

	* {
		cursor: url(wii-auto.cur), default;
	}

	button {
		cursor: url(wii-pointer.cur), pointer;
	}
</style>
