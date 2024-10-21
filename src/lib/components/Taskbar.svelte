<script lang="ts">
	import { osState } from "$lib/osState.svelte";
  function moveDock() {
    let newPosition: 'bottom' | 'left' | 'right';
    if (osState.dockPosition === 'bottom') newPosition = 'right';
    else if (osState.dockPosition === 'right') newPosition = 'left';
    else newPosition = 'bottom';
    osState.changeDockPosition(newPosition);
  }
</script>

<div id="taskbar" class={`absolute bg-slate-400 p-2 dock-position-${osState.dockPosition}`}>
  <div class="p-4 border-[3px] border-black">Start</div>
  {#each osState.dockApps as app}
    <div class="dock-app whitespace-nowrap">
      {app.name}
    </div>
  {/each}
  <button onclick={moveDock}>Move Dock</button>
</div>

<style>
  #taskbar {
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    &.dock-position-left {
      bottom: 50%;
      left: 0;
      right: auto;
      transform: translate3d(0, 50%, 0);
      flex-direction: column;
    }
    &.dock-position-right {
      bottom: 50%;
      left: auto;
      right: 0;
      transform: translate3d(0, 50%, 0);
      flex-direction: column;
    }
  }
</style>