import React from "react";
import styles from "./container6.module.css";
import { container6Data } from "@/app/contents/content";
import { CardHeading, SectionName, SectionTitle } from "../ButtonComponent";
import Image from "next/image";

const Container6 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SectionName sectionText={container6Data.sectionName} />
        <SectionTitle sectionText={container6Data.sectionTitle} />
      </div>
      <div className={styles.cards}>
        {container6Data.cardData.map((data, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={data.img}
              width={180}
              height={60}
              alt={"img" + index}
              quality={100}
              priority={true}
              unoptimized
            />
            <CardHeading sectionText={data.cardHeading} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container6;
