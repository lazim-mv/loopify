import React from "react";
import styles from "./container2.module.css";
import Image from "next/image";
import { container2Data } from "@/app/contents/content";
import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "../ButtonComponent";

const Container2 = () => {
  return (
    <div className={styles.contianer} id="about">
      <Image
        src={container2Data.img}
        width={180}
        height={60}
        alt="container2"
        quality={100}
        priority={true}
        unoptimized
      />
      <div className={styles.content}>
        <SectionTitle sectionText={container2Data.sectionTitle} />
        <SectionDescription sectionText={container2Data.description} />
        <a href="/">
          <BtnComponent
            buttonText={container2Data.btnText}
            borderColor="rgba(255, 255, 255, 0.6)"
            bg="#0063DB"
            color="#fff"
            arrow={true}
          />
        </a>
      </div>
    </div>
  );
};

export default Container2;
