<script lang="ts">
	import { goto } from '$app/navigation';

	import attentionIcon from '$lib/images/attention.png';
	import letterAIcon from '$lib/images/letter-a-inside-a-circle.png';

	let fadeOut = false;

	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'a') {
			navigateToMenu();
		}
	};

	const navigateToMenu = () => {
		fadeOut = true;

		setTimeout(() => {
			goto('/menu');
		}, 2000);
	};
</script>

<div class="w-screen h-screen bg-black">
	<div class="flex h-full flex-col gap-16 justify-center {fadeOut ? 'fadeOut' : ''}">
		<div class="flex items-center gap-1 justify-center">
			<img class="w-24" alt="Ícone de atenção" src={attentionIcon} />
			<span class="text-white text-xl font-bold">WARNING-HEALTH AND SAFETY</span>
		</div>
		<div class="flex flex-col items-center gap-2">
			<div class="text-center">
				<span class="text-white text-lg">BEFORE PLAYING, READ YOUR OPERATIONS</span>
			</div>
			<div class="text-center">
				<span class="text-white text-lg">MANUAL FOR IMPORTANT INFORMATION</span>
			</div>
			<div class="text-center">
				<span class="text-white text-lg">ABOUT YOUR HEALTH AND SAFETY</span>
			</div>
		</div>
		<div class="flex flex-col items-center gap-4">
			<div class="text-center">
				<span class="text-white text-sm">Also online at:</span>
			</div>
			<div class="text-center">
				<span class="text-purpleLink text-sm">www.nintendo.com/healthsafety/</span>
			</div>
		</div>
		<div class="animate-pulse flex flex-row justify-center items-center gap-4 font-bold">
			<button on:click={navigateToMenu}>
				<span class="text-white text-sm mr-4">Press</span>
				<img class="w-10 inline" alt="Ícone de atenção" src={letterAIcon} />
				<span class="text-white text-sm ml-4">to continue</span>
			</button>
		</div>
	</div>
</div>

<svelte:window on:keydown={handleKeyPress} />

<style>
	.fadeOut {
		animation: fadeIn ease 1s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}

	@keyframes fadeIn {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
