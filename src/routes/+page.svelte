<script lang="ts">
  import { osState } from "$lib/osState.svelte";
  import FolderIcon from "$lib/assets/icons/folder.svelte";
  const width = '64px';
  const height = '64px';

  function openItem(this: HTMLButtonElement) {
    const { path } = this.dataset;

    osState.addWindow({
      title: 'Trash',
      path: '/trash',
      icon: 'trash',
      state: 'open',
      id: "90ea3d7f-78ce-4282-acd7-6e70136239c2",
    })
  }
</script>

<div id="desktop" class="p-4">
  {#each osState.desktopItems as item}
    <button ondblclick={openItem} data-path={item.path}>
      <FolderIcon {width} {height} color={osState.themeColors.primary} />
      {item.title}
    </button>
  {/each}
</div>

