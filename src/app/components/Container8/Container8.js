"use client";

import React, { useState } from "react";

import Image from "next/image";
import styles from "./container8.module.css";
import {
  BtnComponent,
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { container8Data } from "@/app/contents/content";

const Container8 = () => {
  const cardData = container8Data.faqData;
  const initialVisibleState = Array(cardData.length).fill(false);
  initialVisibleState[0] = true;
  const [answerVisible, setAnswerVisible] = useState(initialVisibleState);

  const handleClick = (index) => {
    setAnswerVisible((prevVisible) => {
      const newVisible = Array(cardData.length).fill(false);
      newVisible[index] = !prevVisible[index];
      return newVisible;
    });
  };

  return (
    <div className={styles.container7}>
      <div className={styles.title}>
        <SectionName sectionText="FAQ" />
        <SectionTitle sectionText="Frequently Asked Questions (FAQ)" />
      </div>
      <div className={styles.faqContainer}>
        <div className={styles.firstCol}>
          <Image
            src="/Container8/1.png"
            width={180}
            height={60}
            alt="img"
            quality={100}
            priority={true}
            unoptimized
          />
          <CardHeading sectionText="Running out time? Get started with short call" />
          <a href="/">
            <BtnComponent
              buttonText="Get Started"
              borderColor="rgba(255, 255, 255, 0.6)"
              bg="#0063DB"
              color="#fff"
              arrow={true}
            />
          </a>
        </div>
        <div className={styles.secondCol}>
          {cardData.map((data, index) => (
            <div
              className={styles.faqDataCard}
              onClick={() => handleClick(index)}
              key={index}
            >
              <div className={styles.questionAnswerContainer}>
                <div className={styles.questionContainer}>
                  <CardHeading sectionText={data.question} weight="500" />
                  <div
                    className={styles.plusIcon}
                    onClick={() => handleClick(index)}
                  >
                    <Image
                      src="/Container8/4.svg"
                      width={16}
                      height={16}
                      alt="ImageFaq"
                      className={styles.openCloseIcon}
                      style={{
                        transform: answerVisible[index]
                          ? "rotate(0deg)"
                          : "rotate(45deg)",
                        transition: "transform .5s ease",
                      }}
                    />
                  </div>
                </div>
                <div
                  className={`${styles.answerContainer} ${
                    answerVisible[index] ? styles.visible : ""
                  }`}
                >
                  <SectionDescription
                    sectionText={data.answer}
                    color="#58595B"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container8;
