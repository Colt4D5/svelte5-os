<script lang="ts">
  import type { Snippet } from 'svelte';
  const { id, x = 200, y = 100, width = 800, height = 400, path, children }: {
    id: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    path: string;
    children?: Snippet;
  } = $props();
  let windowTitle = $state('Window Title');
  let windowContent = $state('');

  setTimeout(() => {
    windowContent = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed doloribus et similique qui non beatae odit ratione numquam nobis dolorem ex nemo, quos quod deleniti iste veniam, quisquam culpa dolores! Reprehenderit sequi ullam nobis ad quod iure iste totam quis nulla aut ipsa accusamus sint fugit earum soluta culpa corrupti nam magni, adipisci, vel iusto cum voluptatibus. Exercitationem quo doloribus culpa minus corrupti voluptatibus!</p>`;
  }, 750);
</script>


<div {id} class="window absolute px-2 pb-2 bg-slate-400 rounded shadow-md" data-path={path} style={`left: ${x}px; top: ${y}px;width: ${width}px;`}>
  <div class="p-1 py-2 flex justify-between items-center">
    <p class="m-0 leading-4">{windowTitle}</p>
    <ul class="flex gap-2">
      <li class="w-4 h-4 rounded-full border-[1px] cursor-pointer bg-green-400"></li>
      <li class="w-4 h-4 rounded-full border-[1px] cursor-pointer bg-yellow-400"></li>
      <li class="w-4 h-4 rounded-full border-[1px] cursor-pointer bg-red-400"></li>
    </ul>
  </div>
  <div class="window-content bg-white rounded px-2 py-4 shadow-inner" style={`min-height:${height}px;`}>
    {@html windowContent}
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>