<script lang="ts">
    export let text: string;
</script>
<svelte:options tag="x-stuff"></svelte:options>

<button type="button" on:click={console.log}>
    {text}
</button>