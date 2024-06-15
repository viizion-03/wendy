<script>
    import botswana from "$lib/assets/flags/botswana.png"
    import sa from "$lib/assets/flags/sa.png"
    import french from "$lib/assets/flags/french.png"
    import spain from "$lib/assets/flags/spain.png"
    import china from "$lib/assets/flags/china.png"
    import Heart from "$lib/assets/heart.png"
    const loveYous = [
        {phrase: "I love you", country: Heart},
        {phrase: "Ke a go rata", country: botswana},
       { phrase: "Ngiyakuthanda ga khulu", country: sa},
        {phrase: "Je t'aime", country: french},
        {phrase: "Te amo", country: spain},
        {phrase: "Wo ai ni", country: china},

    ]
</script>

<div class='bg-slate-50 h-full'>
    {#each loveYous as y}
         <!-- content here -->

    <div class="flex items-center gap-3 px-3 py-2 rouned-md bg-gray-500 bg-opacity-45 w-auto">
        <img src={y.country} class='size-10 object-cover rounded-full' alt="">
        <p class="text-2xl font-semibold">{y.phrase}</p>
    </div>
    {/each}
    <!-- <div class="flex items-center gap-3 px-3 py-2 rouned-md bg-gray-500 bg-opacity-45 w-auto">
        <img src={botswana} class='size-10 object-cover rounded-full' alt="">
        <p class="text-2xl font-semibold">Ke a go rata</p>
    </div> -->
</div>