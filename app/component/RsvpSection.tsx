"use client";

import { type ChangeEvent, type FormEvent, useEffect, useRef, useState } from "react";
import {
  ADMIN_PASSWORD,
  CONTACT_PHONE,
  SHEET_CSV_URL,
  type RsvpChoice,
  rsvpMessages,
} from "../types/constant";
import { LinkPill, SectionHeading, cn } from "./ui";

// ── Types ────────────────────────────────────────────────────────────────────

type Guest = {
  name: string;
  email: string;
  attendance: string;
  note: string;
};

type LockStatus = "locked" | "unlocked" | "wrong";

// ── Constants ────────────────────────────────────────────────────────────────

const rsvpOptions: Array<{
  key: RsvpChoice;
  label: string;
  emoji: string;
  activeClassName: string;
}> = [
  {
    key: "attending",
    label: "Attending",
    emoji: "🎉",
    activeClassName: "border-[#6d2039] bg-[#6d2039] text-white",
  },
  {
    key: "maybe",
    label: "Maybe",
    emoji: "🤞",
    activeClassName: "border-[#f1d7a3] bg-[#f5dfb0] text-[#5f2436]",
  },
  {
    key: "unable",
    label: "Unable",
    emoji: "💌",
    activeClassName: "border-[#f1cad3] bg-[#f6d6dd] text-[#5f2436]",
  },
];

const pillStyle: Record<string, string> = {
  attending: "bg-[#6d2039] text-white",
  maybe:     "bg-[#f5dfb0] text-[#5f2436]",
  unable:    "bg-[#f6d6dd] text-[#5f2436]",
};

const pillLabel: Record<string, string> = {
  attending: "Attending",
  maybe:     "Maybe",
  unable:    "Sending love",
};

const FAKE_GUESTS: Guest[] = [
  { name: "Amara Okonkwo", email: "amara@example.com", attendance: "attending", note: "" },
  { name: "Tunde Musa",    email: "tunde@example.com", attendance: "maybe",     note: "Fingers crossed!" },
  { name: "Chisom Eze",    email: "chisom@example.com",attendance: "unable",    note: "Wishing you joy" },
];

// ── CSV parser ───────────────────────────────────────────────────────────────

function parseCSV(csv: string): Guest[] {
  const [headerLine, ...rows] = csv.trim().split("\n");
  const headers = headerLine
    .split(",")
    .map((h) => h.trim().toLowerCase().replace(/\s+/g, "_"));

  return rows
    .map((row) => {
      const cols: string[] = [];
      let current = "";
      let inQuotes = false;
      for (const ch of row) {
        if (ch === '"') { inQuotes = !inQuotes; continue; }
        if (ch === "," && !inQuotes) { cols.push(current.trim()); current = ""; continue; }
        current += ch;
      }
      cols.push(current.trim());

      return {
        name:       cols[headers.indexOf("name")]  ?? "",
        email:      cols[headers.indexOf("email")]      ?? "",
        attendance: cols[headers.indexOf("attendance")] ?? "",
        note:       cols[headers.indexOf("note")]       ?? "",
      };
    })
    .filter((g) => g.name);
}

// ── Main component ───────────────────────────────────────────────────────────

export default function RsvpSection() {

  // — RSVP form state —
  const [selected, setSelected] = useState<RsvpChoice | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    guest_name: "",
    guest_email: "",
    guest_note: "",
  });

  // — Admin panel state —
  const [lockStatus, setLockStatus] = useState<LockStatus>("locked");
  const [password, setPassword]     = useState("");
  const [guests, setGuests]         = useState<Guest[]>([]);
  const [loadingGuests, setLoadingGuests] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  // — Derived counts —
  const counts = {
  total:     guests.length,
  attending: guests.filter((g) => g.attendance.toLowerCase() === "attending").length,
  maybe:     guests.filter((g) => g.attendance.toLowerCase() === "maybe").length,
  unable:    guests.filter((g) => g.attendance.toLowerCase() === "unable").length,
};

  // ── Handlers ────────────────────────────────────────────────────────────────

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selected) return;
  
    const attendanceMap: Record<string, string> = {
      attending: "Attending",
      maybe:     "Maybe",
      unable:    "Unable",
    };
  
    const params = new URLSearchParams();
    params.append("entry.933818150", formValues.guest_name);
    params.append("entry.795689906", formValues.guest_email);
    params.append("entry.1901303094", attendanceMap[selected]);
  params.append("entry.44292105", formValues.guest_note); 
  
    await fetch("https://docs.google.com/forms/d/e/1FAIpQLScDFy2upK18gcibPoeS_BnbNhwLr7ar3CwPWwPRcP6l4p3ifA/formResponse", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
  
    setSubmitted(true);
  };

  const fetchGuests = async () => {
    setLoadingGuests(true);
    try {
      const res  = await fetch(SHEET_CSV_URL);
      const text = await res.text();
      setGuests(parseCSV(text));
    } catch {
      setGuests([]);
    } finally {
      setLoadingGuests(false);
    }
  };

  const handleUnlock = () => {
    if (password === ADMIN_PASSWORD) {
      setLockStatus("unlocked");
      fetchGuests();
    } else {
      setLockStatus("wrong");
      setTimeout(() => {
        setLockStatus("locked");
        setPassword("");
      }, 1800);
    }
  };

  const handleLock = () => {
    setLockStatus("locked");
    setPassword("");
    setGuests([]);
  };

  useEffect(() => {
    if (lockStatus === "locked") passwordInputRef.current?.focus();
  }, [lockStatus]);

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <section id="rsvp" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#5b2137_0%,#8d4961_54%,#d0a55f_150%)]" />
      <div className="pattern-lattice absolute inset-0 opacity-40" />
      <div className="pattern-petals absolute inset-0 opacity-34" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ── Top: heading + form ── */}
        <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">

          {/* Left: heading + quick contact */}
          <div className="flex flex-col justify-between gap-5">
            <SectionHeading
              eyebrow="RSVP"
              title="Will you share this joy with us?"
              subtitle="Let us know so we can save your seat."
              tone="light"
            />
            <div className="rounded-4xl border border-white/14 bg-white/10 p-5 text-white/84 backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#f5dfb0]">
                💬 Quick Contact
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Questions about directions or dress code? Just call.
              </p>
              <div className="mt-4">
                <LinkPill href={`tel:${CONTACT_PHONE}`} variant="ghost">
                  Call {CONTACT_PHONE}
                </LinkPill>
              </div>
            </div>
          </div>

          {/* Right: RSVP form */}
          <div className="surface-card rounded-[2.2rem] p-5 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name + Email */}
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a6571]">
                    Full Name
                  </span>
                  <input
                    type="text"
                    name="guest_name"
                    value={formValues.guest_name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-2xl border border-[#eadcdf] bg-white px-4 py-3 text-sm text-[#4f2433] outline-none placeholder:text-[#ae97a1] focus:border-[#b87b8e]"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a6571]">
                    Email
                  </span>
                  <input
                    type="email"
                    name="guest_email"
                    value={formValues.guest_email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-2xl border border-[#eadcdf] bg-white px-4 py-3 text-sm text-[#4f2433] outline-none placeholder:text-[#ae97a1] focus:border-[#b87b8e]"
                  />
                </label>
              </div>

              {/* Attendance */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a6571]">
                  Attendance
                </p>
                <div className="mt-2 grid grid-cols-3 gap-2.5">
                  {rsvpOptions.map((option) => (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => setSelected(option.key)}
                      className={cn(
                        "rounded-[1.4rem] border border-[#eadde0] bg-white px-3 py-3.5 text-center text-[#5d3b47] shadow-[0_8px_20px_rgba(83,34,49,0.06)] transition-transform hover:-translate-y-0.5 active:scale-95",
                        selected === option.key && option.activeClassName,
                      )}
                    >
                      <p className="text-xl leading-none">{option.emoji}</p>
                      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] leading-tight">
                        {option.label}
                      </p>
                    </button>
                  ))}
                </div>
                <input type="hidden" name="attendance" value={selected ?? ""} />
              </div>

              {/* Note */}
              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8a6571]">
                  Note{" "}
                  <span className="normal-case tracking-normal text-[#ae97a1]">(optional)</span>
                </span>
                <textarea
                  name="guest_note"
                  value={formValues.guest_note}
                  onChange={handleChange}
                  rows={2}
                  placeholder="A sweet message for the couple…"
                  className="mt-2 w-full rounded-2xl border border-[#eadcdf] bg-white px-4 py-3 text-sm text-[#4f2433] outline-none placeholder:text-[#ae97a1] focus:border-[#b87b8e]"
                />
              </label>

              {/* Submit row */}
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={!selected}
                  className={cn(
                    "shrink-0 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_32px_rgba(92,29,46,0.18)] transition-transform",
                    selected
                      ? "bg-[#6d2039] hover:-translate-y-0.5 hover:bg-[#5c1930] active:scale-95"
                      : "cursor-not-allowed bg-[#b49aa3] shadow-none",
                  )}
                >
                  {submitted ? "✓ Sent!" : "Send RSVP"}
                </button>
                <p aria-live="polite" className="text-xs leading-5 text-[#8a7278]">
                  {submitted
                    ? "We can't wait to celebrate with you 🥂"
                    : selected
                    ? rsvpMessages[selected]
                    : "Pick an option above to continue."}
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* ── Bottom: Admin guest list panel ── */}
        <div className="mt-5 overflow-hidden rounded-[2.2rem] border border-white/14 bg-white/10 backdrop-blur">

          {/* Panel header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#f5dfb0]">
                Guest List
              </p>
            {lockStatus === "unlocked" && !loadingGuests && (
  <p className="mt-0.5 text-xs text-white/50">
    {counts.total} responses · {counts.attending} attending · {counts.maybe} maybe · {counts.unable} unable
  </p>
)}
            </div>
            {lockStatus === "unlocked" && (
              <div className="flex gap-2">
                <button
                  onClick={fetchGuests}
                  className="rounded-full border border-white/20 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70 transition hover:bg-white/10"
                >
                  ↻ Refresh
                </button>
                <button
                  onClick={handleLock}
                  className="rounded-full border border-white/20 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70 transition hover:bg-white/10"
                >
                  Lock
                </button>
              </div>
            )}
          </div>

          {/* Panel body */}
          <div className="relative min-h-[240px]">

            {/* Guest rows — blurred when locked */}
            <div
              className={cn(
                "px-5 pb-5 transition-all duration-500",
                lockStatus !== "unlocked" && "pointer-events-none select-none blur-sm opacity-60",
              )}
            >
              {loadingGuests ? (
                <p className="py-8 text-center text-sm text-white/50">Loading responses…</p>
              ) : guests.length === 0 && lockStatus === "unlocked" ? (
                <p className="py-8 text-center text-sm text-white/50">No responses yet.</p>
              ) : (
                <div className="overflow-hidden rounded-2xl bg-white">
                  {(lockStatus === "unlocked" ? guests : FAKE_GUESTS).map((guest, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 border-b border-[#f0e8eb] px-4 py-3 last:border-none"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5dfb0] text-[11px] font-semibold text-[#5f2436]">
                        {guest.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-medium text-[#4f2433]">{guest.name}</p>
                        <p className="truncate text-[11px] text-[#ae97a1]">{guest.email}</p>
                        {guest.note && (
                          <p className="mt-0.5 truncate text-[11px] italic text-[#8a7278]">
                            "{guest.note}"
                          </p>
                        )}
                      </div>
                      <span
                        className={cn(
                          "shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em]",
                          pillStyle[guest.attendance] ?? "bg-[#eadcdf] text-[#5f2436]",
                        )}
                      >
                        {pillLabel[guest.attendance] ?? guest.attendance}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Lock overlay */}
            {lockStatus !== "unlocked" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5b2137] text-lg">
                  🔒
                </div>
                <p className="text-sm font-semibold text-white">Admin only</p>
                <p className="text-xs text-white/60">Enter password to view the guest list</p>

                <div className="mt-1 flex items-center gap-2">
                  <input
                    ref={passwordInputRef}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
                    placeholder="Password"
                    className={cn(
                      "w-36 rounded-full border px-4 py-2 text-[13px] text-[#4f2433] outline-none transition",
                      lockStatus === "wrong"
                        ? "border-red-400 bg-red-50"
                        : "border-[#eadcdf] bg-white focus:border-[#b87b8e]",
                    )}
                  />
                  <button
                    onClick={handleUnlock}
                    className="rounded-full bg-[#6d2039] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-transform hover:bg-[#5c1930] active:scale-95"
                  >
                    Unlock
                  </button>
                </div>

                {lockStatus === "wrong" && (
                  <p className="animate-pulse text-[11px] font-medium text-red-300">
                    Wrong password. Try again.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}