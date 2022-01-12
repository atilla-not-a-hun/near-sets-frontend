import * as nearAPI from 'near-api-js'
import { WalletConnection } from 'near-api-js'

const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore()

export async function getNearWalletAccount(
  network: string,
): Promise<nearAPI.ConnectedWalletAccount | null> {
  const { connect } = nearAPI

  const config = {
    networkId: 'testnet',
    keyStore,
    nodeUrl: getRPCUrl(network),
    walletUrl: getWalletUrl(network),
    helperUrl: getHelperUrl(network),
    explorerUrl: getExplorerUrl(network),
    headers: {},
  }
  const near = await connect(config)
  const wallet = new WalletConnection(near, 'Near Sets')
  if (wallet.isSignedIn()) console.log('signed in')
	else await wallet.requestSignIn() // TODO: use callbacks please

  return wallet.account()
}

export function getWalletUrl(networkID?: string): string {
  return `https://wallet.${networkID}.near.org`
}

export function getRPCUrl(networkID?: string): string {
  return `https://rpc.${networkID}.near.org`
}

export const getHelperUrl = (networkID: string) =>
  `https://helper.${networkID}.near.org`

export const getExplorerUrl = (networkID: string) =>
  `https://explorer.${networkID}.near.org`
