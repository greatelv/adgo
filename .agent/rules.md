# AI Agent Interaction Rules

## 1. Discussion & Consultation Protocol

**Rule:** When the user asks for an **opinion**, **feedback**, or **discussion** (e.g., "What do you think?", "Is this good?"):

- **DO NOT** write or modify code immediately.
- **DO NOT** execute state-changing commands.
- **ONLY** provide analysis, pros/cons, and suggestions.
- **WAIT** for explicit user approval before implementation.

## 2. Language

- All communication, reasoning, and result explanations must be in **Korean**.

## 3. Implementation Workflow

1.  **Understand:** Clarify requirements.
2.  **Plan:** Propose changes (mentally or via plan artifact).
3.  **Confirm:** Get approval if the change is significant or subjective.
4.  **Execute:** Implement code.
5.  **Verify:** Run build/tests (`pnpm build`, `pnpm tsc`, etc.).
