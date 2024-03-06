"use client";
import React, { useState } from "react";
import styles from "./container6.module.css";
import { container6Data } from "@/app/contents/content";
import { CardHeading, SectionName, SectionTitle } from "../ButtonComponent";
import Image from "next/image";
import ArrowButtons from "../ArrowButton/ArrowButtons";
import { useWindowSize } from "@/app/utils/windowSize";

const Container6 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { windowSize, isSmallScreen } = useWindowSize();

  const totalData = container6Data.cardData.length;
  console.log(totalData, "clicked");
  const clicks = isSmallScreen ? totalData - 1 : totalData - 4;
  const dynamicValue = isSmallScreen ? 70 : 20.5;
  console.log(dynamicValue, currentIndex, isSmallScreen, "clicke");

  const nextImage = () => {
    if (currentIndex < clicks) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      console.log("clicked1");
      console.log(currentIndex, "clicked");
      console.log(dynamicValue, "clicked");
    } else {
      setCurrentIndex(0);
      console.log("clicked2");
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(clicks);
    }
  };

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SectionName sectionText={container6Data.sectionName} />
        <SectionTitle sectionText={container6Data.sectionTitle} />
      </div>
      <div className={styles.cards}>
        {container6Data.cardData.map((data, index) => (
          <div
            className={styles.card}
            key={index}
            onClick={() => handleCardClick(index)}
            style={{
              transform: `translateX(-${currentIndex * dynamicValue}vw)`,
              transition: `transform 0.8s ease, ${
                !isSmallScreen ? "width" : "height"
              } 0.8s ease`,
            }}
          >
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
      <div className={styles.arrows}>
        {!isSmallScreen && (
          <ArrowButtons prevImage={prevImage} nextImage={nextImage} />
        )}
      </div>
    </div>
  );
};

export default Container6;
