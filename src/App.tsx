import { createRxNostr } from "rx-nostr";
import { verifier } from "rx-nostr-crypto";
import { RxNostrContext } from "./use-rx-nostr";
import Page from "./Page";

function App() {
  const rxNostr = createRxNostr({ verifier });
  rxNostr.setDefaultRelays(["wss://yabu.me"]);

  return (
    <RxNostrContext.Provider value={{ rxNostr }}>
      <Page />
    </RxNostrContext.Provider>
  );
}

export default App;
