// Base Respax URL format:
// https://app.respax.com/public/tw/tourinformation/{TOUR_CODE}?site=TWAIRPORT&categoryId=428

const BASE = "https://app.respax.com/public/tw/tourinformation";
const PARAMS = "?site=TWAIRPORT&categoryId=428";

// All available transfer routes keyed as "{from}-{to}"
export const RESPAX_ROUTES: Record<string, string> = {
  "cns-pd":  `${BASE}/TAPPD${PARAMS}`,  // Cairns Airport → Port Douglas
  "cns-pc":  `${BASE}/TAPPC${PARAMS}`,  // Cairns Airport → Palm Cove
  "cns-cn":  `${BASE}/TAPCN${PARAMS}`,  // Cairns Airport → Cairns Hotels
  "pd-cns":  `${BASE}/ATPDAP${PARAMS}`, // Port Douglas → Cairns Airport
  "pc-cns":  `${BASE}/ATPCAP${PARAMS}`, // Palm Cove → Cairns Airport
  "cn-cns":  `${BASE}/ATCNAP${PARAMS}`, // Cairns Hotels → Cairns Airport
};

// Default booking URL (Cairns Airport → Port Douglas, most common route)
export const BOOKING_URL = RESPAX_ROUTES["cns-pd"];
