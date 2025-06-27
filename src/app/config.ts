import { http, createConfig } from "wagmi";
import { polygon, sepolia } from "wagmi/chains";
import {
  injected,
  metaMask,
  walletConnect,
  coinbaseWallet,
} from "wagmi/connectors";

const projectId = "7a477fef61ccfa7ad40dd83099873385";

export const config = createConfig({
  chains: [polygon,sepolia],
  connectors: [
    injected(),
    metaMask(),
    ...(typeof window !== "undefined" ? [walletConnect({ projectId })] : []),
    coinbaseWallet(),
  ],
  transports: {
    [polygon.id]: http(),
    [sepolia.id]: http(),
  },
});
