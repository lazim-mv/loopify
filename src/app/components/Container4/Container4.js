"use client";
import React, { useEffect } from "react";
import styles from "./container4.module.css";
import { CardHeading, SectionName, SectionTitle } from "../ButtonComponent";
import { container4Data } from "@/app/contents/content";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Container4 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let revealContainers = document.querySelectorAll(
      ".container4_revealContainer__Xkt5I"
    );

    revealContainers.forEach((container) => {
      let image = container.querySelector(".container4_card__xnp3S");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          // duration: 0.8,
          toggleActions: "restart none none reset",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, {
        xPercent: 0,
        ease: "Power2.out",
        // duration: 0.4,
      });
      tl.from(image, {
        xPercent: -100,
        delay: -1.5,
        width: 0,
        ease: "Power2.out",
      });
    });
  });
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SectionName sectionText={container4Data.sectionName} />
        <SectionTitle sectionText={container4Data.sectionTitle} />
      </div>
      <div className={styles.cards}>
        {container4Data.cardData.map((data, index) => (
          <div className={styles.revealContainer} key={index}>
            <div className={styles.card}>
              <div className={styles.imgContainer}>
                <Image
                  src={data.img}
                  width={180}
                  height={60}
                  alt={"img" + index}
                  quality={100}
                  priority={true}
                  unoptimized
                />
              </div>

              <CardHeading sectionText={data.cardHeading} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container4;
