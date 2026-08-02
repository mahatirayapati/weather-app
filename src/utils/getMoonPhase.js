// Utils means Utility function - JavaScript function that performs some work and returns a value.
//It does not return JSX.

function getMoonPhase() {
  const knownNewMoon = new Date("2000-01-06T18:14:00Z");
  const now = new Date();
  const days =
    (now.getTime() - knownNewMoon.getTime()) /
    (1000 * 60 * 60 * 24);
  const cycle = 29.53058867;
  const moonAge = ((days % cycle) + cycle) % cycle;
  if (moonAge < 1.84566) return "🌑 New Moon";
  if (moonAge < 5.53699) return "🌒 Waxing Crescent";
  if (moonAge < 9.22831) return "🌓 First Quarter";
  if (moonAge < 13.0) return "🌔 Waxing Gibbous";
  if (moonAge < 16.6) return "🌕 Full Moon";
  if (moonAge < 20.3) return "🌖 Waning Gibbous";
  if (moonAge < 24.0) return "🌗 Last Quarter";
  if (moonAge < 27.7) return "🌘 Waning Crescent";

  return "🌑 New Moon";
}

export default getMoonPhase;