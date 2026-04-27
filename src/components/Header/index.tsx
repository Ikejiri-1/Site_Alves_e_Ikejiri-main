"use client";
import Image from "next/image";
import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import path from "path";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  {
    id: 2,
    name: "Áreas de Atuação",
    path: "/areas-de-atuacao",
  },
  {
    id: 3,  
    name: "Quem somos",
    path: "/quem-somos",
  },
  {
    id: 4,  
    name: "Contato",
    path: "/contato",
  },
];

export const Header = () => {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  
  const handleScroll = useCallback(()=>{
    if(pathname === "/quem-somos" || pathname === "/areas-de-atuacao"){
      setSolid(true);
      }
      else{
        setSolid(window.scrollY >200)
    }
  },[pathname])

  useEffect(()=>{
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return()=> window.removeEventListener("scroll", handleScroll)
  },
  [handleScroll]
)
  
  return (
    <header className={`${styles.heading} ${solid ? styles.solid : ""}`}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo de um A cortado por um I, embaixo está escrito Alves & Ikejiri ADVOGADOS"
            className={styles.logo}
          ></Image>
        </Link>
        <nav className={styles.navBar}>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className={
                pathname === link.path
                  ? `${styles.link} ${styles.isActive}`
                  : styles.link
              }
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
