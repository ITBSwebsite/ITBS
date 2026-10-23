'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Logo } from '../ui/logo';

interface NavItemData {
  id: string;
  label: string;
  href?: string;
  layout: 'wide' | 'two' | 'compact' | 'feature';
  feature?: string;
  groups: {
    title: string;
    accent?: boolean;
    items: {
      label: string;
      slug: string;
      desc?: string;
    }[];
  }[];
}

const NAV_DATA: NavItemData[] = [
  {
    id: 'solutions',
    label: 'Solutions',
    layout: 'feature',
    feature: 'Digital solutions built around your business goals.',
    groups: [
      {
        title: '',
        items: [
          { label: 'CRM & Lead Management', slug: 'crm-lead-management' },
          { label: 'AI Automation', slug: 'ai-automation' },
        ],
      },
    ],
  },
  {
    id: 'seo',
    label: 'SEO & AI Search',
    layout: 'wide',
    groups: [
      {
        title: 'SEO Services',
        items: [
          { label: 'SEO', slug: 'seo' },
          { label: 'Ecommerce SEO', slug: 'ecommerce-seo' },
          { label: 'SEO Audits', slug: 'seo-audits' },
          { label: 'SEO Migration Services', slug: 'seo-migration-services' },
          { label: 'Content Marketing', slug: 'content-marketing' },
        ],
      },
      {
        title: 'AI Search',
        accent: true,
        items: [
          {
            label: 'Answer Engine Optimisation (AEO)',
            slug: 'aeo',
            desc: 'Content structured for answer engines',
          },
          {
            label: 'Generative Engine Optimisation (GEO)',
            slug: 'generative-engine-optimisation',
            desc: 'Visibility in generative AI search',
          },
        ],
      },
    ],
  },
  {
    id: 'web',
    label: 'Web Development',
    href: '/web-development-design',
    layout: 'two',
    groups: [
      {
        title: 'Development Services',
        items: [
          { label: 'Custom Web Development', slug: 'custom-web-development' },
          { label: 'Ecommerce Development', slug: 'ecommerce-development' },
        ],
      },
      {
        title: 'Platforms',
        accent: true,
        items: [
          { label: 'WordPress Development', slug: 'wordpress-development' },
          { label: 'Shopify Development', slug: 'shopify-development' },
        ],
      },
    ],
  },
  {
    id: 'design',
    label: 'Design & Creative',
    layout: 'compact',
    groups: [
      {
        title: '',
        items: [
          { label: 'Graphic Design', slug: 'graphic-design' },
          { label: 'UI/UX Design', slug: 'ui-ux-design' },
          { label: 'Figma Design', slug: 'figma-design' },
        ],
      },
    ],
  },
  {
    id: 'paid',
    label: 'Paid Advertising',
    layout: 'compact',
    groups: [
      {
        title: '',
        items: [
          { label: 'PPC', slug: 'ppc' },
          { label: 'Paid Social Advertising', slug: 'paid-social-advertising' },
        ],
      },
    ],
  },
];

export function Header() {
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [panelLeftOffsets, setPanelLeftOffsets] = useState<{ [key: string]: number }>({});
  const [isDesktop, setIsDesktop] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const itemRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  const panelRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (desktop) {
        setDrawerOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Position calculation to keep mega panels within screen edges (exact logic from user template)
  const calculatePosition = (id: string) => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;
    const itemEl = itemRefs.current[id];
    const panelEl = panelRefs.current[id];
    if (!itemEl || !panelEl) return;

    const itemRect = itemEl.getBoundingClientRect();
    const panelWidth = panelEl.offsetWidth;
    const max = document.documentElement.clientWidth - 16;

    let left = 0;
    if (itemRect.left + panelWidth > max) {
      left = -(itemRect.left + panelWidth - max);
    }
    if (itemRect.left + left < 16) {
      left = 16 - itemRect.left;
    }

    setPanelLeftOffsets((prev) => ({ ...prev, [id]: left }));
  };

  useEffect(() => {
    if (isDesktop && openItemId) {
      calculatePosition(openItemId);
    }
  }, [openItemId, isDesktop]);

  const handleOpen = (id: string) => {
    if (!isDesktop) return;
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setOpenItemId(id);
    requestAnimationFrame(() => {
      calculatePosition(id);
    });
  };

  const handleClose = () => {
    if (!isDesktop) return;
    closeTimerRef.current = setTimeout(() => {
      setOpenItemId(null);
    }, 150);
  };

  const toggleItem = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
    if (isDesktop) {
      requestAnimationFrame(() => {
        calculatePosition(id);
      });
    }
  };

  // Keyboard navigation and outside click listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenItemId(null);
        setDrawerOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      const header = document.querySelector('.site-header');
      if (header && !header.contains(e.target as Node)) {
        setOpenItemId(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (!isDesktop && drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen, isDesktop]);

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* ITBS Brand Logo */}
        <Logo />

        {/* Mobile menu toggle (visible only on mobile) */}
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={drawerOpen}
          aria-controls="primary-nav"
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {drawerOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
          <span>{drawerOpen ? 'Close' : 'Menu'}</span>
        </button>

        {/* Primary Navigation */}
        <nav
          className={`primary-nav ${drawerOpen ? 'is-open' : ''}`}
          id="primary-nav"
          aria-label="Main"
        >
          <ul className="nav-list">
            {NAV_DATA.map((item) => {
              const isOpen = openItemId === item.id;
              const leftOffset = panelLeftOffsets[item.id] || 0;

              return (
                <li
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[item.id] = el;
                  }}
                  className={`nav-item ${isOpen ? 'is-open' : ''}`}
                  onPointerEnter={(e) => {
                    if (e.pointerType === 'mouse' && isDesktop) {
                      handleOpen(item.id);
                    }
                  }}
                  onPointerLeave={(e) => {
                    if (e.pointerType === 'mouse' && isDesktop) {
                      handleClose();
                    }
                  }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="nav-trigger"
                      aria-expanded={isOpen}
                      aria-controls={`mega-${item.id}`}
                      onClick={(e) => {
                        if (!isDesktop) {
                          if (!isOpen) {
                            e.preventDefault();
                            toggleItem(item.id);
                          } else {
                            setDrawerOpen(false);
                            setOpenItemId(null);
                          }
                        } else {
                          setOpenItemId(null);
                        }
                      }}
                    >
                      <span>{item.label}</span>
                      <svg
                        className="nav-chev"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                      >
                        <path d="M1.5 3.5 5 7l3.5-3.5" />
                      </svg>
                    </Link>
                  ) : (
                    <button
                      className="nav-trigger"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`mega-${item.id}`}
                      onClick={() => toggleItem(item.id)}
                    >
                      <span>{item.label}</span>
                      <svg
                        className="nav-chev"
                        viewBox="0 0 10 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                      >
                        <path d="M1.5 3.5 5 7l3.5-3.5" />
                      </svg>
                    </button>
                  )}

                  {/* Mega Dropdown Panel - ONLY rendered when isOpen is true */}
                  {isOpen && (
                    <div
                      ref={(el) => {
                        panelRefs.current[item.id] = el;
                      }}
                      id={`mega-${item.id}`}
                      style={
                        isDesktop && leftOffset !== 0
                          ? { left: `${leftOffset}px` }
                          : undefined
                      }
                      className={`mega-panel ${
                        ['solutions', 'seo', 'web'].includes(item.id)
                          ? 'mega-panel--split'
                          : 'mega-panel--solid'
                      } mega-panel--${item.id} ${
                        item.layout === 'wide'
                          ? 'mega--wide'
                          : item.layout === 'two'
                          ? 'mega--two'
                          : item.layout === 'compact'
                          ? 'mega--compact'
                          : 'mega--feature'
                      }`}
                    >
                      {item.groups.map((group, groupIdx) => (
                        <div
                          key={group.title || groupIdx}
                          className={`group ${group.accent ? 'group--accent' : ''}`}
                        >
                          {group.title ? (
                            <h3 className="group-title">{group.title}</h3>
                          ) : null}
                          <ul className="mega-list">
                            {group.items.map((subItem) => (
                              <li key={subItem.slug}>
                                <Link
                                  className="mega-link"
                                  href={`/services/${subItem.slug}`}
                                  onClick={() => {
                                    setOpenItemId(null);
                                    setDrawerOpen(false);
                                  }}
                                >
                                  <span>{subItem.label}</span>
                                </Link>
                                {subItem.desc && (
                                  <span className="mega-desc">{subItem.desc}</span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {item.feature && (
                        <div className="feature-box">
                          <p>{item.feature}</p>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Mobile CTA inside Drawer */}
          <Link
            className="header-cta mobile-cta"
            href="/contact"
            onClick={() => setDrawerOpen(false)}
          >
            Contact us
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <Link className="header-cta" href="/contact">
          Contact us
        </Link>
      </div>
    </header>
  );
}
