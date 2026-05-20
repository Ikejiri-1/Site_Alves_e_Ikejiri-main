'use client';
import Image from 'next/image';
import styles from './header.module.css';
import logo from '../../assets/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback, useRef } from 'react';

const navLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Áreas de Atuação', path: '/areas-de-atuacao' },
  { id: 3, name: 'Conteúdo', path: '/areas-de-atuacao/tributario' },
  { id: 4, name: 'Quem somos', path: '/quem-somos' },
];

export const Header = () => {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleScroll = useCallback(() => {
    if (pathname === '/') {
      setSolid(window.scrollY > 200);
    } else {
      setSolid(true);
    }
  }, [pathname]);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={`${styles.heading} ${solid ? styles.solid : ''}`}>
      <div className={styles.container} ref={menuRef}>
        <Link href="/">
          <figure className={styles.logoCell}>
            <Image src={logo} alt="Logo" className={styles.logo} priority />
          </figure>
        </Link>

        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
          onClick={toggleMenu}
          aria-label="Menu de navegação"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <nav className={`${styles.navBar} ${isMenuOpen ? styles.isOpen : ''}`}>
          {navLinks.map((link) => {
            const isAreas = link.path === '/areas-de-atuacao';

            return (
              <div
                key={link.id}
                className={isAreas ? styles.dropdownContainer : ''}
              >
                <Link
                  href={link.path}
                  className={`${styles.link} ${pathname === link.path ? styles.isActive : ''}`}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
