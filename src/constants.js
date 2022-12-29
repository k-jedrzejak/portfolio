import { gsap } from 'gsap';
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

export const loop = {
  repeat: -1,
  yoyo: true,
}

export const loopSineinOut = {
  ...loop,
  ease: "sine.inOut"
}

export const loopJump = {
  ...loop,
  ease: CustomEase.create("custom", "M0,0 C0.114,0.108 0.356,0.326 0.434,0.45 0.526,0.596 0.781,0.981 0.788,0.998 0.85,0.914 0.915,0.933 0.938,0.94 0.974,0.95 0.986,0.987 1,1 ")
}

