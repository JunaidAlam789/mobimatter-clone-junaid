"use client"

import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { countriesCarouselSettings } from "@/utils/generalSettings";
import { cn } from "@/lib/utils";


interface GeneralCarouselProps {
  children : React.ReactNode;
  settings : any;
  className ?: string;
  dots ?: any;
}

export const GeneralCarousel = ({
  children,
  settings,
  className,
  dots
}:GeneralCarouselProps) => {

  const settinges = {
    ...(settings && settings ? settings : countriesCarouselSettings),
  }
  return (
    <Slider
    {...settinges}
    className={cn("",className )}
    appendDots={dots}
    >
      {children}
    </Slider>
  );
};
