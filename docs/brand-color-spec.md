# Brand Color Specification

## Status

Context-engineered direction. Implemented in the shared CSS, homepage, route placeholders, and navigation after explicit confirmation.

## Approved palette

| Role | Name | Value |
| --- | --- | --- |
| Main dark surface and text | Charcoal | `#292929` |
| Interaction and focus accent | Cyan Blue | `#48B9E8` |
| Supporting visual accent and active state | Turquoise | `#47D3C5` |
| Primary CTA and highlighted copy | Mint Green | `#40F59C` |
| Page surface and light content | White | `#FFFFFF` |

## Surface direction

- White navbar remains the selected navigation surface.
- The original full logo remains the selected desktop logo asset, including its Charcoal rectangular background.
- The Hero uses Charcoal as its primary background with White copy and Mint Green emphasis.
- Content sections use White as the default page surface.
- The logo rectangle on the White navbar is an intentional official-asset exception, not a reason to introduce an unapproved logo variant.

## Usage rules

- Cyan Blue replaces legacy Coral usage for focus outlines and readable interaction labels.
- Turquoise replaces legacy Orange usage for supporting accents and active visual states.
- Mint Green replaces legacy Mint usage for primary CTAs and highlighted Hero copy.
- Charcoal replaces legacy Deep Purple for primary dark surfaces, headings, and dark text.
- White replaces legacy Off-White for page surfaces and light controls.
- Do not introduce broad gradients or arbitrary colors outside this palette.

## Migration boundary

Rename the old semantic tokens and update all usages across the shared CSS, layout/header, homepage, route placeholders, and related documentation. Remove the legacy token names after migration so the code and documentation do not retain misleading purple/coral/orange terminology.

## Accessibility boundary

- Preserve visible focus indicators using Cyan Blue.
- Keep normal text contrast readable on both White and Charcoal surfaces.
- Validate CTA and navigation states after migration; palette replacement must not reduce focus or text contrast.
