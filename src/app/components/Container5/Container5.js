import React from "react";
import styles from "./container5.module.css";
import { container5Data } from "@/app/contents/content";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import Image from "next/image";

const Container5 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SectionName sectionText={container5Data.sectionName} />
        <SectionTitle sectionText={container5Data.sectionTitle} />
      </div>
      <div className={styles.cards}>
        {container5Data.cardData.map((data, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.box1}>
              <div className={styles.iconContainer}>
                <Image
                  src={data.icon}
                  width={180}
                  height={60}
                  alt={"img" + index}
                  quality={100}
                  priority={true}
                  unoptimized
                />
              </div>
              <CardHeading sectionText={data.cardHeading} />
              <SectionDescription sectionText={data.description} />
            </div>
            {data.img !== "" ? (
              <div className={styles.box2}>
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
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container5;
