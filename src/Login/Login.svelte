<script lang="ts">
  import Button from '@smui/button'
  import Card from '@smui/card'
  // import {
  //   AccountStore,
  //   getTorusAccessToken,
  //   storeOauthState,
  //   storeTorusAccessToken,
  // } from '../state/accounts.svelte';
  // import { constants } from '../config/constants';
  import Spinner from 'svelte-spinner'
  import { getNearWalletAccount } from '../utils/connect'
  import { config } from '../config'
  import { GlobalStore } from '../stores/global-store'

  //TODO: Change to global color vairable. See https://github.com/bafnetwork/baf-wallet-v2/issues/53
  let size = 50
  let speed = 750
  let color = '#A82124'
  let thickness = 2.0
  let gap = 40

  let isLoading = false

  async function login() {
    const account = await getNearWalletAccount(config.network)
    console.log("AAAAA", account.accountId)
    GlobalStore.set({ ...$GlobalStore, account })
  }
</script>

<Card padded>
  <Button on:click={login} variant="raised">Log in</Button>
  {#if isLoading}
    <Spinner {size} {speed} {color} {thickness} {gap} />
  {/if}
</Card>

<style>
</style>
