import { useEffect, useState } from "react";
import { useRxNostr } from "./use-rx-nostr";
import { createRxBackwardReq } from "rx-nostr";
import type * as Nostr from "nostr-typedef";

export default function Page() {
  const { rxNostr } = useRxNostr();
  const [events, setEvents] = useState<Nostr.Event[]>([]);

  useEffect(() => {
    const rxReq = createRxBackwardReq();

    const sub = rxNostr.use(rxReq).subscribe(({ event }) => {
      console.log(event);
      setEvents((events) => [...events, event]);
    });

    rxReq.emit({ kinds: [1], limit: 5 });

    return () => {
      setEvents([]);
      sub.unsubscribe();
    };
  }, [rxNostr]);

  return (
    <>
      <h1>Last 5 notes</h1>
      <div>
        {events.map((ev) => (
          <div key={ev.id}>
            {ev.pubkey.slice(0, 5)}: {ev.content}
          </div>
        ))}
      </div>
    </>
  );
}
