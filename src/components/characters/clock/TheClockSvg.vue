<template>
  <svg
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="512"
    height="512"
    id="clock"
  >
    <defs>
      <filter x="-50%" y="-50%" width="200%" height="200%" id="cf1">
        <feGaussianBlur stdDeviation=".8" />
      </filter>
      <linearGradient
        id="cg1"
        x2="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0,444.416,-444.316,0,256.305,35.538)"
      >
        <stop offset="0" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="1" stop-color="#ffffff" stop-opacity=".4" />
      </linearGradient>
      <filter x="-50%" y="-50%" width="200%" height="200%" id="cf2">
        <feGaussianBlur stdDeviation="1" />
      </filter>
      <linearGradient
        id="cg2"
        x2="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(239.684,415.158,-266.422,153.814,210.537,-0.009)"
      >
        <stop offset="0" stop-color="#ffffff" stop-opacity="1" />
        <stop offset="1" stop-color="#ffffff" stop-opacity=".25" />
      </linearGradient>
      <radialGradient
        id="cg3"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(3,0,0,3,258.25,253.75)"
      >
        <stop offset="0" stop-color="#ffffff" stop-opacity=".8" />
        <stop offset="1" stop-color="#000000" stop-opacity="1" />
      </radialGradient>
    </defs>

    <path
      id="Layer"
      class="s0"
      d="m256 471c-118.9 0-215-96.1-215-215 0-118.9 96.1-215 215-215 118.9 0 215 96.1 215 215 0 118.9-96.1 215-215 215z"
    />
    <path
      id="Layer"
      fill-rule="evenodd"
      class="s1"
      d="m501.8 256c0 135.7-110.1 245.8-245.8 245.8-135.7 0-245.8-110.1-245.8-245.8 0-135.7 110.1-245.8 245.8-245.8 135.7 0 245.8 110.1 245.8 245.8zm-30.8 0c0-118.8-96.2-215-215-215-118.8 0-215 96.2-215 215 0 118.8 96.2 215 215 215 118.8 0 215-96.2 215-215z"
    />
    <path
      id="Layer"
      class="s2"
      d="m256 35.8c120.5 0 218.1 97.7 218.1 218.2 0 120.4-97.6 218.1-218.1 218.1-120.5 0-218.1-97.7-218.1-218.1 0-120.5 97.6-218.2 218.1-218.2-122.7 0-222.2 99.5-222.2 222.2 0 122.8 99.5 222.3 222.2 222.3 122.7 0 222.2-99.5 222.2-222.3 0-122.7-99.5-222.2-222.2-222.2z"
    />
    <path
      id="Layer"
      class="s3"
      d="m255 12.3c-67.6 0-128.7 27.5-172.9 71.9 44.1-43.8 104.8-70.9 171.9-70.9 134.6 0 243.7 109.1 243.7 243.7 0 67.1-27.1 127.8-70.9 171.8 44.4-44.1 71.9-105.3 71.9-172.8 0-134.6-109.1-243.7-243.7-243.7z"
    />
    <path
      id="Layer"
      fill-rule="evenodd"
      class="s4"
      d="m256 56.3l-2.5-5.1h5.1zm-3.1 399.4l2.5 5.1h-5.1zm104.2-371.9l0.4-5.7 4.4 2.6zm72.6 73.6l3.1-4.8 2.6 4.5zm26 101.7l5.1-2.6v5.2zm-27.4 97.9l5.7 0.4-2.6 4.4zm-73.7 72.7l4.8 3.2-4.5 2.5zm-197-347.5l-4.7-3.2 4.4-2.5zm-73.7 72.5l-5.7-0.4 2.6-4.4zm-27.6 101.3l-5.1 2.5v-5.1zm25.9 98.4l-3.2 4.7-2.5-4.4zm72.6 73.7l-0.4 5.7-4.4-2.6z"
    />
    <path
      id="Layer"
      class="s4"
      d="m350.4 87v48q0 1 0.5 1.6 0.7 0.8 1.7 0.8h4.6v2.9h-17.2v-2.9h3.9q1.3 0 1.9-0.9 0.6-1 0.6-2.5v-36.2q0-1.2-0.6-1.9-0.5-0.8-1.4-0.8h-5.3v-2.6q3.7-0.8 6.1-2.1 2.3-1.3 4.1-3.4z"
    />
    <path
      id="Layer"
      class="s4"
      d="m403.9 194.3q-1.1 2.3 10.9 2.3 1.8 0 2.5-1.5 0.8-1.5 1.8-8.3h1.6l-0.7 15.9h-21.5v-2l6.9-12.7q5.9-10.2 7.1-12.8 1.6-3.7 2.4-7.2 0.8-3.5 0.8-6.3 0-4.7-1.7-7.4-1.6-2.7-4.5-2.7-3.3 0-5.3 2.4-2.1 2.5-2.1 5.3 0 1 0.3 1.5 0.3 0.5 1.3 0.9 2.4 0.9 2.4 4.5 0 2-0.8 3.3-0.8 1.3-2.1 1.3-1.5 0-2.6-2.2-1.1-2.2-1.1-5.7 0-3.9 1.3-7.1 1.2-3.2 3.8-5.3 2.5-2 5.5-2 2.9 0 5.4 2 2.4 2 3.7 5.2 1.2 3.3 1.2 7.1 0 2.7-0.6 5.4-0.6 2.7-1.8 5.1-2.1 4.1-4.3 7l-6.3 8.5q-2.4 3.3-3.5 5.5z"
    />
    <path
      id="Layer"
      class="s4"
      d="m437.6 254.2q3.5 1.4 5.4 4.5 2.4 3.9 2.4 9.8 0 6.6-2.9 10.6-3.3 4.6-8.7 4.6-3.2 0-5.5-1.7-2.3-1.7-3.5-4.6-1.1-2.9-1.1-6.5 0-2.9 0.9-4.6 0.9-1.7 2.2-1.7 1.2 0 2 1.3 0.7 1.3 0.7 3.5 0 1.4-0.4 2.4-0.4 1-1.3 1.9-1.1 0.8-1.1 1.6 0 1.2 0.8 2.6 0.7 1.5 2.1 2.3 1.5 0.9 3.6 0.9 3.8 0 5.6-3 1.8-3 1.8-9.5 0-6.9-1.5-9.8-1.6-2.9-4.6-2.9-0.8 0-2 0.3-1 0.3-1.5 0.3-0.7 0-1.1-0.5-0.4-0.5-0.4-1.2 0-0.8 0.4-1.3 0.4-0.4 1.2-0.4h1.3l1.2 0.1q3 0 4.6-2.5 1.5-2.5 1.5-7.7 0-6.4-1.5-9.1-1.4-2.7-4.3-2.7-2.7 0-4.3 1.6-1.6 1.5-1.6 2.8 0 0.8 0.9 2.2 1.3 2 1.3 4 0 1.6-0.7 2.7-0.7 1-1.8 1-1.2 0-2-1.4-0.7-1.5-0.7-4.1 0-4.1 1.8-7.2 2.6-4.5 7.4-4.5 4.5 0 7.2 3.9 2.7 3.9 2.7 9.6 0 4.1-1.5 7.1-1.4 3-5 5.3z"
    />
    <path
      id="Layer"
      fill-rule="evenodd"
      class="s4"
      d="m403.9 312.3h1.5v36.3h5.6v3.3h-5.6v8.2q0 1.1 0.6 1.7 0.7 0.9 1.7 0.9h2.1v2.9h-13.3v-2.9h2.4q1.3 0 1.9-0.8 0.6-0.9 0.6-2.5v-7.5h-13.6v-3.7zm-2.6 10.4l-11.5 26h11.5z"
    />
    <path
      id="Layer"
      class="s4"
      d="m330.3 373.8q6.1 2.2 9.9 2.2 1.8 0 3.4-0.6 1.6-0.5 2.4-1.3 0.4-0.3 0.5-0.3 0.3 0 0.3 0.6 0 1.3-1.1 3.5-1.1 2.2-2.9 3.5-1.9 1.3-4.3 1.3-2.8 0-6.7-1.3l-0.8 14.6q1.8-1.4 3.5-2.2 1.6-0.7 3.1-0.7 4.7 0 7.9 5 3.2 5 3.2 12.3 0 8.2-3.4 13.4-3.4 5.3-8.8 5.3-4.2 0-6.8-3.8-2.6-3.8-2.6-9 0-3.1 0.9-4.8 0.8-1.8 2.1-1.8 1.2 0 2 1.4 0.9 1.4 0.9 3.6 0 1.6-0.4 2.5-0.4 1-1.5 1.6-1.1 0.6-1.1 1.5 0 1.2 0.8 2.7 0.7 1.5 2.1 2.4 1.5 0.9 3.4 0.9 3.6 0 5.6-3.6 1.9-3.7 1.9-11.9 0-7.5-2-10.9-2.1-3.5-5.2-3.5-1.5 0-2.9 0.9-1.5 0.8-2.9 2.5-0.2 2.7-0.6 3.6-0.4 0.9-1.1 0.9-0.5 0-0.8-0.5-0.3-0.6-0.3-1.5 0-1.7 1-3.4 0.3-0.5 0.4-0.9l0.6-11.3q0.3-6.6 0.3-12.9z"
    />
    <path
      id="Layer"
      fill-rule="evenodd"
      class="s4"
      d="m249.6 419.2q1.9-4 3.9-5.7 2.1-1.8 4.6-1.8 3.9 0 6.6 4.3 2.7 4.4 2.7 11 0 7.9-3.2 13.2-3.1 5.2-7.8 5.2-3.4 0-6-2.8-2.5-2.8-4.2-8.8-1.6-6-1.6-14 0-8.6 2-15.6 2-7.1 5.1-10.6 3.2-3.5 6.6-3.5 3.5 0 5.9 3.1 2.1 2.5 2.1 6 0 2.3-0.9 3.8-0.9 1.5-2.2 1.5-1.2 0-2.1-1.3-0.8-1.2-0.8-3 0-1.1 0.5-2.6 0.6-1.3 0.6-2.1 0-1.1-0.7-1.7-0.8-0.9-2.4-0.9-2.3 0-4.2 2.3-1.9 2.4-3.3 8.1-1.3 5.7-1.3 12.8 0 1 0.1 3.1zm7.1-3.7q-3 0-4.9 3.5-1.9 3.4-1.9 9.7 0 6.9 1.9 10.5 1.8 3.6 4.7 3.6 2.8 0 4.5-3.4 1.8-3.4 1.8-10.2 0-7.3-1.6-10.5-1.6-3.2-4.5-3.2z"
    />
    <path
      id="Layer"
      class="s4"
      d="m164.9 373.8q2.4 0.9 5.1 0.9h15v1.8q-3.3 9.3-5 15.7-1.6 6.3-2.4 12.2-0.9 5.8-1.1 13.6-0.3 6.4-0.5 7.9-0.2 1.5-0.9 2.4-0.6 0.8-1.7 0.8-1.2 0-1.9-1.3-0.6-1.3-0.6-4.1 0-2.5 0.5-6.3 0.6-3.7 2.5-11.2 2.7-10 4.6-15.7l3.3-9.7h-13q-1.5 0-2.2 1.6-0.7 1.6-1.7 9.6h-1.7z"
    />
    <path
      id="Layer"
      fill-rule="evenodd"
      class="s4"
      d="m116.8 335.4q3.8 2.2 5.5 5.8 1.8 3.6 1.8 8.7 0 6.2-2.5 10.8-3.2 5.9-9.1 5.9-5.2 0-8.2-4-3.1-4-3.1-10 0-4.5 1.8-7.8 1.7-3.4 6-5.7-6.3-4.4-6.3-13.5 0-5.8 2.8-10.1 2.9-4.2 7.2-4.2 3 0 5.2 1.6 2.3 1.7 3.4 4.5 1.2 2.9 1.2 6 0 7.2-5.7 12zm-6 4.7q-3.4 2.3-4.7 5.2-1.4 2.9-1.4 7.1 0 5.4 2 8.4 2 3.1 5.8 3.1 4 0 6.2-3.1 2.2-3 2.2-7.9 0-4.5-1.9-6.8-1.9-2.3-8.2-6zm4.2-5.7q2.5-2.3 3.3-4.5 0.9-2.3 0.9-5.9 0-4.8-1.7-7.5-1.7-2.6-4.9-2.6-3.2 0-4.9 2.5-1.8 2.4-1.8 6.3 0 3.9 1.5 6.2 1.6 2.3 7.6 5.5z"
    />
    <path
      id="Layer"
      fill-rule="evenodd"
      class="s4"
      d="m84.4 255q-1.6 3.8-3.7 5.7-2.1 1.9-4.7 1.9-3.6 0-6.5-4-2.9-4.1-2.9-11.9 0-7.7 3.2-13 3.3-5.4 7.8-5.4 4.9 0 8.3 6.6 3.3 6.6 3.3 18.6 0 9.9-1.9 16.7-1.8 6.8-4.8 10.1-3.1 3.4-6.8 3.4-3.7 0-5.8-2.6-2.1-2.6-2.1-6.2 0-2.4 0.9-3.9 0.8-1.4 2.1-1.4 1.2 0 2 1.2 0.9 1.3 0.9 3.1 0 1.2-0.8 2.8-0.5 0.9-0.5 1.6 0 1.1 0.8 1.9 0.8 0.8 2.6 0.8 2.5 0 4.4-2.2 1.9-2.2 3-7.3 1.2-5 1.2-13.1zm-6.7-23.9q-2.7 0-4.4 3.6-1.8 3.6-1.8 10.8 0 6.6 1.8 9.9 1.7 3.2 4.5 3.2 2.7 0 4.6-3.5 1.9-3.5 1.9-9.8 0-6.5-1.9-10.3-2-3.9-4.7-3.9z"
    />
    <path
      id="Layer"
      fill-rule="evenodd"
      class="s4"
      d="m108.1 196.9q0 1 0.4 1.6 0.7 0.8 1.7 0.8h4.7v2.9h-17.3v-2.9h4q1.3 0 1.9-0.9 0.6-1 0.6-2.5v-36.2q0-1.2-0.6-1.9-0.5-0.8-1.4-0.8h-5.3v-2.6q3.7-0.8 6-2.1 2.4-1.3 4.1-3.4h1.2zm23.2-48.9q4.7 0 7.8 5.9 3.9 7.1 3.9 21.7 0 13.6-3.4 20.7-3.3 7.1-8.1 7.1-4.6 0-7.6-6-3.9-7.5-3.9-21.6 0-13.5 3.7-21.4 2.9-6.4 7.6-6.4zm0.2 2.8q-3.2 0-5 4.8-1.7 4.9-1.7 20.2 0 14.9 1.8 19.9 1.8 5 4.9 5 3.1 0 4.8-4.6 2-5.5 2-20 0-15.1-1.8-20.2-1.9-5.1-5-5.1z"
    />
    <path
      id="Layer"
      class="s4"
      d="m171.8 87v48q0 1 0.5 1.6 0.7 0.8 1.7 0.8h4.6v2.9h-17.3v-2.9h4q1.3 0 1.9-0.9 0.6-1 0.6-2.5v-36.2q0-1.2-0.6-1.9-0.5-0.8-1.4-0.8h-5.3v-2.6q3.7-0.8 6.1-2.1 2.3-1.3 4.1-3.4zm23.5 0v48q0 1 0.5 1.6 0.7 0.8 1.7 0.8h4.7v2.9h-17.3v-2.9h4q1.2 0 1.8-0.9 0.6-1 0.6-2.5v-36.2q0-1.2-0.5-1.9-0.6-0.8-1.5-0.8h-5.3v-2.6q3.8-0.8 6.1-2.1 2.3-1.3 4.1-3.4z"
    />
    <path
      id="Layer"
      class="s4"
      d="m246.6 67.6v47.9q0 1.1 0.5 1.6 0.7 0.8 1.7 0.8h4.6v2.9h-17.2v-2.9h3.9q1.3 0 1.9-0.9 0.6-0.9 0.6-2.5v-36.2q0-1.1-0.6-1.9-0.5-0.8-1.4-0.8h-5.3v-2.6q3.7-0.8 6.1-2.1 2.3-1.3 4.1-3.3z"
    />
    <path
      id="Layer"
      class="s4"
      d="m264.9 112.4q-1.1 2.3 10.9 2.3 1.7 0 2.5-1.5 0.8-1.5 1.8-8.3h1.6l-0.8 15.9h-21.5v-2.1l7-12.7q5.9-10.1 7-12.7 1.7-3.7 2.5-7.2 0.8-3.5 0.8-6.3 0-4.8-1.7-7.5-1.6-2.7-4.5-2.7-3.3 0-5.3 2.5-2.1 2.5-2.1 5.3 0 1 0.3 1.5 0.3 0.5 1.3 0.9 2.4 0.9 2.4 4.5 0 2-0.8 3.2-0.9 1.3-2.1 1.3-1.5 0-2.6-2.1-1.1-2.2-1.1-5.7 0-3.9 1.3-7.1 1.2-3.2 3.8-5.3 2.5-2 5.4-2 2.9 0 5.4 2 2.5 2 3.8 5.2 1.2 3.2 1.2 7.1 0 2.6-0.6 5.4-0.6 2.7-1.8 5.1-2.1 4.1-4.3 7l-6.3 8.5q-2.4 3.2-3.5 5.5z"
    />
    <g id="Hour" :transform="hourTransform">
      <path id="p1" class="s4" d="m252.5 156v100 30h7v-30-100z" />
    </g>
    <g id="HourShadow" :transform="hourShadowTransform">
      <path id="p1" class="s5" d="m251.5 157v100 30h7v-30-100z" />
    </g>
    <g id="Minute" :transform="minuteTransform">
      <path id="p2" class="s4" d="m253.5 141v115 45h5v-45-115z" />
    </g>
    <g id="MinuteShadow" :transform="minuteShadowTransform">
      <path id="p2" class="s5" d="m251.5 143v115 45h5v-45-115z" />
    </g>

    <g id="SecondShadow" :transform="secondShadowTransform">
      <path id="p3" class="s5" d="m255 274h-1v-15-130h-2v130 15h-1l-2 50h8z" />
    </g>
    <g id="Second" :transform="secondTransform">
      <path id="p3" class="s7" d="m258 271h-1v-15-130h-2v130 15h-1l-2 50h8z" />
    </g>
    <path
      id="Layer"
      class="s6"
      d="m256 263.5c-4.1 0-7.5-3.4-7.5-7.5 0-4.1 3.4-7.5 7.5-7.5 4.1 0 7.5 3.4 7.5 7.5 0 4.1-3.4 7.5-7.5 7.5z"
    />
  </svg>
</template>

<script>
export default {
  name: "TheClockSvg",
  props: {
    secondTransform: String,
    secondShadowTransform: String,
    minuteTransform: String,
    minuteShadowTransform: String,
    hourTransform: String,
    hourShadowTransform: String,
  },
};
</script>

<style scoped>
.s0 {
  fill: #dae0d6;
}
.s1 {
  fill: #ad466c;
}
.s2 {
  opacity: 0.5;
  filter: url(#cf1);
  fill: url(#cg1);
}
.s3 {
  opacity: 0.7;
  filter: url(#cf2);
  fill: url(#cg2);
}
.s4 {
  fill: #000000;
}
.s5 {
  filter: url(#cf2);
  fill: #000000;
}
.s6 {
  fill: url(#cg3);
}
.s7 {
  fill: #bc3237;
}
</style>
