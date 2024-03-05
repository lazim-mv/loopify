"use client";
import React, { useEffect } from "react";
import styles from "./container3.module.css";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { container3Data } from "@/app/contents/content";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Container3 = ({ mobile }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let revealContainers = document.querySelectorAll(
      ".container3_imgContainer___NBxI"
    );

    revealContainers.forEach((container) => {
      let image = container.querySelector(".container3_img__o8scV");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          // duration: 2,
          toggleActions: "restart none none reset",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        xPercent: 0,
        ease: "Power2.out",
        duration:.8,
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        delay: -1.5,
        width:"100%",
        ease: "Power2.out",
      });
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SectionName sectionText={container3Data.sectionName} />
        <SectionTitle sectionText={container3Data.sectionTitle} />
      </div>
      <div className={styles.cards}>
        {container3Data.cardData.map((data, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.content}>
              <SectionName
                sectionText={data.sectionName}
                background={data.bg}
                padding={
                  mobile
                    ? "1.0666666666666667vw 3.2vw"
                    : "0.5291005291005291vw 1.0582010582010581vw"
                }
              />
              <CardHeading sectionText={data.cardHeading} />
              <SectionDescription sectionText={data.description} />
            </div>
            <div className={styles.imgContainer}>
              <Image
                src={data.img}
                width={180}
                height={60}
                alt={"img" + index}
                quality={100}
                priority={true}
                unoptimized
                className={styles.img}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container3;
