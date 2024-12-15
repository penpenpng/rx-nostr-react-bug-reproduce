import { createContext, useContext } from "react";
import { createRxNostr } from "rx-nostr";
import { verifier } from "rx-nostr-crypto";

const rxNostr = createRxNostr({ verifier });

export const RxNostrContext = createContext({ rxNostr });
export const useRxNostr = () => useContext(RxNostrContext);
