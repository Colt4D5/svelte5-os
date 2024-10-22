<script lang="ts">
	import { osState } from "$lib/osState.svelte";
	import StartMenu from "./StartMenu.svelte";
  
  function toggleStartMenu() {
    osState.startMenuOpen = !osState.startMenuOpen;
  }
</script>

<div id="taskbar" class={`absolute bg-slate-400 p-2 rounded dock-position-${osState.dockPosition}`}>
  <div id="start-menu-container">
    <button onclick={toggleStartMenu} class="p-4 border-2 border-black relative">
      Menu
    </button>
    {#if osState.startMenuOpen}
      <StartMenu />
    {/if}
  </div>
  {#each osState.dockApps as app}
    <div class="dock-app whitespace-nowrap">
      {app.name}
    </div>
  {/each}
</div>

<style>
  #taskbar {
    bottom: 0.5rem;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    &.dock-position-left {
      bottom: 50%;
      left: 0.5rem;
      right: auto;
      transform: translate3d(0, 50%, 0);
      flex-direction: column;
    }
    &.dock-position-right {
      bottom: 50%;
      left: auto;
      right: 0.5rem;
      transform: translate3d(0, 50%, 0);
      flex-direction: column;
    }
  }
</style>