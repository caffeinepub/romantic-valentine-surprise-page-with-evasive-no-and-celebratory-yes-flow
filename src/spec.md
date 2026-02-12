# Specification

## Summary
**Goal:** Make both the standalone Valentine page and the React app Valentine flow show a cartoonish romantic prompt with an evasive “No” button, and reveal a meme image plus a full English love letter after “Yes”.

**Planned changes:**
- Update `frontend/public/valentine.html` to show “Will you be my Valentine, my love?” with “Yes” and an evasive “No” (moves away on hover and on touch), and on “Yes” switch to a celebration view.
- In the celebration view (standalone page), display a static meme-style cartoon romantic image with embedded text “You are my forever, Warda.” and render the full English love letter below it as selectable, readable, scrollable text suitable for iPad Chrome.
- Update `frontend/src/App.tsx` to match the same Valentine flow behavior (evasive “No”, “Yes” reveal), including the same meme image and the full English love letter text beneath it with mobile/tablet-friendly spacing and scrolling.
- Apply a consistent cartoonish romantic theme (warm pink/red palette, rounded shapes, heart accents, soft shadows, friendly cartoon-like typography feel) across both experiences.
- Add and reference a new static image asset at `frontend/public/assets/generated/valentine-meme-forever-warda.dim_1600x900.png` from both the standalone page and the React flow (no backend image serving).

**User-visible outcome:** On both the standalone HTML page and in the React app, the user sees a Valentine prompt with a “No” button that dodges interaction; clicking “Yes” reveals a romantic cartoon meme image (“You are my forever, Warda.”) and a readable, scrollable English love letter below it.
