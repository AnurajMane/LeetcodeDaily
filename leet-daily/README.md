# DailyCode

> **One Problem. One Day. One Better Solution.**

DailyCode is a **static, frontend-only React application** for documenting a daily LeetCode solving journey.

The goal is simple: publish one LeetCode problem every day, explain the reasoning behind the solution, show a clean implementation, and build a searchable personal problem journal.

There is **no backend, database, authentication, admin panel, or CMS**.
New problems are added directly as Markdown files in the repository using VS Code.

------------------------------------------------------------------------

## Project Status

**Current version: V1 --- Frontend Foundation + Daily Problem Journal**

The core architecture is working, including:

-   React + Vite application
-   JavaScript (JSX), **not TypeScript**
-   Static Markdown-based problem content
-   YAML frontmatter parsing
-   Automatic problem discovery
-   Problem archive
-   Search and filters
-   Problem detail pages
-   Markdown rendering
-   Java syntax highlighting
-   Code copy functionality
-   Previous/next problem navigation
-   Responsive Navbar and Footer
-   Dark/light theme
-   Responsive Home page
-   Dynamic statistics and recent problems
-   Static deployment architecture suitable for Vercel/Render

------------------------------------------------------------------------

# 1. Project Vision

DailyCode is designed around a very small idea:

``` text
One Problem.
One Day.
One Better Solution.
```

The website should feel like a **developer journal**, not an
administration dashboard.

The user/developer workflow is intentionally simple:

``` text
Create Markdown file
        ↓
Add problem metadata
        ↓
Write explanation + solution
        ↓
Commit to Git
        ↓
Render deploy
        ↓
Problem appears automatically
```

No manual database entry is required.

------------------------------------------------------------------------

# 2. Technology Stack

## Frontend

-   React
-   Vite
-   JavaScript
-   JSX
-   React Router
-   Tailwind CSS v4

## UI / Visual Design

-   Nyxhora UI design inspiration
-   Aceternity UI design inspiration
-   Lucide React
-   React Icons
-   Motion

The project uses these libraries selectively. The objective is to maintain a clean and fast interface rather than turning the application into a showcase of every available animation.

## Content

-   Markdown
-   YAML frontmatter
-   `react-markdown`
-   `remark-gfm`
-   `yaml`

## Code Rendering

-   `react-syntax-highlighter`
-   Prism syntax highlighting

## Deployment

Designed for static deployment on:

-   Render

------------------------------------------------------------------------

# 3. Core Architecture

DailyCode follows a **content-driven frontend architecture**.

``` text
Markdown Files
      ↓
Markdown Loader
      ↓
YAML Frontmatter Parser
      ↓
Problem Data
      ↓
React Pages
      ↓
UI Components
```

The Markdown files are the source of truth.

There is no database.

------------------------------------------------------------------------

# 4. Phase 1 --- Project Foundation

## Status: Completed

The project was initialized using Vite + React.

Development environment:

``` text
Node.js
npm
Git
VS Code
Windows 11
```

The project intentionally uses:

``` text
JavaScript + JSX
```

and **not TypeScript**.

### Initial goals

-   React application
-   Vite development server
-   Tailwind CSS
-   Routing
-   Basic UI component setup
-   Theme system
-   Static content architecture

------------------------------------------------------------------------

# 5. Phase 2 --- Application Layout

## Status: Completed

The global layout was implemented.

## Navbar

The Navbar contains:

-   DailyCode branding
-   Problems navigation
-   Streak navigation
-   About navigation
-   Theme toggle
-   GitHub link
-   Responsive mobile menu
-   Active route highlighting
-   Sticky positioning
-   Backdrop blur

The Navbar was deliberately kept minimal.

## Footer

The Footer contains:

-   DailyCode branding
-   Project tagline
-   GitHub link
-   LeetCode link
-   Copyright year
-   Responsive layout

The project tagline:

``` text
One problem. One day. One better solution.
```

------------------------------------------------------------------------

# 6. Theme System

## Status: Completed

The application supports:

-   Dark mode
-   Light mode

This keeps components independent from hardcoded theme colors.

------------------------------------------------------------------------

# 7. Phase 3 --- Markdown Content Engine

## Status: Completed

The bigest architectural decision was to make Markdown the source of truth.

Problems are stored under:

``` text
src/content/problems/
```

Example:

``` text
001-two-sum.md
002-valid-parentheses.md
```

Each file contains YAML frontmatter followed by Markdown content.

Example:

``` yaml
---
id: 2
title: Valid Parentheses
slug: valid-parentheses
difficulty: Easy
date: 2026-08-10
topics:
  - String
  - Stack
language: Java
leetcodeUrl: https://leetcode.com/problems/valid-parentheses/
---
```

------------------------------------------------------------------------

# 8. Phase 4 --- Problem Details UI

## Status: Completed

The page includes:

-   Breadcrumb navigation
-   Day number
-   Problem title
-   Difficulty
-   Topics
-   Language
-   Publication date
-   LeetCode external link
-   Markdown content
-   Previous problem
-   Next problem
-   404 state for invalid slugs

------------------------------------------------------------------------

# 9. Markdown Rendering

The problem detail page uses:

``` text
react-markdown
remark-gfm
```

Supported Markdown features include:

-   Headings
-   Paragraphs
-   Ordered lists
-   Unordered lists
-   Links
-   Blockquotes
-   Tables
-   Images
-   Horizontal rules
-   Inline code
-   Fenced code blocks

GitHub-Flavored Markdown is supported through `remark-gfm`.

------------------------------------------------------------------------

# 10. Code Block Rendering

Code blocks have been upgraded into a dedicated UI component.

Features:

-   Syntax highlighting
-   Language detection
-   Copy button
-   Copied state
-   Dark code surface
-   Long-line wrapping
-   Responsive rendering

Example Markdown:

```` markdown
```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        // solution
    }
}
```
````

renders as a professional code block with:

``` text
JAVA                              Copy
──────────────────────────────────────
class Solution {
    ...
}
```

------------------------------------------------------------------------

# 11. Phase 5 --- Problems Archive

## Status: Completed

The `/problems` page was converted into a searchable problem archive.

The page includes:

-   Problem statistics
-   Search
-   Difficulty filters
-   Topic filters
-   Clear filters
-   Result count
-   Responsive problem cards
-   Empty search state

------------------------------------------------------------------------

# 12. Problems Statistics

The archive displays:

``` text
Total
Easy
Medium
Hard
```

These values are calculated dynamically from the Markdown problem
dataset.

No values are hardcoded.

------------------------------------------------------------------------

# 13. Phase 6 --- Home Page

## Status: Implemented / Current Phase

The Home page has been redesigned around the project's main concept.

Current structure:

``` text
Hero
 ↓
Today's Problem
 ↓
Statistics
 ↓
Recent Problems
 ↓
Footer
```

------------------------------------------------------------------------

# 14. Daily Content Workflow

Adding a new problem should be as simple as creating:

``` text
src/content/problems/003-best-time-to-buy-and-sell-stock.md
```

Example:

``` yaml
---
id: 3
title: Best Time to Buy and Sell Stock
slug: best-time-to-buy-and-sell-stock
difficulty: Easy
date: 2026-08-11
topics:
  - Array
  - Dynamic Programming
language: Java
leetcodeUrl: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
---
```

Then write:

``` markdown
# Problem

...

## Example

...

## Approach

...

## Solution

```java
...
```

## Complexity

...

## Key Takeaway

...


    After saving:

    ```text
    Markdown
     ↓
    Automatic discovery
     ↓
    Problems archive
     ↓
    Home page
     ↓
    Problem detail page
```

No React code needs to be changed for each new problem.

------------------------------------------------------------------------

# 15. What DailyCode Does NOT Have

This is intentional. DailyCode does not currently use:

``` text
❌ Backend
❌ REST API
❌ Database
❌ PostgreSQL
❌ MongoDB
❌ Authentication
❌ Login
❌ Admin panel
❌ Admin dashboard
❌ CMS
❌ Server-side problem management
❌ User accounts
❌ Code execution server
```

Content is managed through:

``` text
VS Code
+
Git
+
Markdown
```

------------------------------------------------------------------------

# 16. Deployment Architecture

The intended architecture is:

``` text
GitHub Repository
       │
       ▼
    Render
       │
       ▼
Static React Build
       │
       ▼
     Browser
```

There is no runtime backend dependency.

This makes the project:

-   Simple to deploy
-   Cheap to host
-   Easy to maintain
-   Git-friendly
-   Easy to back up
-   Fast to load

------------------------------------------------------------------------

# 17. Planned Phase 7 --- Streak / Progress

## Planned

The existing `/streak` page will become a real progress dashboard.

Potential features:

### Contribution Calendar

A GitHub-style calendar:

``` text
Mon  ▢ ▢ ▣ ▣ ▢ ▣ ▢
Tue  ▣ ▣ ▣ ▢ ▣ ▣ ▢
Wed  ▣ ▢ ▣ ▣ ▣ ▢ ▣
Thu  ▣ ▣ ▣ ▣ ▢ ▣ ▣
Fri  ▣ ▣ ▢ ▣ ▣ ▣ ▢
```

Data will come from Markdown publication dates.

### Streak Metrics

Potential metrics:

``` text
Current Streak
Longest Streak
Total Days
Problems Solved
```

### Monthly / Yearly Progress

Possible future views:

``` text
August 2026
September 2026
October 2026
```

No backend will be required.

------------------------------------------------------------------------

# 18. Planned Phase 8 --- About Page

The About page will explain:

-   What DailyCode is
-   Why the project exists
-   The daily-solving philosophy
-   Technology stack
-   How problems are published
-   GitHub repository
-   LeetCode profile

The page should remain concise.

------------------------------------------------------------------------

# 19. Planned Phase 9 --- Content Quality Improvements

Potential improvements:

## Better Problem Metadata

Possible future metadata:

``` yaml
companies:
  - Google
  - Amazon

patterns:
  - HashMap
  - Two Pointer

difficultyScore: 2

relatedProblems:
  - valid-anagram
```

Only fields that provide actual UI value should be added.

------------------------------------------------------------------------

# 20. Planned Phase 10 --- Better Code Experience

Potential improvements:

-   Multiple language solutions
-   Java-first solution rendering
-   Language tabs
-   Line numbering
-   Improved copy interaction
-   Better syntax themes
-   Code block titles
-   Optional file names

Example:

``` text
Java
Python
C++
JavaScript
```

This should only be added if the content strategy actually expands to
multiple languages.

------------------------------------------------------------------------

# 21. Planned Phase 11 --- Advanced Search

Future search improvements may include:

``` text
Search by title
Search by topic
Search by pattern
Search by difficulty
Search by language
Search by company
```

Possible combined queries:

``` text
Easy + Array
Medium + Binary Search
Hard + Dynamic Programming
```

------------------------------------------------------------------------

# 22. Planned Phase 12 --- SEO

Because every problem has its own URL, DailyCode can eventually have
strong static SEO.

Potential improvements:

-   Page titles
-   Meta descriptions
-   Open Graph metadata
-   Twitter/X cards
-   Canonical URLs
-   Structured data
-   Sitemap
-   Robots configuration

Example:

``` text
/problems/two-sum
```

could have:

``` text
Title:
Two Sum — DailyCode

Description:
A detailed explanation and Java solution for LeetCode Two Sum.
```

------------------------------------------------------------------------

# 23. Planned Phase 13 --- Performance

Before production, we should check:

-   Production bundle size
-   Image optimization
-   Lazy loading
-   Markdown loading
-   Syntax highlighter bundle size
-   Font loading
-   Animation performance
-   Mobile Lighthouse score

Target:

``` text
Fast
Responsive
Low JavaScript overhead
```

------------------------------------------------------------------------

# 24. Planned Phase 14 --- Accessibility

Future improvements:

-   Keyboard navigation
-   Proper focus states
-   ARIA labels
-   Semantic headings
-   Accessible color contrast
-   Screen-reader-friendly navigation
-   Reduced-motion support

Animations should respect:

``` css
prefers-reduced-motion
```

------------------------------------------------------------------------

# 25. Planned Phase 15 --- Visual Polish

Possible future visual enhancements:

-   Aceternity Spotlight refinement
-   Nyxhora-inspired effects
-   Glowing cards
-   Better hover states
-   Subtle page transitions
-   Animated statistics
-   Improved empty states
-   Better mobile navigation
-   Reading progress indicator

The rule remains:

> Visual effects should improve usability, not distract from the
> solution.

------------------------------------------------------------------------

# 26. Possible Future Features

These are ideas, not committed requirements:

``` text
Bookmarks
Favorites
Problem completion tracking
Personal notes
Related problems
Pattern-based navigation
Difficulty progression
Monthly reports
Yearly reports
RSS feed
Newsletter integration
Social sharing
Open Graph previews
```

Some of these would require persistence or external services, so they should only be introduced if the project direction changes.

------------------------------------------------------------------------

# 27. V1 Definition

V1 should remain intentionally simple.

The final V1 should provide:

``` text
                 DAILYCODE V1

                     Home
                       │
          ┌────────────┼────────────┐
          │            │            │
       Today's       Stats       Recent
       Problem                    Problems
          │
          ▼
      Problem Page
          │
    ┌─────┼─────┐
    │     │     │
 Markdown Code  Navigation
    │     │
    ▼     ▼
 Content Syntax
        Highlight
```

And:

``` text
Problems
   │
   ├── Search
   ├── Difficulty
   ├── Topics
   └── Problem Cards
```

And:

``` text
Streak
   │
   └── Progress Calendar
```

------------------------------------------------------------------------

# 28. Development Principles

The project should follow these principles.

## 1. Markdown is the source of truth

Do not duplicate problem content inside React components.

## 2. No unnecessary backend

A backend is not needed for the current use case.

## 3. Static-first

Prefer build-time/static solutions wherever possible.

## 4. Reusable components

Problem cards, metadata, filters, code blocks, navigation, etc. should
remain reusable.

## 5. Data-driven UI

Pages should consume problem data rather than hardcoding
problem-specific information.

## 6. JavaScript only

The project is intentionally:

``` text
React + JavaScript + JSX
```

not TypeScript.

## 7. Keep dependencies reasonable

Do not add a library simply because it provides an effect that can be
implemented in a few lines.

## 8. Content over decoration

The actual LeetCode explanation and solution remain the most important
part of the website.

------------------------------------------------------------------------

# 29. Development Commands

Install dependencies:

``` bash
npm install
```

Run development server:

``` bash
npm run dev
```

Build production version:

``` bash
npm run build
```

Preview production build:

``` bash
npm run preview
```

Run lint:

``` bash
npm run lint
```

------------------------------------------------------------------------

# 30. Daily Publishing Workflow

Every new problem follows this workflow:

``` text
1. Solve the LeetCode problem
        ↓
2. Create Markdown file
        ↓
3. Add YAML metadata
        ↓
4. Write explanation
        ↓
5. Add Java solution
        ↓
6. Add complexity analysis
        ↓
7. Add key takeaway
        ↓
8. Run npm run build
        ↓
9. Commit changes
        ↓
10. Push to GitHub
        ↓
11. Render deploys
```
------------------------------------------------------------------------

# 45. Roadmap

``` text
[x] Phase 1 — Project Setup
[x] Phase 2 — Navbar / Footer / Global Layout
[x] Phase 3 — Markdown Content Engine
[x] Phase 4 — Problem Details + Markdown/Code Rendering
[x] Phase 5 — Problems Archive + Search + Filters
[x] Phase 6 — Home Page + Hero + Today's Problem + Stats
[ ] Phase 7 — Streak / Progress Page
[ ] Phase 8 — About Page
[ ] Phase 9 — Content Metadata Improvements
[ ] Phase 10 — Advanced Code Experience
[ ] Phase 11 — Advanced Search
[ ] Phase 12 — SEO
[ ] Phase 13 — Performance Optimization
[ ] Phase 14 — Accessibility
[ ] Phase 15 — Final Visual Polish
[ ] Phase 16 — Production Deployment
```

------------------------------------------------------------------------

# 46. Final Product Goal

DailyCode should ultimately feel like this:

``` text
        A developer opens DailyCode.

                 ↓

        Sees today's problem.

                 ↓

        Reads the explanation.

                 ↓

        Understands the approach.

                 ↓

        Reads the Java solution.

                 ↓

        Learns the pattern.

                 ↓

        Moves to the next problem.
```

Not:

``` text
Login
Admin
Dashboard
Database
Forms
Management
```

The product is the **journal itself**.

------------------------------------------------------------------------

## License

This project is intended as a personal developer/learning project.
License details can be added when the repository is prepared for public distribution.