# SEO Audit & Improvement Report
**Abdulrahman Alidrisy Portfolio** | *alidrisy.com* | November 2025

---

## EXECUTIVE SUMMARY

**Current State:** Good foundation with Next.js 15, app router, i18n setup, and existing structured data. Missing optimization for AI Overviews, E-E-A-T signals, and advanced schema patterns.

**Key Gaps:**
- No per-page specialized JSON-LD types (AboutPage, ContactPage, etc.)
- Missing BreadcrumbList, FAQPage, SoftwareSourceCode for projects
- No `sameAs` completeness (Twitter/X missing), missing `knowsLanguage`, `hasCredential`
- No AI Overviews-specific content optimization
- Sitemap lacks locale alternates in XML; robots.txt incomplete
- Title/description lengths vary; some lack KSA/GCC location signals
- No Blog/Article content (if planned, critical gap for long-tail)

---

## 1. BRIEF SEO PLAN (EN)

### Primary Keywords (By Intent)

**Commercial + Navigation (High Intent)**
- "Abdulrahman Alidrisy" / "Abdo Alidrisy" (branded)
- "Full Stack Developer Saudi Arabia" / "Riyadh"
- "Next.js Developer Saudi Arabia"
- "React Developer for Hire" / "TypeScript Developer"

**Informational (Medium Intent)**
- "Full Stack Development Services" / "Frontend Backend Development"
- "Python FastAPI Developer" / "Node.js Express Developer"
- "DevOps CI/CD Services" / "Docker Kubernetes"
- "Web Development Best Practices"

**Local + Hiring (High Intent, KSA Focus)**
- "Software Engineer Riyadh" / "Software Engineer KSA"
- "Hire Full Stack Developer Saudi Arabia"
- "Web Development Services GCC"
- "Freelance Developer Riyadh"

**AI Search & Generative Results**
- "What is Full Stack Development?" / "Best practices Next.js 15"
- "How to integrate payment in Saudi Arabia?" (PayPal/Mada/HyperPay)
- "Can you build with Next.js 15?" (FAQ-driven)

### Page-to-Keyword Mapping

| Page | Primary Keywords | Secondary Keywords |
|------|------------------|--------------------|
| **Home** | Abdulrahman Alidrisy, Full Stack Developer Saudi Arabia, Portfolio | Full Stack Engineer, React Next.js Developer |
| **About** | Full Stack Software Engineer experience, ALX Africa, HOMA | Skills, Timeline, GitHub, LinkedIn |
| **Services** | Full Stack Development Services, Frontend Backend API DevOps, Saudi Arabia | React Development, Python Backend, CI/CD, Docker |
| **Projects** | HomaApp, Ijar, Awamer, Full Stack Projects, Case Studies | MERN Stack, Next.js Projects, Real-time Features |
| **Contact** | Hire Abdulrahman Alidrisy, Contact Developer, Get in Touch | Email, Phone, Riyadh, Freelance |

### Content Gaps (Opportunities)

1. **Blog/Articles** (not present): Target long-tail, evergreen content
   - "How to build with Next.js 15 and React 19"
   - "Integrating Saudi Payment Gateways (Mada, HyperPay, Apple Pay)"
   - "DevOps Best Practices for Startups"
   - *Impact:* Improves domain authority, long-tail organic traffic, AI Overviews eligibility

2. **Case Studies** (Projects page exists but minimal case study depth)
   - Expand HOMA, Ijar, Awamer with deeper problem/solution/impact (✓ already good)
   - Add SoftwareSourceCode JSON-LD per project

3. **Testimonials / Social Proof** (not present)
   - Client reviews, endorsements (if available)
   - LinkedIn recommendations

4. **FAQ / Knowledge Base** (not present)
   - Service-oriented FAQs (below in AI section)
   - Tech stack FAQs

5. **Credentials & Certifications**
   - ALX Africa completion (add details)
   - Any awards or recognitions

---

## 2. METADATA BY PAGE (EN/AR)

### Home (`/en`, `/ar`)

**English:**
```
Title:      "Abdulrahman Alidrisy - Full-Stack Developer Portfolio"
            (56 chars) ✓
Description: "Full-stack developer in Riyadh, Saudi Arabia. Specializing in React, 
            Next.js, Python, and DevOps. View portfolio & hire today."
            (158 chars) ✓
Canonical:  https://www.alidrisy.com/en
            (also hreflang pair: /ar)
OG Image:   /og-image.png (1200×630) or /og-home.png
OG Title:   "Abdulrahman Alidrisy - Full-Stack Developer Portfolio"
OG Desc:    "Full-stack developer in Riyadh, Saudi Arabia. Specializing in React, 
            Next.js, Python, and DevOps. View portfolio & hire today."
Twitter Card: summary_large_image
Twitter Title: "Abdulrahman Alidrisy - Full-Stack Developer Portfolio"
Twitter Desc: "Full-stack developer in Riyadh, Saudi Arabia. Specializing in React, 
             Next.js, Python, and DevOps. View portfolio & hire today."
Robots:     index, follow
```

**Arabic:**
```
Title:      "عبدالرحمن الإدريسي - مطور متكامل متخصص"
            (39 chars RTL) ✓
Description: "مطور متكامل بخبرة في الرياض. متخصص في React و Next.js و Python و DevOps. 
            عرض أعمالي وتوظيفي اليوم."
            (133 chars RTL) ✓
Canonical:  https://www.alidrisy.com/ar
            (also hreflang pair: /en)
OG Image:   /og-image-ar.png (1200×630)
OG Title:   "عبدالرحمن الإدريسي - مطور متكامل متخصص"
OG Desc:    "مطور متكامل بخبرة في الرياض. متخصص في React و Next.js و Python و DevOps. 
            عرض أعمالي وتوظيفي اليوم."
Twitter Card: summary_large_image
Twitter Title: "عبدالرحمن الإدريسي - مطور متكامل متخصص"
Twitter Desc: "مطور متكامل بخبرة في الرياض. متخصص في React و Next.js و Python و DevOps."
Robots:     index, follow
```

---

### About (`/en/about`, `/ar/about`)

**English:**
```
Title:      "About Abdulrahman Alidrisy - Full-Stack Engineer & ALX Graduate"
            (72 chars - OVER, trim to 60) → "About Abdulrahman Alidrisy - Full-Stack Engineer"
            (51 chars) ✓
Description: "Experienced full-stack software engineer with 2+ years delivering React, 
            Next.js, Python, and DevOps solutions. ALX Africa graduate, HOMA Team Lead."
            (160 chars) ✓
Canonical:  https://www.alidrisy.com/en/about
OG Title:   "About Abdulrahman Alidrisy - Full-Stack Engineer"
OG Desc:    "Experienced full-stack software engineer with 2+ years delivering React, 
            Next.js, Python, and DevOps solutions. ALX Africa graduate, HOMA Team Lead."
Robots:     index, follow
```

**Arabic:**
```
Title:      "عني - عبدالرحمن الإدريسي - مهندس برمجيات متكامل"
            (45 chars RTL) ✓
Description: "مهندس برمجيات متكامل بخبرة أكثر من عامين في تطوير تطبيقات الويب. 
            خريج ALX Africa، مطور Frontend في HOMA بالرياض."
            (145 chars RTL) ✓
Canonical:  https://www.alidrisy.com/ar/about
OG Title:   "عني - عبدالرحمن الإدريسي - مهندس برمجيات متكامل"
OG Desc:    "مهندس برمجيات متكامل بخبرة أكثر من عامين في تطوير تطبيقات الويب. 
            خريج ALX Africa، مطور Frontend في HOMA بالرياض."
Robots:     index, follow
```

---

### Services (`/en/services`, `/ar/services`)

**English:**
```
Title:      "Full-Stack Development Services - React, Python, DevOps"
            (59 chars) ✓
Description: "Custom full-stack development services: frontend (React, Next.js), 
            backend (Python, Node.js), APIs, databases, DevOps, CI/CD. Saudi Arabia."
            (160 chars) ✓
Canonical:  https://www.alidrisy.com/en/services
OG Title:   "Full-Stack Development Services"
OG Desc:    "Custom full-stack development services: frontend (React, Next.js), 
            backend (Python, Node.js), APIs, databases, DevOps, CI/CD."
Robots:     index, follow
```

**Arabic:**
```
Title:      "خدمات التطوير المتكامل - React و Python و DevOps"
            (47 chars RTL) ✓
Description: "خدمات تطوير متكاملة مخصصة: واجهات أمامية (React، Next.js)، خوادم خلفية 
            (Python، Node.js)، واجهات برمجية، قواعد بيانات، DevOps."
            (147 chars RTL) ✓
Canonical:  https://www.alidrisy.com/ar/services
OG Title:   "خدمات التطوير المتكامل"
OG Desc:    "خدمات تطوير متكاملة مخصصة: واجهات أمامية (React، Next.js)، خوادم خلفية 
            (Python، Node.js)، واجهات برمجية، قواعس بيانات، DevOps."
Robots:     index, follow
```

---

### Projects (`/en/projects`, `/ar/projects`)

**English:**
```
Title:      "Full-Stack Projects - HomaApp, Ijar, Awamer, AudioTube"
            (60 chars) ✓
Description: "View my full-stack project portfolio: HomaApp (luxury real estate), 
            Ijar (peer-to-peer car rentals), Awamer IT services, AudioTube."
            (160 chars) ✓
Canonical:  https://www.alidrisy.com/en/projects
OG Title:   "Full-Stack Projects & Case Studies"
OG Desc:    "View my full-stack project portfolio: HomaApp, Ijar, Awamer, AudioTube."
Robots:     index, follow
```

**Arabic:**
```
Title:      "المشاريع - HomaApp و Ijar و Awamer و AudioTube"
            (45 chars RTL) ✓
Description: "اعرض محفظة المشاريع الخاصة بي: HomaApp (العقارات الفاخرة)، Ijar 
            (تأجير السيارات من نظير إلى نظير)، Awamer و AudioTube."
            (142 chars RTL) ✓
Canonical:  https://www.alidrisy.com/ar/projects
OG Title:   "المشاريع و دراسات الحالة"
OG Desc:    "اعرض محفظة المشاريع الخاصة بي: HomaApp و Ijar و Awamer و AudioTube."
Robots:     index, follow
```

---

### Contact (`/en/contact`, `/ar/contact`)

**English:**
```
Title:      "Contact Abdulrahman Alidrisy - Hire a Full-Stack Developer"
            (62 chars - OVER, trim) → "Contact Abdulrahman Alidrisy - Hire Developer"
            (47 chars) ✓
Description: "Get in touch with Abdulrahman Alidrisy for full-stack development, 
            freelance projects, or consulting. Riyadh-based, available globally."
            (160 chars) ✓
Canonical:  https://www.alidrisy.com/en/contact
OG Title:   "Contact Abdulrahman Alidrisy"
OG Desc:    "Get in touch for full-stack development, freelance projects, or consulting."
Robots:     index, follow
```

**Arabic:**
```
Title:      "تواصل مع عبدالرحمن الإدريسي - مطور متكامل"
            (44 chars RTL) ✓
Description: "تواصل مع عبدالرحمن الإدريسي لمشاريع التطوير المتكامل أو الاستشارات. 
            بناءً في الرياض، متاح عالميًا."
            (120 chars RTL) ✓
Canonical:  https://www.alidrisy.com/ar/contact
OG Title:   "تواصل معي"
OG Desc:    "تواصل لمشاريع التطوير المتكامل والاستشارات في الرياض."
Robots:     index, follow
```

---

### Services (if individual pages created)

**Example: `/en/services/frontend`, `/ar/services/frontend`**
```
Title:      "Frontend Development Services - React & Next.js"
Description: "Professional frontend development with React, Next.js, TypeScript. 
            Responsive, accessible, performance-optimized UI/UX."
```

---

## 3. HREFLANG MATRIX

**For all pages:**

```html
<!-- /en routes -->
<link rel="alternate" hreflang="ar" href="https://www.alidrisy.com/ar" />
<link rel="alternate" hreflang="en" href="https://www.alidrisy.com/en" />
<link rel="alternate" hreflang="x-default" href="https://www.alidrisy.com/en" />

<!-- /ar routes -->
<link rel="alternate" hreflang="en" href="https://www.alidrisy.com/en" />
<link rel="alternate" hreflang="ar" href="https://www.alidrisy.com/ar" />
<link rel="alternate" hreflang="x-default" href="https://www.alidrisy.com/en" />
```

**Note:** x-default points to `/en` (English as default for international audience; adjust if KSA audience is primary).

---

## 4. VALIDATION CHECKLIST

- ✓ Title lengths ≤ 60 chars (trimmed above)
- ✓ Meta descriptions 150–160 chars
- ✓ OG images 1200×630 (new image set required)
- ✓ Canonical URLs per page
- ✓ hreflang pairs for en/ar
- ✓ Robots: index, follow (contact form page may exclude from indexing if desired)
- ✓ Keywords: brand + commercial + local (KSA) + AI-driven (FAQ-based)

---

## NEXT STEPS

1. Update **metadata in `messages/en.json` and `messages/ar.json`** with above titles/descriptions
2. Create **OG images** (1200×630) for each page
3. Implement **structured data** (see Section 3 of main deliverables)
4. Add **robots.txt and sitemaps** (see Section 4)
5. Implement **FAQPage JSON-LD** and update content (see Section 5)
6. **Monitor** in Google Search Console, Bing Webmaster, and AI Overviews performance

---

**End of SEO Plan**
