<script>
	/**
	 *
	 */
	const phraseType = {
		poem: 'poem',
		confession: 'poem'
	};

	const phrases = [
		{
			phrase: 'Eyes so beautiful, they enchant you',
			color: 'blue',
			type: phraseType.poem
		},
		{
			phrase: 'A Voice so sweet that it soothes your soul',
			color: 'blue',
			type: phraseType.poem
		},
		{
			phrase: 'A Personality that lights up the room',
			color: 'blue',
			type: phraseType.poem
		},
		{
			phrase: 'God fearing, with faith as solid and rare as Gold',
			color: 'blue',
			type: phraseType.poem
		},
		{
			phrase: 'my feelings run deep for You.',
			color: 'blue',
			type: phraseType.confession
		},
		{
			phrase: 'A Heart that beats with kindness and compassion',
			color: 'blue',
			type: phraseType.poem
		},
		{
			phrase: 'A Beauty unrivaled without need for comparison',
			color: 'blue',
			type: phraseType.poem
		},
		{
			phrase: 'To put a smile on your face,',
			color: 'blue',
			type: phraseType.poem
		},
		{
			phrase: "there's nothing I wouldn't do.",
			color: 'blue',
			type: phraseType.confession
		},
		{
			phrase:
				"Your existance is truly a blessing, and I don't know what I did to deserve you\n\nNevertheless, my heart is Yours",
			color: 'blue',
			type: phraseType.confession
		},
		{
			phrase:
				"When our souls are tied and you are officially Mine, as long as you keep my heart safe, I'll never let you go",
			color: 'blue',
			type: phraseType.confession
		},
		{
			phrase: "And For as long as I live I'll be there for you",
			color: 'blue',
			type: phraseType.confession
		},
		{
			phrase: 'Why??',
			color: 'blue',
			type: phraseType.confession
		}
	];
</script>

<div class="h-full snap-mandatory snap-y overflow-y-auto">
	{#each phrases as p}
		<div class="snap-start h-screen text-center text-slate-300 grid place-items-center md:px-96">
			{#if p.phrase.includes('existance')}
				<p class="text-3xl whitespace-pre-line font-semibold">{p.phrase}</p>
			{:else}
				<p class="text-3xl whitespace-pre-line font-semibold">{p.phrase}</p>
			{/if}
		</div>
	{/each}
	<div
		class="snap-start h-screen text-center text-slate-300 flex flex-col justify-center gap-6 md:px-96"
	>
		<p class="text-8xl">
			<span> Because I Love You </span>
			<span> </span>
		</p>
		<button><a href="/love"> Click Me </a></button>
	</div>
</div>
