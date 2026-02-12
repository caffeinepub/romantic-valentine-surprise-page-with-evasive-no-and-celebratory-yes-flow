# Specification

## Summary
**Goal:** Create a simple, cartoonish romantic Valentine prompt with “Yes/No” (with an evasive “No”) and a “Yes” reveal showing a meme image and a love letter, optimized for iPad Chrome.

**Planned changes:**
- Update `frontend/public/valentine.html` to show the single question “Will you be my Valentine, my love?” with exactly two buttons: “Yes” and “No”, using English-only copy and an iPad-friendly layout.
- Implement evasive “No” behavior in `frontend/public/valentine.html`: on hover/touch, move the “No” button to a random position within bounds without overlapping the “Yes” button, making it hard to click.
- On “Yes” click, show a reveal/celebration view in both `frontend/public/valentine.html` and `frontend/src/App.tsx` that includes the meme image (“You are my forever, Warda.”) and the full love letter content formatted as readable, scrollable paragraphs.
- Apply a consistent cartoonish romantic theme across both flows (warm pink/red palette, rounded shapes, heart accents, soft shadows, friendly typography) while keeping the UI single-purpose.
- Add and reference the static meme image at `frontend/public/assets/generated/valentine-meme-forever-warda.dim_1600x900.png` from both the standalone page and the React app.

**User-visible outcome:** On iPad Chrome, the user sees a romantic Valentine question with “Yes” and an evasive “No”; tapping “Yes” reveals a themed celebration view with a meme image and a scrollable love letter.
