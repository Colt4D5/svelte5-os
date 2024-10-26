<script lang="ts">
	import Taskbar from '../lib/components/Taskbar.svelte';
	import Window from '../lib/components/Window.svelte';
	import { osState } from '../lib/osState.svelte';
	import '../app.css';
	let { children } = $props();

	function onclick(e: MouseEvent): void {
		const target = e.target as HTMLElement;
		if (!target?.closest('#start-menu-container')) {
			osState.startMenuOpen = false;
		}
	}
</script>

<div id="screen" class="h-lvh relative object-cover" style={`background: ${osState.wallpaper};`}>
	{@render children()}

	{#each osState.windows as appWindow}
		<Window name={appWindow.title} path={appWindow.path} id={appWindow.id} position={appWindow.position} ></Window>
	{/each}
	
	<Taskbar />
</div>

<svelte:window {onclick}/>