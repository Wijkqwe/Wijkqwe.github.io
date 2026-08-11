// 适配 mkdocs‑material navigation.instant SPA
document$.subscribe(() => {
  const tocSidebar = document.querySelector('.md-sidebar__toc');
  if (!tocSidebar) return;

  // 开启原生 toc.follow 才会自动更新 md-nav__item--active
  // MutationObserver：监听TOC内部 class 变化，实现自动展开/收起
  const observer = new MutationObserver((mutations) => {
    for(const mut of mutations) {
      if(mut.attributeName === 'class') {
        // css已经通过 --active 控制显示隐藏；这里仅做可选扩展逻辑
      }
    }
  });

  const tocList = tocSidebar.querySelector('[data-md-component="toc"]');
  if(tocList) {
    observer.observe(tocList, {
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });
  }
});
