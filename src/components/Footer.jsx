import logo from "../assets/images/logo.jpg";

const CONTACT = {
  phone: "+251916098383",
  phoneHref: "tel:+251916098383",
  email: "zuburgerspot@gmail.com",
  instagram: "https://www.instagram.com/zubeydaa1626/",
  tiktok: "https://www.tiktok.com/@zuburgerspot?_r=1&_t=ZS-97yUP8BeQ80",
  telegram: "https://t.me/Zh161616",
};

function PhoneIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TiktokIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path
        d="M16 3c.5 2.5 2.2 4 5 4.2V10c-1.8.1-3.5-.4-5-1.4v6.7A5.5 5.5 0 1 1 10.5 10a5.4 5.4 0 0 1 1 .1v2.9a2.6 2.6 0 1 0 1.8 2.5V3z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TelegramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="m22 2-20 8 6 2.5L10 20l3.5-4.5L20 19z" strokeLinejoin="round" />
      <path d="M8 12.5 21 2" strokeLinecap="round" />
    </svg>
  );
}

const socials = [
  { icon: InstagramIcon, href: CONTACT.instagram, label: "Instagram" },
  { icon: FacebookIcon, href: CONTACT.facebook, label: "Facebook" },
  { icon: TiktokIcon, href: CONTACT.tiktok, label: "TikTok" },
  { icon: TelegramIcon, href: CONTACT.telegram, label: "Telegram" },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 pt-12 pb-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Zu Burger Spot"
            className="h-14 w-14 rounded-full object-cover ring-1 ring-[var(--color-gold)]/40"
          />
          <p className="font-display mt-4 text-lg tracking-[0.1em] text-[var(--color-cream)]">
            ZU BURGER SPOT
          </p>
          <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-[var(--color-stone)]">
            Shashamane
          </p>

          <div className="mt-6 flex flex-col items-center gap-2 text-sm sm:flex-row sm:gap-6">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 text-[var(--color-stone)] transition-colors hover:text-[var(--color-gold-light)]"
            >
              <PhoneIcon className="h-4 w-4" aria-hidden="true" />
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 text-[var(--color-stone)] transition-colors hover:text-[var(--color-gold-light)]"
            >
              <MailIcon className="h-4 w-4" aria-hidden="true" />
              {CONTACT.email}
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[var(--color-stone)] transition-colors hover:border-[var(--color-gold)]/50 hover:text-[var(--color-gold-light)]"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>

          <p className="mt-1 text-[11px] text-[var(--color-stone)]/70">
            &copy; {new Date().getFullYear()} © 2026 Zu Burger Spot. All rights
            reserved.
          </p>
          <p className="mt-8 text-[11px] text-[var(--color-stone)]/70">
            developed by{" "}
            <a
              href="https://t.me/M_F2_phelinophiler"
              className="text-[var(--color-gold-light)] hover:underline"
            >
              FK Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
