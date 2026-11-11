import { ArrowRight, ArrowUpRight, Clock3, CirclePlay, MoreHorizontal, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { dashboardData, type PortalRole } from "@/lib/cyberbodha-data";
import { PortalLayout } from "./PortalLayout";

const accentClasses: Record<string, string> = {
  cyan: "activity-icon activity-icon-cyan",
  red: "activity-icon activity-icon-red",
  green: "activity-icon activity-icon-green",
};

export function PortalDashboard({ role }: { role: PortalRole }) {
  const data = dashboardData[role];

  return (
    <PortalLayout role={role}>
      <div className="dashboard-content">
        <div className="dashboard-heading">
          <div className="min-w-0">
            <p className="dashboard-overline">{data.role} <span className="overline-separator">/</span> Overview</p>
            <h1 className="mt-2 truncate text-[26px] font-semibold leading-tight sm:text-[32px]">{data.greeting}</h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{data.subheading}</p>
          </div>
          <Button className="hidden shrink-0 gap-2 sm:inline-flex">Explore learning <ArrowRight size={15} /></Button>
        </div>

        <section className="stats-grid" aria-label="Learning overview">
          {data.stats.map(({ label, value, detail, icon: Icon }, index) => (
            <article className="stat-panel" key={label}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground">{label}</p>
                  <p className="mt-2 text-[25px] font-semibold leading-none tracking-normal">{value}</p>
                </div>
                <span className={`stat-icon stat-icon-${index}`}><Icon size={17} strokeWidth={1.8} /></span>
              </div>
              <p className="mt-3 text-[11px] text-muted-foreground">{detail}</p>
            </article>
          ))}
        </section>

        <section className="featured-panel" aria-labelledby="focus-heading">
          <div className="featured-content">
            <p className="featured-kicker"><span className="live-indicator" /> {data.focusTitle}</p>
            <h2 id="focus-heading" className="mt-4 max-w-xl text-[24px] font-semibold leading-tight sm:text-[30px]">{data.focusName}</h2>
            <p className="mt-2 text-sm text-foreground/70">{data.focusMeta}</p>
            <div className="mt-7 max-w-md">
              <div className="mb-2 flex items-center justify-between text-xs"><span className="text-foreground/75">Overall progress</span><span className="font-semibold">{data.progress}%</span></div>
              <Progress value={data.progress} className="h-1.5 bg-foreground/15 [&>div]:bg-primary" />
            </div>
            <Button variant="secondary" className="mt-7 gap-2 bg-background text-foreground hover:bg-background/90">{role === "student" ? "Resume learning" : role === "instructor" ? "Open session" : "View organization"}<ArrowRight size={15} /></Button>
          </div>
          <div className="featured-art" aria-hidden="true">
            <div className="network-orbit orbit-one" /><div className="network-orbit orbit-two" />
            <div className="network-node node-a"><Sparkles size={16} /></div><div className="network-node node-b"><span /></div><div className="network-node node-c"><span /></div><div className="network-node node-d"><span /></div>
            <div className="network-line line-a" /><div className="network-line line-b" /><div className="network-line line-c" />
            <span className="art-label art-label-top">SKILL PROGRESSION</span><span className="art-label art-label-bottom">LEVEL 06 <span>·</span> ACTIVE</span>
          </div>
        </section>

        <div className="dashboard-lower-grid">
          <section className="activity-section" aria-labelledby="activity-heading">
            <div className="section-heading-row">
              <div><p className="section-overline">Your workspace</p><h2 id="activity-heading" className="mt-1 text-lg font-semibold">Pick up where you left off</h2></div>
              <Button variant="ghost" size="sm" className="gap-1 px-2 text-xs text-muted-foreground">View all <ArrowUpRight size={13} /></Button>
            </div>
            <div className="activity-list">
              {data.roster.map((item, index) => (
                <article className="activity-row" key={item.title}>
                  <span className={accentClasses[item.accent]}>{index === 0 ? <CirclePlay size={17} /> : index === 1 ? <Clock3 size={16} /> : <Sparkles size={16} />}</span>
                  <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{item.title}</p><p className="mt-1 text-xs text-muted-foreground">{item.kind}</p></div>
                  <span className="hidden text-right text-xs text-muted-foreground sm:block">{item.value}</span>
                  <Button variant="ghost" size="icon" aria-label={`More about ${item.title}`} className="h-8 w-8 shrink-0"><MoreHorizontal size={16} /></Button>
                </article>
              ))}
            </div>
          </section>
          <aside className="next-panel">
            <div className="next-panel-top"><span className="next-panel-icon"><Clock3 size={17} /></span><span className="next-panel-label">{data.nextTitle}</span></div>
            <h3 className="mt-5 text-lg font-semibold leading-snug">{data.nextName}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{data.nextMeta}</p>
            <div className="next-divider" />
            <p className="text-xs leading-relaxed text-muted-foreground">Stay on track with your learning goals and keep your momentum going.</p>
            <Button variant="outline" className="mt-5 w-full justify-between bg-transparent">Open workspace <ArrowRight size={15} /></Button>
          </aside>
        </div>
        <div className="mobile-explore sm:hidden"><Button asChild className="w-full justify-between"><Link to="/"><span>Explore CyberBodha</span><ArrowRight size={15} /></Link></Button></div>
      </div>
    </PortalLayout>
  );
}
