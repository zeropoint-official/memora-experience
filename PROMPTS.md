# Memora Experience - Branding Implementation Prompts

## Prompt 1: Update Typography & Title Styles Across All Pages

**Objective:** Update all headings, titles, and typography to match the Memora brand aesthetic with consistent font weights, sizes, and styling.

**Tasks:**

1. **Review Current Typography:**
   - Current heading font: Space Grotesk
   - Current body font: DM Sans
   - Check all pages: `/app/*/page.tsx` and component files in `/components/sections/`

2. **Update Heading Styles:**
   - Apply consistent font weights: Use `font-bold` for h1, `font-semibold` for h2, `font-medium` for h3
   - Ensure proper tracking: Use `tracking-tight` for large headings, `tracking-normal` for smaller headings
   - Standardize heading sizes:
     - h1: `text-4xl md:text-5xl lg:text-6xl` (or larger for hero sections)
     - h2: `text-2xl md:text-3xl lg:text-4xl`
     - h3: `text-xl md:text-2xl lg:text-3xl`
     - h4: `text-lg md:text-xl lg:text-2xl`

3. **Update Title Styles:**
   - Hero titles: Use larger sizes (`text-5xl` to `text-7xl`) with `font-bold` or `font-black`
   - Section titles: Use `text-3xl` to `text-5xl` with `font-semibold` or `font-bold`
   - Card titles: Use `text-xl` to `text-2xl` with `font-semibold`
   - Add consistent line-height: `leading-tight` for headings

4. **Apply to All Pages:**
   - Homepage (`/app/page.tsx` and its sections)
   - Events page (`/app/events/page.tsx`)
   - Event detail pages (`/app/events/*/page.tsx`)
   - Services page (`/app/services/page.tsx`)
   - Business page (`/app/business/page.tsx`)
   - Contact page (`/app/contact/page.tsx`)
   - Account page (`/app/account/page.tsx`)
   - Landing page (`/app/landing/page.tsx`)

5. **Update Section Components:**
   - `components/sections/landing-hero.tsx`
   - `components/sections/about-section.tsx`
   - `components/sections/cta-section.tsx`
   - `components/sections/events-section.tsx`
   - `components/sections/reviews-section.tsx`
   - `components/sections/services-section.tsx`
   - `components/sections/past-events-gallery.tsx`
   - `components/sections/spotlight-navigation.tsx`
   - `components/sections/landing-services.tsx`
   - All other section components

6. **Ensure Consistency:**
   - All h1 elements should follow the same size/weight pattern
   - All h2 elements should follow the same size/weight pattern
   - Body text should consistently use DM Sans with appropriate sizes
   - Maintain responsive sizing with Tailwind breakpoints (sm:, md:, lg:)

7. **Check for:**
   - Inconsistent font weights (some bold, some semibold)
   - Inconsistent text sizes
   - Missing responsive breakpoints
   - Overly tight or loose letter spacing
   - Inconsistent line heights

**Expected Outcome:** All headings and titles across the website have consistent typography styling that matches the Memora brand aesthetic.

---

## Prompt 2: Apply Branded Two-Tone Coloring to All Pages

**Objective:** Apply the branded two-tone color scheme (gray `#6B6B6B` + gold `#D4A574`) to all headings, titles, and key text elements across the entire website, matching the logo's style.

**Color Palette:**
- Gray: `#6B6B6B` (text-[#6B6B6B] or use CSS variable)
- Gold: `#D4A574` (text-[#D4A574] or use CSS variable)
- Dark Gray: `#1A1A1A` (for body text)

**Tasks:**

1. **Update All Main Headings (h1):**
   - Split headings into two parts: first part gray, second part gold
   - Examples:
     - "Create Memorable Moments" → "Create" (gray) + "Memorable Moments" (gold)
     - "About Memora" → "About" (gray) + "Memora" (gold)
     - "Our Services" → "Our" (gray) + "Services" (gold)
   - Apply to all hero sections, page titles, and main headings

2. **Update Section Headings (h2):**
   - Apply two-tone styling to section titles
   - Examples:
     - "Featured Events" → "Featured" (gray) + "Events" (gold)
     - "Crafting Unforgettable Experiences" → "Crafting" (gray) + "Unforgettable Experiences" (gold)
     - "Get in Touch" → "Get in" (gray) + "Touch" (gold)

3. **Update Subsection Headings (h3, h4):**
   - Apply gold accent to key words
   - Use gray for primary text, gold for emphasis words
   - Examples:
     - "Event Planning" → "Event" (gray) + "Planning" (gold)
     - "Student Trips" → "Student" (gray) + "Trips" (gold)

4. **Apply to All Pages:**
   - **Homepage (`/app/page.tsx`):**
     - Hero section: "Create Memorable Moments"
     - Section headings throughout
   - **Events Page (`/app/events/page.tsx`):**
     - Main title
     - Event category headings
     - Section titles
   - **Event Detail Pages (`/app/events/*/page.tsx`):**
     - Event name/title
     - Section headings
   - **Services Page (`/app/services/page.tsx`):**
     - Main title
     - Service category headings
   - **Business Page (`/app/business/page.tsx`):**
     - Main title
     - Section headings
   - **Contact Page (`/app/contact/page.tsx`):**
     - Main title
     - Form section headings
   - **Account Page (`/app/account/page.tsx`):**
     - Page title
     - Section headings
   - **Landing Page (`/app/landing/page.tsx`):**
     - All headings

5. **Update Section Components:**
   - `components/sections/landing-hero.tsx` ✅ (Already done)
   - `components/sections/about-section.tsx` ✅ (Already done)
   - `components/sections/cta-section.tsx` - Update "Let's Create Your Next Unforgettable Memory"
   - `components/sections/events-section.tsx` - Update all headings
   - `components/sections/reviews-section.tsx` - Update section title
   - `components/sections/services-section.tsx` - Update all headings
   - `components/sections/past-events-gallery.tsx` - Update "Featured Events"
   - `components/sections/spotlight-navigation.tsx` ✅ (Already done)
   - `components/sections/landing-services.tsx` - Update "Our Services"
   - `components/sections/navigation-cards-section.tsx` - Update card titles
   - `components/sections/student-trips-section.tsx` - Update headings
   - All other section components

6. **Use BrandedText Components:**
   - Import and use `BrandedText`, `BrandedHeading`, or `BrandedTextSplit` from `@/components/ui/branded-text`
   - For custom splits, use: `<span className="text-[#6B6B6B]">First Part</span> <span className="text-[#D4A574]">Second Part</span>`

7. **Special Cases:**
   - **Rotating/Animated Text:** Keep gold color (`text-[#D4A574]`) for animated words
   - **Gradient Text:** Replace gradients with two-tone style where appropriate
   - **Button Text:** Keep button text as-is (white or appropriate contrast)
   - **Body Text:** Keep body text in gray (`text-[#6B6B6B]` or `text-slate-600`)

8. **Patterns to Apply:**
   - Two-word titles: First word gray, second word gold
   - Three-word titles: First word(s) gray, last word gold
   - Four+ word titles: Split roughly in half, first half gray, second half gold
   - Key emphasis words: Always use gold (e.g., "Memorable", "Unforgettable", "Memora", "Experience")

9. **Check for:**
   - Any headings still using single color (black/gray)
   - Inconsistent color application
   - Missing two-tone styling on important headings
   - Overuse of gold (should be balanced with gray)

**Expected Outcome:** All headings and titles across the website use the branded two-tone color scheme (gray + gold) matching the Memora logo style, creating a cohesive brand identity throughout the site.

---

## Implementation Notes

- Use Tailwind classes: `text-[#6B6B6B]` for gray and `text-[#D4A574]` for gold
- Maintain readability and contrast ratios
- Test on all screen sizes to ensure colors are visible
- Keep body text in readable gray tones
- Use gold sparingly for emphasis and key brand words
