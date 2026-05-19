'use client';
import Image from 'next/image';
import styles from './header.module.css';
import logo from '../../assets/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';

// Removi o import 'path' que não estava sendo usado

const navLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Áreas de Atuação', path: '/areas-de-atuacao' },
  { id: 3, name: 'Conteúdo', path: '/areas-de-atuacao/tributario' },
  { id: 4, name: 'Quem somos', path: '/quem-somos' },
];

export const Header = () => {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const menuRef = useRef<HTMLDivElement>(null);

  // // Fecha o menu ao clicar fora
  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
  //       setIsMenuOpen(false);
  //     }
  //   };
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, []);

  // // Fecha o menu ao mudar de rota
  // useEffect(() => {
  //   setIsMenuOpen(false);
  // }, [pathname]);

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

  return (
    <header className={`${styles.heading} ${solid ? styles.solid : ''}`}>
      <div className={styles.container}>
        <Link href="/">
          <Image src={logo} alt="Logo" className={styles.logo} />
        </Link>
        <nav className={styles.navBar}>
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
