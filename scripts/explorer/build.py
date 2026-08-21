#!/usr/bin/env python3
"""Build the explorer: one self-contained HTML page explaining how a skill suite is used.

    python3 scripts/explorer/build.py

Reads `data.json` (this repo's content) plus `template.css` and `template.js`
(byte-identical in every repo) and writes the file named in `data.json["out"]`.

Nothing about any particular repo lives in this file. Every heading, every line of
prose and every section of the model tab comes from `data.json["model"]`, and a
section whose data is empty is skipped rather than rendered blank.

The page is generated. Never edit the HTML by hand: edit `data.json` and rebuild.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent


def std_block(items) -> str:
    out = []
    for s in items:
        keys = "".join(f'<tr><td class="own">{k}</td><td>{v}</td></tr>'
                       for k, v in s.get("k", []))
        out.append(
            f'<div class="std"><div class="sh"><b>{s["n"]}</b>'
            + (f'<code>{s["f"]}</code>' if s.get("f") else "")
            + f'</div><div class="sw">{s["w"]}</div>'
            + (f'<table class="sk">{keys}</table>' if keys else "") + "</div>")
    return f'<div class="stds">{"".join(out)}</div>'


def ev_block(ev) -> str:
    parts = []
    if ev.get("tags"):
        rows = "".join(
            f'<tr><td><code>{t.replace("<", "&lt;")}</code></td><td>{d}</td><td><i>{e}</i></td></tr>'
            for t, d, e in ev["tags"])
        parts.append(f'<div><div class="sh"><b>{ev.get("tags_h", "Every statement is tagged")}'
                     f'</b></div><table>{rows}</table>'
                     + (f'<p class="lede" style="margin:12px 0 0">{ev["tags_note"]}</p>'
                        if ev.get("tags_note") else "") + "</div>")
    if ev.get("weights"):
        rows = "".join(f'<tr><td class="wt">{n}</td><td>{d}</td></tr>' for n, d in ev["weights"])
        parts.append(f'<div><div class="sh"><b>{ev.get("weights_h", "Every claim carries a weight")}'
                     f'</b></div><table>{rows}</table>'
                     + (f'<p class="lede" style="margin:12px 0 0">{ev["weights_note"]}</p>'
                        if ev.get("weights_note") else "") + "</div>")
    return f'<div class="two">{"".join(parts)}</div>' if parts else ""


def section(d, sec) -> str:
    """Render one model-tab section, or '' when its data is empty."""
    t, body = sec.get("type", "html"), ""
    if t == "standards":
        body = std_block(d.get("standards", []))
    elif t == "evidence":
        body = ev_block(d.get("evidence", {}))
    elif t == "html":
        body = sec.get("html", "")
    elif t == "rollups":
        body = (f'<div class="card"><pre class="roll">{d["rollups"]}</pre></div>'
                if d.get("rollups") else "")
    elif t in ("own", "add", "envs", "readers", "lean", "breaks"):
        if not d.get(t):
            return ""
        body = f'<div id="{t}"></div>'      # filled by template.js
    if not body.strip():
        return ""
    return (f'<h2>{sec["h"]}</h2>'
            + (f'<p class="lede">{sec["lede"]}</p>' if sec.get("lede") else "")
            + body)


def main() -> None:
    d = json.loads((HERE / "data.json").read_text())
    for k in ("out", "title", "h1", "skills", "miss", "gloss", "model"):
        if k not in d:
            sys.exit(f"data.json is missing '{k}'")

    css = (HERE / "template.css").read_text()
    js = (HERE / "template.js").read_text().replace(
        "__DATA__", json.dumps(d, ensure_ascii=False))
    model = "".join(section(d, s) for s in d["model"])

    html = f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{d["title"]}</title>
<style>{css}</style></head><body><div class="wrap">
<header>
<h1>{d["h1"]}{f' — <span>{d["h1sub"]}</span>' if d.get("h1sub") else ""}</h1>
<p class="sub">{d.get("sub", "")}</p>
</header>
<nav>
<button class="on" data-t="miss">{d.get("tab_miss", "What are you doing")}</button>
<button data-t="skills">{d.get("tab_skills", f'The {len(d["skills"])} skills')}</button>
<button data-t="model">{d.get("tab_model", "How it holds together")}</button>
<button data-t="gloss">{d.get("tab_gloss", "Glossary")}</button>
</nav>
<section id="miss" class="on"><div class="cols"><div class="list" id="mnav"></div><div class="panel" id="mpanel"></div></div></section>
<section id="skills"><div class="cols"><div class="list" id="snav"></div><div class="panel" id="spanel"></div></div></section>
<section id="model">{model}</section>
<section id="gloss">
<p class="lede">{d.get("gloss_lede", "Every term this suite uses, in one line, grouped by where it lives.")}</p>
<div id="gt"></div></section>
<footer>{d.get("footer", "")}</footer>
</div><script>{js}</script></body></html>"""

    out = ROOT / d["out"]
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html)
    print(f"  {d['out']}  {len(html)/1024:.0f} KB  {len(d['miss'])} jobs · "
          f"{len(d['skills'])} skills · {len(d['gloss'])} terms · "
          f"{sum(1 for s in d['model'] if section(d, s))}/{len(d['model'])} model sections")


if __name__ == "__main__":
    main()
