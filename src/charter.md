---
menu: About
---

## Vision

The web deserves interoperability between component frameworks and design systems.
The UI community is in a similar place as the industrial revolution prior to standardization.
Untold amounts of human effort are exhausted globally every day on rebuilding identical components for web apps.

This should not be the case.
The UI community should standardize namings and structures for common components.
We should also standardize a way of theming these components.
We should set a path for existing solutions to converge and for browser to natively provide these things in the future.

UI component patterns have evolved and stabilized but have not made their way to to browsers or standards.
Designers and developers reinvent the same components for every product they build.
When building a web app or web page designers and developers should have a common set of components at their disposal.
We shouldn't have to rebuild a dropdown, modal dialog, split button, or other components before we build our products.

## Goals

These are the goals Open UI believes will realize the above vision.

- Document component names as they exist today
- A common language for describing UIs and design systems
- Eventual browser standards for web app components
- Converging designer processes and developer work flows

## Principles

These are the principles Open UI believes should be considered to realize the above goals.
As with all rules, there are always exceptions.

### Naming

- **Descriptivism is superior to prescriptivism for finding names**

  **Why?**
  Borrowing from [linguistic analysis](https://en.wikipedia.org/wiki/Linguistic_description) we believe that objective analysis of existing words in use in the UI community at large will produce names that are most likely to be adopted by the broader web.

- **Names should be void of design information**

  **Why?**
  When designs change names should not become invalid.
  Names should stand the test of time.
  Usually, names based on intent or usage are more robust and stand this test.
  Consider a component that displays mock content while waiting for the actual content to load.
  It might be more ideally named `Placeholder` opposed to `Shimmer`, even though most implementations appears to flash or shimmer.
  When the design changes and these components no longer shimmer, the name will become invalid and not make sense.