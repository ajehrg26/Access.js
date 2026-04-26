// filter.js — hosted on GitHub, loaded remotely. Do not share directly.
(async () => {
  // ============================================================
  // STEP 1: AUTO-EXTRACT UID FROM PAGE (cannot be faked)
  // ============================================================
  const _uidEl = document.querySelector("p.id.x-row.x-row-middle");
  const _uidRaw = _uidEl ? _uidEl.textContent.trim() : null;
  const _uid = _uidRaw
    ? _uidRaw.replace(/^UID:/i, "").replace(/\s.*$/, "").trim()
    : null;

  if (!_uid) {
    alert("❌ Could not detect your account UID.\nPlease navigate to the home page and try again.");
    return;
  }

  // ============================================================
  // STEP 2: VERIFY UID AGAINST SUPABASE (server-side check)
  // ============================================================
  const _sb = await fetch(
    "https://yhhrkirlabyghtczabqh.supabase.co/rest/v1/members?member_id=eq."
      + encodeURIComponent(_uid)
      + "&active=eq.true&select=member_id",
    {
      headers: {
        apikey: "sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse",
        Authorization: "Bearer sb_publishable_VAd887a32f8HihbGKeLiJw_lkN6eIse",
      },
    }
  ).then(r => r.json()).catch(() => []);

  if (!Array.isArray(_sb) || _sb.length === 0) {
    alert("❌ Access denied.\nUID: " + _uid + " is not authorized.\nContact the admin to get access.");
    return; // hard stop — nothing below runs
  }

  console.log("✅ UID " + _uid + " verified. Script starting...");

  // ============================================================
  // MAIN SCRIPT (paste your obfuscated script below this line)
  // ============================================================

  /* INSERT YOUR filter_verified_auto.js CONTENT HERE */

})();
