<script lang="ts">
  import Login from './Login/Login.svelte'
  import { GlobalStore } from './stores/global-store'

  export let name: string
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    {#if $GlobalStore.account}
      {$GlobalStore.account.accountId}
    {:else}
      <Login />
    {/if}
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
