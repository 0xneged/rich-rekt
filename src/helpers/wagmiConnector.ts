import { farcasterFrame } from '@farcaster/frame-wagmi-connector'
import { createConfig, http } from 'wagmi'
import { base } from 'wagmi/chains'

export const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },

  connectors: [farcasterFrame()],
})
