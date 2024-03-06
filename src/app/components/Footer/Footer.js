import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { CardHeading } from "../ButtonComponent";
import { useLenis } from "@studio-freight/react-lenis";

const Footer = () => {
  const menuList = [
    { text: "Home", id: "home" },
    { text: "About Us", id: "about" },
    { text: "Services", id: "services" },
    { text: "WhyUs", id: "whyus" },
    { text: "FAQ", id: "faq" },
  ];

  const lenis = useLenis(({ scroll }) => {});

  const handleMenuClick = (id) => {
    lenis.scrollTo(`#${id}`, { lerp: 0.05 });
    setActiveId(`#${id}`);
    console.log(`#${id}`, "class");
  };

  const icons = [
    "/Footer/2.svg",
    "/Footer/3.svg",
    "/Footer/4.svg",
    "/Footer/5.svg",
  ];
  return (
    <>
      <div className={styles.container}>
        <a onClick={() => handleMenuClick("home")}>
          <div className={styles.logoContainer}>
            <Image
              src="/Header/hLogo.svg"
              width={180}
              height={60}
              alt="image"
              quality={100}
              priority={true}
              unoptimized
            />
          </div>
        </a>
        <div className={styles.links}>
          {menuList.map((data, index) => (
            <a key={index} onClick={() => handleMenuClick(data.id)}>
              {data.text}
            </a>
          ))}
        </div>
        <div className={styles.emailAndText}>
          <CardHeading sectionText="Be one of the first to get our update & Business tips" />
          <input type="email" id="email" name="email" placeholder="E-mail" />
          <Image
            src="/Footer/1.svg"
            width={180}
            height={60}
            alt="image"
            quality={100}
            priority={true}
            unoptimized
          />
        </div>
        <hr />
        <div className={styles.bottom}>
          <CardHeading sectionText="Simplifying Your Business Journey" />
          <div className={styles.social}>
            <h3>Social Media</h3>
            <div className={styles.iconContainer}>
              {icons.map((data, index) => (
                <Image
                  key={index}
                  src={data}
                  width={180}
                  height={60}
                  alt="image"
                  quality={100}
                  priority={true}
                  unoptimized
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <h3>Copyright Loopify, All Rights Reserved</h3>
      </div>
    </>
  );
};

export default Footer;
