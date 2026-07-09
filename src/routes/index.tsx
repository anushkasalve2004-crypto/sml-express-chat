import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Truck, Package, Warehouse, Shield, MapPin, Clock, Headphones, Lock,
  IndianRupee, UserCheck, Radio, Smile, Phone, Mail, MessageCircle,
  Menu, X, ArrowRight, CheckCircle2, ChevronDown, Facebook,
  Instagram, Linkedin, Twitter, Plane, Container,
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import smLogo from "@/assets/sm-logistics-logo.jpg";
import vPickup from "@/assets/v-pickup.jpg";
import vclosed1 from "@/assets/v-closed1.jpg";
import vclosed2 from "@/assets/v-closed2.jpg";
import veicher from "@/assets/v-eicher.jpg";
import vTempo from "@/assets/v-tempo.jpg";
import vTrailer from "@/assets/v-trailer.jpg";
import vopen from "@/assets/v-open.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: HomePage,
});

const WA_PHONE = "919270276792";
const PHONE_TEL = "tel:+919270276792";
const PHONE_DISPLAY = "+91 92702 76792";
const waAppUrl = (message: string) =>
  `whatsapp://send?phone=${WA_PHONE}&text=${encodeURIComponent(message)}`;
const WA_QUOTE_MSG =
  "Hello SM Logistics,\nI would like to book a logistics service.\n\nService Required:\nPickup Location:\nDelivery Location:\nGoods Type:\nWeight:\nPreferred Date:\n\nPlease share the quotation.\n\nThank you.";
const WA_QUOTE_URL = waAppUrl(WA_QUOTE_MSG);
const WA_SIMPLE_URL = waAppUrl(
  "Hello SM Logistics,\nI want to book a transport service.\nPlease share the quotation."
);

const waVehicleUrl = (vehicle: string) =>
  waAppUrl(
    `Hello SM Logistics,\nI want to book the ${vehicle}.\n\nPickup Location:\nDelivery Location:\nGoods Type:\nWeight:\nPreferred Date:\n\nPlease share the quotation.`
  );

// ------------- Reveal on scroll --------------
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setShown(true));
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ------------- Nav --------------
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["Fleet", "#fleet"],
    ["About Us", "#about"],
    ["Why Choose Us", "#why"],
    ["Contact", "#contact"],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-card" : "bg-background/60 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 min-w-0">
          <img
            src={smLogo}
            alt="SM Logistics logo"
            className="h-11 w-11 shrink-0 rounded-xl object-contain bg-white shadow-elegant"
          />
          <span className="flex flex-col leading-none min-w-0">
            <span className="truncate text-lg font-black text-brown">SM Logistics</span>
            <span className="truncate text-[10px] font-medium uppercase tracking-widest text-brand">Your Growth, Our Priority</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition hover:bg-accent hover:text-brand"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
            <a
              href={WA_SIMPLE_URL}
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground shadow-elegant transition hover:-translate-y-0.5 hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
            Book Now
          </a>
        </div>

        <button
          className="lg:hidden grid h-11 w-11 place-items-center rounded-xl border border-border bg-background"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-brand"
              >
                {label}
              </a>
            ))}
            <a
              href={WA_SIMPLE_URL}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground shadow-elegant"
            >
              <MessageCircle className="h-4 w-4" /> Book Now on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// ------------- Hero --------------
function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-brown">
        <img
          src={heroBanner}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,88,12,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(234,88,12,0.10),transparent_50%)]" />
      </div>

      {/* Decorative floating shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand/25 blur-3xl animate-float" />
        <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-brand/20 blur-3xl animate-float [animation-delay:1.5s]" />
        <div className="absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float [animation-delay:3s]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-24 pt-16 text-center sm:px-6 lg:px-8 lg:pb-36 lg:pt-28">
        <div className="animate-drive-in text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand shadow-glow" />
            PAN India Logistics • Trusted Since Day One
          </span>
          <div className="mt-4 flex justify-center">
  <div className="inline-flex items-center gap-2 rounded-full border border-brand bg-white/10 px-5 py-2 text-white">
    <span className="text-brand">✔</span>
    <span className="font-semibold">
      ISO 9001:2015 Certified Logistics Company
    </span>
  </div>
</div>
          <h1 className="mt-6 text-4xl font-black leading-[1.05] sm:text-5xl lg:text-7xl">
            Complete Logistics Solutions{" "}
            <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">
              That Drive Your Business Forward
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
            Reliable • Efficient • On-Time Logistics Services Across India. Book your shipment in
            minutes — no paperwork, no complicated forms.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WA_QUOTE_URL}
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-elegant transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              Get Quote <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={WA_SIMPLE_URL}
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-base font-semibold text-whatsapp-foreground shadow-elegant transition hover:-translate-y-0.5 hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              Order on WhatsApp
            </a>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Or call / WhatsApp directly:{" "}
            <a href={PHONE_TEL} className="font-semibold text-brand underline underline-offset-4">
              {PHONE_DISPLAY}
            </a>
          </p>

          {/* Trust stats */}
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k: "PAN India", v: "Coverage" },
              { k: "24×7", v: "Support" },
              { k: "On-Time", v: "Delivery" },
              { k: "Live", v: "Tracking" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm"
              >
                <p className="text-lg font-black text-brand sm:text-xl">{s.k}</p>
                <p className="text-[11px] font-medium uppercase tracking-widest text-white/70">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>





      <a href="#services" className="absolute inset-x-0 bottom-4 mx-auto grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white/80 animate-float">
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  );
}

// ------------- Services --------------
function Services() {
  const items = [
    { icon: Truck, title: "Road Transport", desc: "Full Load (FTL) & Part Load (PTL) across every state in India.", tags: ["FTL", "PTL"] },
    { icon: Container, title: "Container Services", desc: "FCL, LCL and multi-modal container movement from port to door.", tags: ["FCL", "LCL", "Multi-modal"] },
    {icon: Warehouse,title: "Over Dimension Cargo (ODC)", desc: "Handling oversized cargo requires expertise and specialized equipment. SM Logistics provides Over Dimension Cargo (ODC) services, ensuring compliance with transport regulations and safe delivery.", tags: ["ODC", "Heavy Cargo", "Safe Transport"] },
    { icon: Shield, title: "Safe Delivery", desc: "GPS-tracked, insured and handled with care from pickup to drop.", tags: ["GPS Tracking", "Secure", "On-Time"] },
  ];
  return (
    <section id="services" className="relative bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">What we do</p>
          <h2 className="mt-3 text-3xl font-black text-brown sm:text-5xl">Premium Logistics Services</h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end supply chain solutions engineered for speed, safety and scale.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[image:var(--gradient-brand)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand/10 text-brand transition-transform duration-500 group-hover:scale-110 group-hover:bg-[image:var(--gradient-brand)] group-hover:text-brand-foreground">
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-brown">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-brown">{t}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------- Fleet --------------
function Fleet() {
  const fleet = [
    { img: vPickup, name: "Pickup Truck", capacity: "Up to 1 Ton", suits: "Small parcels, local delivery" },
    { img: vTempo, name: "Mini Tempo", capacity: "500 kg – 1 Ton", suits: "City movement, e-commerce" },
    { img: vclosed1, name: "Closed Body Truck", capacity: "3 – 9 Tons", suits: "Regional shipments" },
    { img: veicher, name: "Eicher Truck", capacity: "5 – 12 Tons", suits: "Sensitive & weather-protected goods" },
    { img: vclosed2, name: "Closed Body Truck", capacity: "20ft / 32ft", suits: "Bulk cargo, industrial goods" },
    { img: vTrailer, name: "Heavy Container Trailer", capacity: "20 – 40 Tons", suits: "Heavy machinery, project cargo" },
    { img: vopen, name: "Top Open Body Truck", capacity: "07 – 35 Tons", suits: "Industrial and Manufacturer" },
  ];
  return (
    <section id="fleet" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Our Fleet</p>
            <h2 className="mt-3 text-3xl font-black text-brown sm:text-5xl">Right vehicle for every load</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            500+ owned and partner vehicles — from mini tempos to heavy trailers — ready across India.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((v, i) => (
            <Reveal key={v.name} delay={i * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={v.img}
                    alt={v.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-foreground shadow-elegant">
                    {v.capacity}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-brown">{v.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Suitable for:</span> {v.suits}
                  </p>
                  <a
                    href={waVehicleUrl(v.name)}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground shadow-card transition hover:-translate-y-0.5 hover:brightness-110"
                  >
                    <MessageCircle className="h-4 w-4" /> Book Now
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------- About --------------
function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-brown py-24 text-brown-foreground">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">About SM Logistics</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">Built on trust. Driven by delivery.</h2>
          <p className="mt-6 text-white/80">
            SM Logistics is a full-service transport and warehousing company serving businesses across India.
            With a large owned fleet, strategic partners and a customer-first WhatsApp booking model, we make
            moving goods effortless — from a single carton to a full trailer.
          </p>
          <p className="mt-4 text-white/70">
            Our mission is simple: your growth, our priority. We combine experienced drivers, live tracking and
            transparent pricing to deliver a modern logistics experience.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="space-y-4">
            {[
              ["Nationwide reach", "PAN India delivery network covering every metro and Tier-2/3 city."],
              ["Owned fleet", "Modern, insured vehicles maintained to the highest safety standards."],
              ["Dedicated account manager", "One WhatsApp contact for pickups, updates and invoices."],
              ["Transparent pricing", "Clear per-km, per-load quotes — no hidden charges."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-brand-foreground shadow-glow">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold">{t}</p>
                  <p className="mt-1 text-sm text-white/70">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

// ------------- Why Choose Us --------------
function WhyUs() {
  const items = [
    [MapPin, "PAN India Service", "Reliable transportation services covering every corner of India with speed, safety, and efficiency."],
    [Clock, "On-Time Delivery", "We value your time by ensuring every shipment or cargo reaches its destination as scheduled."],
    [Headphones, "24×7 Customer Support", "Our dedicated support team is available around the clock to assist you anytime."],
    [Lock, "Secure Handling", "Your cargo is handled with utmost care to ensure safe and damage-free delivery."],
    [IndianRupee, "Affordable Pricing", "Competitive and transparent pricing with no hidden charges for every shipment or cargo."],
    [UserCheck, "Experienced Drivers", "Skilled and professional drivers committed to safe, efficient, and timely transportation."],
    [Radio, "Live Tracking", "Stay informed with real-time shipment or cargo tracking from pickup to final delivery."],
    [Smile, "Customer Satisfaction", "Building lasting relationships through reliable service and exceptional customer care."],
  ] as const;
  return (
    <section id="why" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Why choose us</p>
          <h2 className="mt-3 text-3xl font-black text-brown sm:text-5xl">Eight reasons India moves with us</h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([Icon, label, desc], i) => (
            <Reveal key={label} delay={i * 60}>
              <div className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-elegant">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand/10 text-brand transition-all duration-500 group-hover:rotate-6 group-hover:bg-[image:var(--gradient-brand)] group-hover:text-brand-foreground">
                  <Icon className="h-7 w-7" />
                </span>
                <p className="text-lg font-bold text-brown">{label}</p>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------- Booking Process --------------
function Process() {
  const steps = [
    "Choose Vehicle",
    "Share Pickup & Delivery Location",
    "Receive Instant Quote",
    "Confirm Order via WhatsApp",
    "Shipment Starts",
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">How it works</p>
          <h2 className="mt-3 text-3xl font-black text-brown sm:text-5xl">Book a shipment in 5 steps</h2>
          <p className="mt-4 text-muted-foreground">Simple, transparent and fully on WhatsApp.</p>
        </Reveal>

        <ol className="mt-16 grid gap-6 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s} delay={i * 100}>
              <li className="relative flex h-full flex-col items-center rounded-3xl border border-border bg-card p-6 text-center shadow-card">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-xl font-black text-brand-foreground shadow-elegant">
                  {i + 1}
                </span>
                <p className="mt-5 font-bold text-brown">{s}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-brand" />
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ------------- WhatsApp CTA --------------
function WhatsAppBanner() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-whatsapp p-10 text-whatsapp-foreground shadow-elegant sm:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-5 lg:items-center">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
                Instant Booking
              </span>
              <h2 className="mt-4 text-3xl font-black sm:text-5xl">Book Your Shipment Instantly</h2>
              <p className="mt-4 max-w-2xl text-white/90">
                No complicated forms. Simply send your transport requirements on WhatsApp and receive a
                quotation within minutes.
              </p>
              <p className="mt-3 text-sm text-white/75">
                If WhatsApp is blocked, call or save: <a href={PHONE_TEL} className="font-semibold underline underline-offset-4">{PHONE_DISPLAY}</a>
              </p>
            </div>
            <div className="lg:col-span-2 flex lg:justify-end">
              <a
                href={WA_SIMPLE_URL}
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-whatsapp shadow-elegant transition hover:-translate-y-0.5 animate-pulse-ring"
              >
                <MessageCircle className="h-6 w-6" />
                Book Through WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}


// ------------- Contact --------------
function Contact() {
  const items = [
    { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: PHONE_TEL },
    { icon: Mail, label: "Email", value: "smlogistics.mum@gmail.com", href: "mailto:smlogistics.mum@gmail.com" },
    { icon: MapPin, label: "Service Area", value: "PAN India" },
  ];
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Contact</p>
          <h2 className="mt-3 text-3xl font-black text-brown sm:text-5xl">Talk to our logistics team</h2>
          <p className="mt-4 text-muted-foreground">
            Reach us on WhatsApp for the fastest response — quotes usually within 10 minutes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {items.map((c) => {
                const Inner = (
                  <>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
                      <c.icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.label}</p>
                      <p className="mt-0.5 truncate font-bold text-brown">{c.value}</p>
                    </div>
                  </>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-elegant">
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                    {Inner}
                  </div>
                );
              })}
              <a
                href={WA_QUOTE_URL}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-whatsapp px-6 py-4 text-base font-bold text-whatsapp-foreground shadow-elegant transition hover:-translate-y-0.5 hover:brightness-110"
              >
                <MessageCircle className="h-6 w-6" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full overflow-hidden rounded-3xl border border-border shadow-card">
              <iframe
                title="SM Logistics Service Area — India"
                src="https://www.openstreetmap.org/export/embed.html?bbox=68.0%2C6.5%2C97.5%2C36.0&layer=mapnik"
                className="h-full min-h-[380px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ------------- Footer --------------
function Footer() {
  return (
    <footer className="bg-brown text-brown-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <img
              src={smLogo}
              alt="SM Logistics logo"
              className="h-11 w-11 rounded-xl object-contain bg-white p-1"
            />
            <div>
              <p className="text-lg font-black">SM Logistics</p>
              <p className="text-[10px] font-medium uppercase tracking-widest text-brand">Your Growth, Our Priority</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/70">
            Complete road transport, container and warehousing solutions across India — bookable in one WhatsApp message.
          </p>
          <div className="mt-5 flex gap-3">
  <a
  href="https://facebook.com/smlogisticsinfo"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook"
>
  <Facebook className="h-4 w-4" />
</a>

<a
  href="https://www.instagram.com/smlogisticsinfo"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <Instagram className="h-4 w-4" />
</a>

<a
  href="https://www.linkedin.com/company/smlogisticsinf0/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <Linkedin className="h-4 w-4" />
</a>

<a
  href="https://x.com/smlogisticsinfo"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="X"
>
  <img
    src="/x-logo.png"
    alt="X"
    className="h-5 w-5 object-contain"
  />
</a>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {[["Home", "#home"], ["About", "#about"], ["Fleet", "#fleet"], ["Why Choose Us", "#why"], ["Contact", "#contact"]].map(([l, h]) => (
              <li key={h}><a href={h} className="transition hover:text-brand">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {["Road Transport (FTL/PTL)", "Container Services", "Warehousing", "Safe Delivery", "Multi-modal Transport"].map((s) => (
              <li key={s}><a href="#services" className="transition hover:text-brand">{s}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand" /> +91 92702 76792</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand" /> smlogistics.mum@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand" /> PAN India</li>
          </ul>
          <a
            href={WA_SIMPLE_URL}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground shadow-elegant transition hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" /> Book on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 SM Logistics. All rights reserved.</p>
          <p className="text-brand">Your Growth, Our Priority.</p>
        </div>
      </div>
    </footer>
  );
}

// ------------- Floating WA button --------------
function FloatingWhatsApp() {
  return (
    <a
      href={WA_SIMPLE_URL}
      aria-label="Book on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant animate-pulse-ring hover:brightness-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

// ------------- Page --------------
function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <About />
        <WhyUs />
        <Process />
        <WhatsAppBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
