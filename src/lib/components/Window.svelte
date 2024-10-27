<script lang="ts">
  import { osState } from '$lib/osState.svelte';
  interface Props {
    name: string;
    id: string;
    width?: number;
    height?: number;
    path: string;
    children?: Snippet;
    position?: {
      x: number,
      y: number
    }
  }
  import type { Snippet } from 'svelte';
  let { name, id, position = {x:200,y:200}, width = 800, height = 400, path, children }: Props = $props();
  let positionX = $state(position.x);
  let positionY = $state(position.y);
  let windowTitle = $state('Window Title');
  let windowContent = $state('');

  setTimeout(() => {
    windowContent = name;
  }, 750);

  function closeWindow(e: FormDataEvent) {
    const target = e.target as HTMLElement;
    if (!target) return;
    const windowId = target.closest('.window')?.id;
    if (!windowId) return;
    osState.closeWindow(windowId.replace("window-", ""));
    console.log(windowId);
  }

  let zIndex = $state(osState.zIndex + 1);
  let isDragging = $state(false);
  let mouseOffset = $state({
    x: 0,
    y: 0
  });

  function handleMouseDown(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.closest('.close-window')) return;
    console.log("id: ", id);
    if (!target.closest(`#window-${id}`)) return;

    isDragging = true;
    osState.zIndex++;
    zIndex = osState.zIndex + 1;
    
    mouseOffset.x = e.clientX - positionX;
    mouseOffset.y = e.clientY - positionY;
  }
  
  function handleDrag(e: MouseEvent) {
    if (!isDragging) return;
    console.log("is handleDrag");
    positionX = e.clientX - mouseOffset.x;
    positionY = e.clientY - mouseOffset.y;
    console.log(positionX, positionY);
  }
</script>


<div id={`window-${id}`} class="window absolute px-2 pb-2 bg-slate-400 rounded shadow-md" data-path={path} style={`left: ${positionX}px; top: ${positionY}px;width: ${width}px;z-index:${zIndex};`}>
  <div class="p-1 py-2 flex justify-between items-center">
    <p class="m-0 leading-4 pointer-events-none">{windowTitle}</p>
    <ul class="flex gap-2">
      <li class="w-4 h-4 rounded-full border-[1px] cursor-pointer bg-green-400"></li>
      <li class="w-4 h-4 rounded-full border-[1px] cursor-pointer bg-yellow-400"></li>
      <li onclick={closeWindow} class="close-window w-4 h-4 rounded-full border-[1px] cursor-pointer bg-red-400"></li>
    </ul>
  </div>
  <div class="window-content bg-white rounded px-2 py-4 shadow-inner" style={`min-height:${height}px;`}>
    {#if windowContent}
      This is the {@html windowContent} window...
    {:else}
      ...
    {/if}
  </div>
</div>

<svelte:window onmousedown={handleMouseDown} onmouseup={() => isDragging = false} onmousemove={handleDrag} />