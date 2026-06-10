(() => {
  const body = document.body;
  const appsLayer = document.getElementById('apps-layer');
  const appsToggle = document.querySelector('.apps-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const closeAppsTargets = document.querySelectorAll('[data-close-apps]');
  const closeDrawerTargets = document.querySelectorAll('[data-close-drawer]');
  const appsPanel = document.getElementById('apps-panel');
  const viewportSwitch = window.matchMedia('(max-width: 920px)');

  let lastFocus = null;

  const getFocusable = (root) =>
    Array.from(root.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'))
      .filter((el) => !el.hasAttribute('hidden') && el.offsetParent !== null);

  const openLayer = (layer, opener) => {
    if (!layer || !opener) return;
    lastFocus = opener;
    layer.hidden = false;
    body.classList.add('menu-open');
    opener.setAttribute('aria-expanded', 'true');

    const focusables = getFocusable(layer);
    if (focusables.length) {
      requestAnimationFrame(() => focusables[0].focus());
    }
  };

  const closeLayer = (layer, opener, { restoreFocus = true } = {}) => {
    if (!layer || !opener) return;
    layer.hidden = true;
    body.classList.remove('menu-open');
    opener.setAttribute('aria-expanded', 'false');
    if (restoreFocus && lastFocus) {
      lastFocus.focus();
    }
    lastFocus = null;
  };

  const toggleLayer = (layer, opener) => {
    if (!layer || !opener) return;
    if (layer.hidden) {
      openLayer(layer, opener);
    } else {
      closeLayer(layer, opener);
    }
  };

  appsToggle?.addEventListener('click', (event) => {
    event.preventDefault();
    toggleLayer(appsLayer, appsToggle);
  });

  mobileMenuButton?.addEventListener('click', (event) => {
    event.preventDefault();
    toggleLayer(mobileDrawer, mobileMenuButton);
  });

  closeAppsTargets.forEach((target) => {
    target.addEventListener('click', () => closeLayer(appsLayer, appsToggle));
  });

  closeDrawerTargets.forEach((target) => {
    target.addEventListener('click', () => closeLayer(mobileDrawer, mobileMenuButton));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (!appsLayer.hidden) {
      closeLayer(appsLayer, appsToggle);
      return;
    }
    if (!mobileDrawer.hidden) {
      closeLayer(mobileDrawer, mobileMenuButton);
    }
  });

  document.addEventListener('pointerdown', (event) => {
    const target = event.target;

    if (!appsLayer.hidden) {
      const clickedInsidePanel = appsPanel.contains(target);
      const clickedToggle = appsToggle.contains(target);
      if (!clickedInsidePanel && !clickedToggle) {
        closeLayer(appsLayer, appsToggle, { restoreFocus: false });
      }
    }

    if (!mobileDrawer.hidden) {
      const drawerPanel = mobileDrawer.querySelector('.drawer-panel');
      const clickedInsideDrawer = drawerPanel.contains(target);
      const clickedToggle = mobileMenuButton.contains(target);
      if (!clickedInsideDrawer && !clickedToggle) {
        closeLayer(mobileDrawer, mobileMenuButton, { restoreFocus: false });
      }
    }
  });

  document.addEventListener('focusin', (event) => {
    const target = event.target;

    if (!appsLayer.hidden) {
      const insideApps = appsPanel.contains(target) || appsToggle.contains(target);
      if (!insideApps) {
        closeLayer(appsLayer, appsToggle, { restoreFocus: false });
      }
    }

    if (!mobileDrawer.hidden) {
      const drawerPanel = mobileDrawer.querySelector('.drawer-panel');
      const insideDrawer = drawerPanel.contains(target) || mobileMenuButton.contains(target);
      if (!insideDrawer) {
        closeLayer(mobileDrawer, mobileMenuButton, { restoreFocus: false });
      }
    }
  });

  const syncLayoutState = () => {
    if (!appsLayer.hidden) closeLayer(appsLayer, appsToggle, { restoreFocus: false });
    if (!mobileDrawer.hidden) closeLayer(mobileDrawer, mobileMenuButton, { restoreFocus: false });
  };

  viewportSwitch.addEventListener('change', syncLayoutState);
})();
