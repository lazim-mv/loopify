import React from "react";
import styles from "./container4.module.css";
import { CardHeading, SectionName, SectionTitle } from "../ButtonComponent";
import { container4Data } from "@/app/contents/content";
import Image from "next/image";

const Container4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SectionName sectionText={container4Data.sectionName} />
        <SectionTitle sectionText={container4Data.sectionTitle} />
      </div>
      <div className={styles.cards}>
        {container4Data.cardData.map((data, index) => (
          <div className={styles.card} key={index}>
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
        ))}
      </div>
    </div>
  );
};

export default Container4;
