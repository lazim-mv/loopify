"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import styles from "./hero.module.css";
import {
  BtnComponent,
  CardHeading,
  SectionDescription,
} from "../ButtonComponent";
import Header from "../Header/Header";
import { heroData } from "@/app/contents/content";
import Image from "next/image";
import MobileHeader from "../MobileHeader/MobileHeader";

const Hero = () => {
  return (
    <>
      <div className={styles.wrapContainer} id="home">
        <Header />
        <MobileHeader />
        <div className={styles.container1}>
          <div className={styles.left}>
            <h1>
              {heroData.sectionTitle}
              <span>{heroData.sectionSpan}</span>
            </h1>

            <SectionDescription
              sectionText={heroData.description}
              width="30.224867724867728vw"
            />
            <a href="/">
              <BtnComponent
                buttonText={heroData.btnText}
                borderColor="rgba(255, 255, 255, 0.6)"
                bg="#0063DB"
                color="#fff"
                arrow={true}
              />
            </a>
          </div>
          <div className={styles.imgContainer}>
            {heroData.images.map((data, index) => (
              <Image
                src={data}
                width={180}
                height={60}
                alt={"img" + index}
                quality={100}
                priority={true}
                unoptimized
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        {heroData.cardData.map((data, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.iconContainer}>
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
            <SectionDescription sectionText={data.description} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
