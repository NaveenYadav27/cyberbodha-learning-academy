import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Bell, ChevronDown, Menu, Shield, ShieldCheck, X } from "lucide-react";
import cyberbodhaLogo from "@/assets/cyberbodha-logo.png";

import { Button } from "@/components/ui/button";
import type { PortalRole } from "@/lib/cyberbodha-data";
import { portalNavigation } from "@/lib/cyberbodha-data";

type PortalLayoutProps = {
  role: PortalRole;
  children: React.ReactNode;
};

const roleNames: Record<PortalRole, string> = {
  student: "Student portal",
  instructor: "Instructor portal",
  admin: "Admin portal",
};

const rolePaths: Record<PortalRole, string> = {
  student: "/student",
  instructor: "/instructor",
  admin: "/admin",
};

export function PortalLayout({ role, children }: PortalLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = portalNavigation[role];
  const displayName = role === "student" ? "Alex Rivera" : role === "instructor" ? "Morgan Lee" : "Jordan Patel";

  return (
    <div className="portal-shell min-h-screen bg-background text-foreground">
      <header className="portal-topbar sticky top-0 z-30 flex h-[68px] items-center justify-between border-b border-border px-4 sm:px-7 lg:px-10">
        <div className="flex min-w-0 items-center gap-3">
          <Button aria-label={menuOpen ? "Close navigation" : "Open navigation"} variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
          <Link to={rolePaths[role]} className="flex shrink-0 items-center gap-2.5" aria-label="CyberBodha portal home">
            <span className="brand-mark"><img src={cyberbodhaLogo} alt="CyberBodha Logo" width={34} height={34} /></span>
            <span className="brand-wordmark">Cyber<span>Bodha</span></span>
          </Link>
          <span className="hidden h-6 w-px bg-border sm:block" />
          <span className="hidden truncate text-xs font-semibold text-muted-foreground sm:block">{roleNames[role]}</span>
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-5">
          <span className="hidden text-xs text-muted-foreground md:block">Learning organization <span className="ml-1 font-semibold text-foreground">Personal workspace</span></span>
          <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
            <Bell size={18} />
            <span className="notification-dot" />
          </Button>
          <button className="flex items-center gap-2 rounded-md p-1.5 text-left transition-colors hover:bg-secondary" aria-label={`Account menu for ${displayName}`}>
            <span className="avatar-chip">{displayName.split(" ").map((part) => part[0]).join("")}</span>
            <span className="hidden text-xs font-semibold sm:block">{displayName}</span>
            <ChevronDown size={14} className="hidden text-muted-foreground sm:block" />
          </button>
        </div>
      </header>
      <div className="portal-body">
        <aside className={`portal-sidebar ${menuOpen ? "is-open" : ""}`}>
          <div className="px-5 pb-4 pt-6">
            <p className="eyebrow-label">Workspace</p>
            <nav className="mt-4 grid gap-1" aria-label={`${roleNames[role]} navigation`}>
              {links.map(({ label, icon: Icon }, index) => (
                <a key={label} href="#overview" onClick={() => setMenuOpen(false)} className={`portal-nav-link ${index === 0 ? "is-current" : ""}`}>
                  <Icon size={17} strokeWidth={1.8} />
                  <span>{label}</span>
                  {role === "instructor" && label === "Assignments" ? <span className="nav-count">12</span> : null}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-auto px-5 pb-5">
            <div className="workspace-note">
              <div className="flex items-center gap-2"><Shield size={15} className="text-primary" /><span className="text-xs font-semibold">Secure learning space</span></div>
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">Your progress and learning activity, together in one place.</p>
            </div>
            <Link to="/" className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground hover:text-foreground">Back to academy <ArrowRight size={12} /></Link>
          </div>
        </aside>
        {menuOpen ? <button className="sidebar-scrim" aria-label="Close navigation" onClick={() => setMenuOpen(false)} /> : null}
        <main id="overview" className="portal-main min-w-0">{children}</main>
      </div>
      <a href="#overview" className="portal-help" aria-label="Quick start guide"><span className="help-icon"><ArrowDownRight size={16} /></span><span>Quick start</span></a>
    </div>
  );
}
