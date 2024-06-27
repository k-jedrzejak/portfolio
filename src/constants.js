import { gsap } from 'gsap';
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CustomEase, ScrollTrigger);

export const basicLoop = {
  repeat: -1,
  yoyo: true,
}

export const loopSineInOut = {
  ...basicLoop,
  ease: "sine.inOut"
}

export const loopJump = {
  ...basicLoop,
  ease: CustomEase.create("custom", "M0,0 C0.114,0.108 0.356,0.326 0.434,0.45 0.526,0.596 0.781,0.981 0.788,0.998 0.85,0.914 0.915,0.933 0.938,0.94 0.974,0.95 0.986,0.987 1,1 ")
}

export const loopBounce = {
  ...basicLoop,
  ease: "bounce.inOut"
}

export const loopBackInOut = {
  ...basicLoop,
  ease: "back.inOut(1.7)"
}


