"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import styles from "./header.module.css";
import { BtnComponent } from "../ButtonComponent";
import { useLenis } from "@studio-freight/react-lenis";

function Header() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("#home");

  const menuList = [
    { text: "Home", id: "home" },
    { text: "About Us", id: "about" },
    { text: "Services", id: "services" },
    { text: "WhyUs", id: "whyus" },
    { text: "FAQ", id: "faq" },
  ];

  console.log(pathname, "path");

  const lenis = useLenis(({ scroll }) => {});

  const handleMenuClick = (id) => {
    lenis.scrollTo(`#${id}`, { lerp: 0.05 });
    setActiveId(`#${id}`);
    console.log(`#${id}`, "class");
  };

  return (
    <>
      <div className={`${styles.hContainer} ${styles.bgWhite}`}>
        <a onClick={() => handleMenuClick("home")}>
          <div className={styles.logoContainer}>
            <Image
              src="/Header/hLogo.svg"
              width={180}
              height={60}
              alt="ImageHeader"
              quality={100}
              priority={true}
              unoptimized
            />
          </div>
        </a>
        <div className={styles.hMenuContainer}>
          <div className={styles.hMenu}>
            <ul className={styles.hUlList}>
              {menuList.map((item, index) => (
                <li
                  key={index}
                  className={`${styles.huListTransitionWrapper} `}
                >
                  <a
                    className={` ${
                      activeId === `#${item.id}` ? styles.active : ""
                    }`}
                    onClick={() => handleMenuClick(item.id)}
                  >
                    <div>{item.text}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a href="/">
          <BtnComponent
            buttonText="Get in Touch"
            borderColor="rgba(255, 255, 255, 0.6)"
            bg="#0063DB"
            color="#fff"
            arrow={true}
          />
        </a>
        {/* <hr /> */}
      </div>
    </>
  );
}

export default Header;
