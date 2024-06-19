import { base } from "thirdweb/chains";
import { useSendTransaction } from "thirdweb/react";
 
const { mutate: sendTransaction } = useSendTransaction({
  payModal: {
    prefillBuy: {
      token: {
        address: "0x866a087038f7C12cf33EF91aC5b1AcE6Ac1DA788",
        name: "Base ETH",
        symbol: "ETH",
        icon: "...", // optional
      },
      chain: base,
      allowEdits: {
        amount: true, // allow editing buy amount
        token: false, // disable selecting buy token
        chain: false, // disable selecting buy chain
      },
    },
  },
});

