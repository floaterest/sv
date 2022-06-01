<script lang="ts">
	export let input = false;
	export let object: any;
	export let indent: number = 0;
	export let tabwidth: number;

	const type = typeof object;
	// nbsp
	const tab = Array((indent++ * tabwidth)).join('\u00a0');
</script>

{#if type === 'object'}
    {#if object instanceof Array}
        {#each object.map((v, i) => [typeof v !== 'object', i]) as [input, i]}
            <div>{tab}
                <span class="punctuation">-</span>
                <svelte:self bind:object="{object[i]}"
                             {indent} {input} {tabwidth}/>
            </div>
        {/each}
    {:else if object instanceof Object}
        {#each Object.entries(object).map(([k, v]) => [k, typeof v !== 'object']) as [key, input]}
            <div>{tab}
                <svelte:self object="{key}" class="keyword" {indent}
                             {tabwidth}/><!--
                --><span class="punctuation">:</span><!--
                indent if value is object -->
                <svelte:self bind:object="{object[key]}" {tabwidth}
                             indent="{(!input)*indent}" {input}/>
            </div>
        {/each}
    {/if}
{:else if input}
    {#if type === 'number'}
        <input type="number" class="number" bind:value="{object}">
    {:else}
        <input class="{type}" bind:value="{object}">
    {/if}
{:else}
    {#if $$props.class}
        <span class="{$$props.class}">{object}</span>
    {:else}
        <span class="{type}">{object}</span>
    {/if}
{/if}
