# Use hover-assisted desktop navigation submenus

On desktop (`lg` and above), the About and Learning Programs navigation controls will open their submenus on pointer hover and close them after the pointer leaves the control/submenu wrapper with a short 150ms delay. The delay prevents flicker while the pointer crosses the existing submenu gap.

Click remains available as a fallback, and keyboard focus opens/keeps the active submenu available. `Escape` continues to close the active submenu and return focus to its trigger. Only one desktop submenu may be open at a time.

Mobile and tablet navigation remain click-controlled inside the navigation drawer because hover is not a reliable touch interaction. Existing mobile close-on-selection, Escape, and meaningful-scroll behavior remains unchanged.

**Status:** accepted
