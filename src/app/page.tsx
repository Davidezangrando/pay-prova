import Image from "next/image";
import { ConnectButton, PayEmbed, useSendTransaction } from "thirdweb/react";
import { client } from "./client";
import { base } from "thirdweb/chains";

export default function Home() {  
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

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <div className="flex justify-center mb-20">
          <ConnectButton
            client={client}
            appMetadata={{
              name: "Example App",
              url: "https://example.com",
            }}
          />
        </div>
        <button onClick={() => sendTransaction()}>Send Transaction</button>
      </div>
    </main>
  );
}