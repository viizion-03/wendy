<script>
	import Heart from '$lib/assets/heart.png';

	//backgrounds
	import sunset from '$lib/assets/backgrounds/sunset.jpg';

	/**
	 *
	 */
	const phraseType = {
		poem: 'poem',
		confession: 'confession'
	};

	const phrases = [
		{
			phrase: 'Eyes so beautiful, they enchant you\n\n😍😍😍',
			color: 'blue',
			type: phraseType.poem,
			image: sunset
		},
		{
			phrase: 'A Voice so sweet that it soothes your soul\n\n⋆⭒˚.⋆🪐 ⋆⭒˚.⋆',
			color: 'blue',
			type: phraseType.poem
		},
		{
			phrase: 'A Personality that lights up the room\n\n💖😊💖',
			color: 'blue',
			type: phraseType.poem
		},
		{
			phrase: 'God fearing, with faith as solid and rare as Gold\n\n⋆⭒˚.⋆🦋⋆⭒˚.⋆',
			color: 'blue',
			type: phraseType.poem
		},
		{
			phrase: 'my feelings run deep for You.',
			color: 'blue',
			type: phraseType.confession
		},
		{
			phrase: 'A Heart that beats with kindness and compassion\n\n˚˖𓍢ִ໋🌷͙֒✧˚.🎀༘⋆',
			color: 'blue',
			type: phraseType.poem
		},
		{
			phrase: 'A Beauty unrivaled without need for comparison\n\n🫧💗✨',
			color: 'blue',
			type: phraseType.poem
		},
		{
			phrase: 'To put a smile on your face,',
			color: 'blue',
			type: phraseType.poem
		},
		{
			phrase: "there's nothing in this world I wouldn't do.",
			color: 'blue',
			type: phraseType.confession
		},
		{
			phrase:
				"Your existance is truly a blessing❤️, and I don't know what I did to deserve you\n❤️❤️❤️\n\nNevertheless, my heart is Yours",
			color: 'blue',
			type: phraseType.confession
		},
		{
			phrase:
				"When our souls are tied and you are officially Mine, for as long as you keep my heart safe, I'll never let you go\n\nﮩـﮩﮩ٨ـ🫀ﮩ٨ـﮩﮩ٨ـ",
			color: 'blue',
			type: phraseType.confession
		},
		{
			phrase: "And For as long as I live I'll be there for you\n\n🫶",
			color: 'blue',
			type: phraseType.confession
		},
		{
			phrase: 'Why??\n\n😳🤔💭',
			color: 'blue',
			type: phraseType.poem
		}
	];

	let player;

	let showPlayer = false;

    let playbutton = document.getElementsByClassName("playButton")
    console.log(playbutton)

    
</script>

<div class="absolute h-full w-full bg-sunset opacity-15 bg-cover overflow-hidden"></div>
<div></div>
<iframe
	class="absolute top-0 z-10"
	width="100%"
	height="100"
	scrolling="no"
	frameborder="no"
	allow="autoplay"
	src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/770717896&color=%231be7ec&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
></iframe>
<!-- <div
	style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"
>
	<a
		href="https://soundcloud.com/bill-withers-official"
		title="Bill Withers"
		target="_blank"
		style="color: #cccccc; text-decoration: none;">Bill Withers</a
	>
	·
	<a
		href="https://soundcloud.com/bill-withers-official/lovely-day-remastered"
		title="Lovely Day (Remastered)"
		target="_blank"
		style="color: #cccccc; text-decoration: none;">Lovely Day (Remastered)</a
	>
</div> -->

<div class="absolute top-4 right-4 {showPlayer ? "" : "opacity-65"} md:right-9 z-30">
	{#if showPlayer}
		<button
			on:click={() => (showPlayer = false)}
			class="btn-default overflow-hidden relative shadow-2xl size-10 bg-black border-black text-gray-900 py-1 px-1 rounded-xl font-bold uppercase transition-all duration-100 -- hover:shadow-md border  hover:bg-gradient-to-t hover:from-gray-900 before:to-gray-950 hover:-translate-y-[3px]"
		>
			<svg
				data-slot="icon"
				fill="none"
				stroke-width="1.5"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
                color="white"
			>
				<path
					class="size-1"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
				></path>
			</svg>
		</button>
	{:else}
		<button
			on:click={() => (showPlayer = true)}
			class="btn-default text-xs overflow-hidden relative size-10 bg-stone-50 text-gray-900 py-1 px-1 rounded-md font-bold uppercase transition-all duration-100 -- hover:shadow-md border border-stone-100 hover:bg-gradient-to-t hover:from-stone-100 before:to-stone-50 hover:-translate-y-[3px]"
		>
			<svg
				data-slot="icon"
				fill="none"
				stroke-width="1.5"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					class="size-4"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
				></path>
			</svg>
		</button>
	{/if}
</div>
<div class="absolute poem h-full snap-mandatory snap-y overflow-y-scroll">
	<!-- <div
		class=" conti snap-start h-screen text-center bg-slate-800 text-slate-300 flex flex-col justify-center gap-6 md:px-96"
	>
		<p class="text-6xl md:text-8xl grid place-items-center ">
			<img src={Heart} class="size-32 md:size-52 mt-4" alt="Heart image" />
			<span class="italic"> Because <br /> <span class="font-bold"> I Love You</span> </span>
		</p>
		<button class="text-pink-300 text-lg md:mt-9"><a href="/love"> Click Me </a></button>
	</div> -->
	{#each phrases as p}
		<div
			class=" conti snap-start h-screen w-full text-center text-slate-200 grid place-items-center md:px-96"
		>
			<div class="px-7">
				{#if p.type === phraseType.confession}
					<p class="text-3xl whitespace-pre-line font-thin italic font-serif">{p.phrase}</p>
				{:else}
					<p class="text-3xl whitespace-pre-line font-semibold">{p.phrase}</p>
				{/if}
			</div>
		</div>
	{/each}
	<div
		class=" conti snap-start h-screen text-center bg-slate-800 text-slate-300 flex flex-col justify-center gap-6 md:px-96"
	>
		<p class="text-6xl md:text-8xl grid place-items-center">
			<img src={Heart} class="heartbeat size-32 md:size-52 mt-4" alt="Heart image" />
			<span class="italic"> Because <br /> <span class="font-bold"> I Love You</span> </span>
		</p>
		<button class="text-pink-300 text-lg md:mt-9"><a href="/love"> Wendy </a></button>
	</div>
</div>

<style lang="postcss">
	.heartbeat {
		-webkit-animation: heartbeat 1.5s ease-in-out infinite both;
		animation: heartbeat 1.5s ease-in-out infinite both;
	}
	.kenburns-bottom-left {
		-webkit-animation: kenburns-bottom-left 35s ease-out both;
		animation: kenburns-bottom-left 55s ease-out both;
	}
	/* ----------------------------------------------
 * Generated by Animista on 2024-6-15 17:8:56
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

	/**
 * ----------------------------------------
 * animation heartbeat
 * ----------------------------------------
 */
	@-webkit-keyframes heartbeat {
		from {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-transform-origin: center center;
			transform-origin: center center;
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		10% {
			-webkit-transform: scale(0.91);
			transform: scale(0.91);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		17% {
			-webkit-transform: scale(0.98);
			transform: scale(0.98);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		33% {
			-webkit-transform: scale(0.87);
			transform: scale(0.87);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		45% {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
	}
	@keyframes heartbeat {
		from {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-transform-origin: center center;
			transform-origin: center center;
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		10% {
			-webkit-transform: scale(0.91);
			transform: scale(0.91);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		17% {
			-webkit-transform: scale(0.98);
			transform: scale(0.98);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		33% {
			-webkit-transform: scale(0.87);
			transform: scale(0.87);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		45% {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
	}

	/* ----------------------------------------------
 * Generated by Animista on 2024-6-15 17:15:30
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

	/**
 * ----------------------------------------
 * animation kenburns-bottom-left
 * ----------------------------------------
 */
	@-webkit-keyframes kenburns-bottom-left {
		0% {
			-webkit-transform: scale(1) translate(0, 0);
			transform: scale(1) translate(0, 0);
			-webkit-transform-origin: 16% 84%;
			transform-origin: 16% 84%;
		}
		100% {
			-webkit-transform: scale(1.25) translate(-20px, 15px);
			transform: scale(1.25) translate(-20px, 15px);
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
		}
	}
	@keyframes kenburns-bottom-left {
		0% {
			-webkit-transform: scale(1) translate(0, 0);
			transform: scale(1) translate(0, 0);
			-webkit-transform-origin: 16% 84%;
			transform-origin: 16% 84%;
		}
		100% {
			-webkit-transform: scale(1.25) translate(-20px, 15px);
			transform: scale(1.25) translate(-20px, 15px);
			-webkit-transform-origin: left bottom;
			transform-origin: left bottom;
		}
	}
</style>
