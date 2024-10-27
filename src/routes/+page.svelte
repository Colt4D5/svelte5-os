<script lang="ts">
  import { osState } from "../lib/osState.svelte";
  // import FolderIcon from "../../assets/icons/folder.svelte";
  import FolderIcon from "../lib/assets/icons/folder.svelte";
	import { enhance } from "$app/forms";
  const width = '64px';
  const height = '64px';

  async function openFile(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const form: HTMLFormElement | null = target.closest('form');

    if (!form) {
      return;
    }

    const path = form.dataset.path;
    const title = form.dataset.title;
    const id = form.id;

    console.log(id, path, title);

    if (!path || !title) {
      return;
    }

    const response = await fetch('?/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({path})
    });
    const data = await response.json();

    console.log(data);

    osState.addWindow({
      title,
      path,
      icon: 'trash',
      state: 'open',
      id: crypto.randomUUID(),
      position: {
        x: 200,
        y: 200
      }
    })
  }
</script>

<div id="desktop" class="p-4">
  {#each osState.desktopItems as item}
    <form method="POST" use:enhance id={item.id} data-path={item.path} data-title={item.title}>
      <input type="hidden" name="path" value={item.path}>
      <button type="button" ondblclick={openFile} data-path={item.path} name="path" value={item.path}>
        <FolderIcon {width} {height} color={osState.themeColors.primary} />
        {item.title}
      </button>
    </form>
  {/each}
</div>