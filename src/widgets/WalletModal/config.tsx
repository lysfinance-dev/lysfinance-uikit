import Metamask from "./icons/Metamask";
import MathWallet from "./icons/MathWallet";
import TrustWallet from "./icons/TrustWallet";
import BinanceChain from "./icons/BinanceChain";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "TrustWallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Binance Chain Wallet",
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
