---
name: motion-ui-design
description: Architectural blueprint and reference guide for crafting ultra-modern, high-contrast, motion-infused web UIs combining Motion Primitives, Manus AI aesthetics, Haikei generative vectors, and Realtime Colors palette customization engines.
---

# 🚀 Motion UI Design System & Engineering Blueprint

This skill provides step-by-step guidelines, design tokens, and implementation patterns for creating modern, high-performance web applications inspired by leading design standards:

1. **[Motion Primitives](https://motion-primitives.com/)**: Spring animations, magnetic card tilt, interactive executable terminal blocks, floating sliding tabs, and micro-interactions.
2. **[Manus AI](https://manus.im/)**: Obsidian dark mode aesthetics, glassmorphism (`backdrop-filter: blur(16px)`), luminous glow borders, and live status indicators.
3. **[Haikei](https://app.haikei.app/)**: Generative SVG background mesh blobs, organic vector waves, and dynamic ambient lighting.
4. **[Realtime Colors](https://www.realtimecolors.com/)**: Live color palette engine allowing users to dynamically preview and switch themes in real time with CSS variables.

---

## 🎨 Design Tokens & Dynamic Theme Engine

### 1. Root CSS Tokens & Variables
Define the core tokens in `:root` and override them via `[data-theme="..."]` attributes:

```css
:root {
  --bg-dark: #080a0f;
  --bg-surface: #10141e;
  --bg-surface-2: #161c2b;
  --bg-card: rgba(16, 20, 30, 0.75);

  --primary: #3b82f6;
  --primary-glow: rgba(59, 130, 246, 0.35);
  --secondary: #8b5cf6;
  --secondary-glow: rgba(139, 92, 246, 0.35);
  --accent-gradient: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);

  --text-main: #f1f5f9;
  --text-muted: #94a3b8;
  --border-color: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(59, 130, 246, 0.4);

  --radius-lg: 20px;
  --radius-md: 14px;
  --font-heading: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --glass-backdrop: blur(16px);
}
```

### 2. Curated Realtime Palette Presets
Include at least 4 curated presets for instant visual harmony:
- **Manus Midnight** (Dark Obsidian, Electric Blue `#3b82f6`, Violet Glow `#8b5cf6`)
- **Cyberpunk Neon** (Cyan `#06b6d4`, Neon Pink `#ec4899`)
- **Emerald Tech** (Dark Slate `#040d0a`, Mint `#10b981`, Teal `#06b6d4`)
- **Sunset Ember** (Warm Onyx `#0f0b08`, Amber `#f59e0b`, Rose `#f43f5e`)
- **Quartz Light** (Light Quartz background `#f8fafc`, Text `#0f172a`, Primary `#2563eb`)

---

## 🌊 Haikei Generative Background Vectors

Layer animated SVG blur blobs with a subtle radial grid overlay behind the body:

```html
<div class="bg-mesh-container">
  <div class="bg-blob bg-blob--1"></div>
  <div class="bg-blob bg-blob--2"></div>
  <div class="bg-grid-overlay"></div>
</div>
```

```css
.bg-blob {
  position: absolute;
  filter: blur(90px);
  border-radius: 50%;
  animation: blobFloat 22s infinite alternate ease-in-out;
}

@keyframes blobFloat {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(60px, 40px) scale(1.15); }
  100% { transform: translate(-40px, 80px) scale(0.9); }
}
```

---

## ⚡ Motion Primitives & Interactive Components

### 1. 3D Magnetic Card Tilt Physics
Attach hover tilt listener to highlight cards:

```javascript
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  card.style.transform = `perspective(1000px) rotateX(${-y / 15}deg) rotateY(${x / 15}deg) scale3d(1.02, 1.02, 1.02)`;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
});
```

### 2. Interactive Terminal Code Snippet
Provide developer touchpoints with clean window headers and syntax highlighting:

```html
<div class="terminal-block">
  <div class="terminal__header">
    <div class="terminal__dots">
      <span class="dot dot--red"></span>
      <span class="dot dot--yellow"></span>
      <span class="dot dot--green"></span>
    </div>
    <span class="terminal__title">stack.java</span>
  </div>
  <div class="terminal__body font-mono">
    <code>public record Developer(String name, String role) {}</code>
  </div>
</div>
```

---

## 📋 Best Practices & Workflow Checklist

1. **Contrast First**: Ensure text remains legible across all color palette overrides.
2. **Smooth Transitions**: Apply `transition: background-color 0.4s ease, color 0.4s ease` to avoid jarring palette shifts.
3. **Hardware Acceleration**: Use `transform` and `opacity` for animations (`will-change: transform`).
4. **State Persistence**: Save selected themes in `localStorage` so user choices persist across visits.
