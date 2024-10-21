<script lang="ts">
	import Taskbar from '$lib/components/Taskbar.svelte';
	import { osState } from '$lib/osState.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div id="screen" class="h-lvh relative object-cover" style={`background: ${osState.wallpaper};`}>
	{@render children()}
	<Taskbar />
	<button onclick={() => osState.updateWallpaper('#ff0000')}>Update Desktop</button>
</div>