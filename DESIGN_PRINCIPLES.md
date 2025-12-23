# The Wise Monkey - Design Principles & Fundamentals

This document defines the design system and principles to follow for all changes to this project.

---

## Typography

### Font Family
- **Primary Font**: IBM Plex Mono (monospace)
- **Usage**: Applied globally to the entire site - all text, headings, buttons, inputs
- **Fallback**: `monospace`

### Font Weights
- **Headings (h1-h4)**: `font-medium` (500) - NO bold on large fonts
- **Body text**: `font-normal` (400)
- **Emphasis/Labels**: `font-semibold` (600) - only for small text elements like bullet titles

### Letter Spacing
- **Rule**: NO custom letter spacing (`tracking-*` classes)
- Let the font breathe naturally without modifications

---

## Spacing

### Section Padding
- **All sections**: `py-24` (consistent vertical padding)
- **Container**: `container mx-auto px-6`

### Component Spacing
- **Section headers to content**: `mb-12` to `mb-16`
- **Card gaps**: `gap-8`
- **Element margins**: Use consistent increments (mt-2, mt-3, mt-4)

---

## Colors & Theme

### Color Palette (HSL format only)
- **Background**: Pure black `0 0% 0%`
- **Foreground**: Pure white `0 0% 100%`
- **Primary**: Cyan/Teal `168 100% 67%`
- **Secondary**: Dark gray `0 0% 10%`
- **Muted**: Medium gray `0 0% 15%`
- **Muted Foreground**: Light gray `0 0% 65%`

### Color Rules
- NEVER use direct colors (text-white, bg-black, etc.)
- ALWAYS use semantic tokens from the design system (text-foreground, bg-background, text-primary, etc.)
- All colors MUST be defined in HSL format in index.css

---

## Icons

### Icon Library
- **Use**: Lucide React icons only
- **NO emojis** - always replace with vector icons

### Icon Sizing
- **Cards/Features**: `w-8 h-8`
- **Inline with text**: `w-4 h-4` or `w-5 h-5`

### Icon Colors
- Primary icons: `text-primary`
- Muted icons: `text-muted-foreground`

---

## Components

### Cards
- Use flex layout for equal height alignment: `flex flex-col`
- Card content that should fill space: `flex-1`
- Border style: `border-primary/20`
- Background: `bg-card/50`
- Hover effects: `hover:border-primary/40 hover:shadow-elegant`

### Buttons
- Primary CTA: `variant="hero"`
- Secondary: `variant="secondary"`
- Links: `variant="link"` or `variant="outline"`

### Section Backgrounds
- Alternate between: `bg-background`, `bg-secondary/30`, `bg-secondary/50`, `bg-muted/30`

---

## Layout

### Grid Systems
- 2-column for services: `grid md:grid-cols-2 gap-8`
- 3-column for cards: `grid md:grid-cols-3 gap-8`
- Responsive: Always start mobile-first

### Max Widths
- Text content: `max-w-2xl` or `max-w-4xl mx-auto`
- Full container: Let container handle it

---

## Animations & Transitions

### Hover Transitions
- Standard duration: `transition-all duration-300`
- Color transitions: `transition-colors`

### Decorative Elements
- Subtle animations: `animate-pulse`, `animate-bounce`
- Use sparingly and with purpose

---

## Content Guidelines

### Headings
- H1: `text-5xl md:text-7xl font-medium`
- H2: `text-4xl font-medium`
- H3: `text-xl` or `text-lg`

### Body Text
- Large intro: `text-xl md:text-2xl text-muted-foreground`
- Regular: `text-muted-foreground`
- Small: `text-sm text-muted-foreground`

---

## Internationalization

### Language Support
- English (en) and Spanish (es)
- All user-facing text must use translation keys via `useTranslation()`
- Never hardcode text strings

---

## Don'ts

1. ❌ Don't use `font-bold` on headings larger than text-2xl
2. ❌ Don't use emoji - use Lucide icons
3. ❌ Don't use `tracking-*` letter spacing classes
4. ❌ Don't use direct color classes (text-white, bg-black)
5. ❌ Don't use multiple fonts - stick to IBM Plex Mono
6. ❌ Don't create inconsistent section padding
7. ❌ Don't hardcode text - use i18n translations

---

## Do's

1. ✅ Use semantic color tokens from the design system
2. ✅ Use Lucide icons with consistent sizing
3. ✅ Use `font-medium` for large headings
4. ✅ Use `py-24` for all sections
5. ✅ Use flex layouts for card alignment
6. ✅ Use HSL colors in index.css
7. ✅ Use translation keys for all text
8. ✅ Use consistent hover states and transitions
