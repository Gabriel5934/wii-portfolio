<script>
	import attentionIcon from '$lib/images/attention.png';
	import letterAIcon from '$lib/images/letter-a-inside-a-circle.png';
</script>

<div class="w-screen h-screen bg-black">
	<div class="flex h-full flex-col gap-16 justify-center">
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
			<div class="text-center">
				<span class="text-white text-sm">Press</span>
			</div>
			<img class="w-10" alt="Ícone de atenção" src={letterAIcon} />
			<div class="text-center">
				<span class="text-white text-sm">to continue</span>
			</div>
		</div>
	</div>
</div>
