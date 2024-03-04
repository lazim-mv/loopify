import React from "react";
import styles from "./container3.module.css";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { container3Data } from "@/app/contents/content";
import Image from "next/image";

const Container3 = () => {
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
                padding="0.5291005291005291vw 1.0582010582010581vw"
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
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container3;
