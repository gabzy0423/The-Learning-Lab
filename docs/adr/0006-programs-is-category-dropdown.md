# Make Programs a category dropdown

The primary Programs navigation item is a dropdown-only control. It exposes the five established program categories, while each category keeps its own public route:

- `/programs/personal-development`
- `/programs/managing-work`
- `/programs/managing-relationships`
- `/programs/leadership-management`
- `/programs/impacting-strategy`

The separate Programs overview page is removed from the intended public navigation. The `/programs` route redirects to `/programs/personal-development` as a safe fallback for legacy links, bookmarks, and existing CTA destinations. Category links remain normal navigational links.

**Status:** accepted
