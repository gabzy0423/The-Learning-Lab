# Initial Work Scope — Project Structure

## Task and scope

Create the agreed multi-page project folder scaffold without implementing page visuals, content, backend behavior, or the deferred Competency Platform.

## Observed

- The repository is a clean create-next-app starter with an App Router structure.
- Only the homepage route exists.
- Planning, glossary, ADR, content inventory, and asset inventory documents exist.

## Expected

- The repository has tracked folders for the agreed routes, reusable UI areas, content, and public assets.
- Existing starter application files remain unchanged.

## Primary domain

- Website structure and frontend organization.

## Affected surface

- New route-scaffold folders under `app/`.
- New reusable-component, content, and asset folders.
- The Solutions component area includes tailored learning and the public competency concept preview.

## Acceptance criteria

- The multi-page route hierarchy is represented in the folder tree.
- Asset folders distinguish brand, course, video, and resource materials.
- Competency Platform, HRIS, CADS, backend, and database folders are absent.
- No existing application file is overwritten.

## Risks and constraints

- Empty folders are not represented by Git, so tracked `.gitkeep` files are used for scaffolding.
- The scaffold must not imply that placeholder routes or content are approved.
- The deferred Competency Platform may appear only as a high-level Solutions-page visual concept, not as a route or operational dashboard.

## Verification plan

- Inspect the resulting tree and Git diff.
- Run the existing lint command only if the scaffold does not change executable files.

Contract Decision Gate: PASS
Write Gate: PASS
PLAN VALIDATED
