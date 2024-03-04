import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { CardHeading } from "../ButtonComponent";

const Footer = () => {
  const linksData = [
    "Home",
    "About",
    "Services",
    "Why Us",
    "FAQ",
    "Contact Us",
  ];

  const icons = [
    "/Footer/2.svg",
    "/Footer/3.svg",
    "/Footer/4.svg",
    "/Footer/5.svg",
  ];
  return (
    <>
      <div className={styles.container}>
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
        <div className={styles.links}>
          {linksData.map((data, index) => (
            <a href="" key={index}>
              {data}
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
