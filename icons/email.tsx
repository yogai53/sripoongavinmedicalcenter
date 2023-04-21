import React from "react";

export default function EmailIcon(
  props: React.SVGAttributes<HTMLOrSVGElement>
) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" {...props}>
      <path d="" stroke="none" fill="currentColor" fill-rule="evenodd" />
      <path
        d="M 247.540 2.538 C 245.483 3.933, 235.418 12.146, 225.174 20.788 L 206.547 36.500 231.274 36.767 C 244.873 36.915, 267.127 36.915, 280.726 36.767 L 305.453 36.500 286.826 20.788 C 276.582 12.146, 266.517 3.933, 264.460 2.538 C 259.334 -0.941, 252.666 -0.941, 247.540 2.538 M 103.241 68.995 C 101.448 70.088, 99.088 72.448, 97.995 74.241 C 96.050 77.430, 96.007 79.461, 96.004 169.114 L 96 260.728 148.250 301.363 L 200.500 341.997 256 341.997 L 311.500 341.997 363.750 301.363 L 416 260.728 415.996 169.114 C 415.993 79.461, 415.950 77.430, 414.005 74.241 C 412.912 72.448, 410.552 70.088, 408.759 68.995 C 405.545 67.035, 403.417 67.007, 256 67.007 C 108.583 67.007, 106.455 67.035, 103.241 68.995 M 244.512 103.107 C 220.997 105.582, 196.729 117.312, 179.520 134.520 C 170.178 143.863, 163.615 153.317, 157.497 166.250 C 139.061 205.220, 145.813 251.868, 174.645 284.708 C 191.721 304.158, 219.136 318.204, 245.231 320.872 C 256.978 322.073, 259.432 321.568, 263.988 317.012 C 274.062 306.938, 266.363 292, 251.097 292 C 248.916 292, 243.918 291.324, 239.992 290.498 C 210.349 284.263, 186.208 260.733, 178.436 230.500 C 175.853 220.451, 176.026 202.061, 178.800 191.825 C 184.562 170.564, 199.706 151.309, 218.519 141.326 C 230.331 135.057, 239.199 132.754, 253.543 132.230 C 269.439 131.649, 278.728 133.605, 292.500 140.435 C 309.010 148.622, 320.538 160.190, 328.633 176.692 C 337.976 195.739, 337.928 215.028, 328.484 235.670 C 324.740 243.854, 319.632 248.380, 312.843 249.526 C 309.275 250.129, 308.431 249.885, 306.131 247.579 L 303.500 244.942 303.842 200.221 L 304.185 155.500 301.817 151.105 C 296.864 141.910, 286.459 140.397, 278.750 147.751 C 277.238 149.194, 275.993 150.852, 275.985 151.437 C 275.939 154.602, 274.392 154.784, 267.497 152.435 C 250.412 146.615, 231.478 151.073, 217.418 164.225 C 209.774 171.376, 205.128 178.696, 201.371 189.510 C 198.899 196.624, 198.591 198.926, 198.560 210.500 C 198.520 225.359, 199.983 232.251, 205.586 243.602 C 212.356 257.317, 224.597 267.997, 238.323 272.167 C 243.909 273.863, 246.921 274.168, 254.080 273.760 C 261.648 273.328, 263.986 272.733, 270.215 269.651 C 274.222 267.669, 278.213 265.524, 279.084 264.884 C 280.392 263.922, 281.487 264.539, 285.387 268.440 C 300.884 283.937, 326.412 282.045, 344 264.096 C 351.455 256.488, 354.545 251.164, 358.854 238.500 C 368.052 211.469, 366.708 188.123, 354.536 163.500 C 348.142 150.565, 341.780 141.865, 331.900 132.545 C 314.238 115.883, 292.257 105.808, 267.500 103.027 C 257.475 101.901, 255.914 101.907, 244.512 103.107 M 40.724 176.070 C 27.098 187.548, 15.906 197.248, 15.853 197.626 C 15.801 198.003, 26.950 207.015, 40.629 217.651 L 65.500 236.990 65.770 216.495 C 65.919 205.223, 65.919 186.820, 65.770 175.601 L 65.500 155.201 40.724 176.070 M 446 195.948 C 446 228.832, 446.255 237.049, 447.250 236.283 C 478.995 211.867, 496.899 197.524, 496.283 197 C 495.852 196.634, 485.375 187.864, 473 177.510 C 460.625 167.157, 449.488 157.778, 448.250 156.668 L 446 154.651 446 195.948 M 245.137 180.369 C 239.340 182.467, 233.962 187.861, 230.632 194.916 C 227.868 200.773, 227.527 202.493, 227.540 210.500 C 227.557 220.954, 228.699 225.452, 233.222 232.888 C 244.741 251.823, 265.019 247.551, 272.115 224.695 C 274.954 215.553, 274.498 200.969, 271.140 193.500 C 265.823 181.671, 255.686 176.552, 245.137 180.369 M 1 357 L 1 490.121 10.440 482.810 C 91.613 419.947, 171.886 357.392, 171.886 357 C 171.886 356.608, 91.613 294.053, 10.440 231.190 L 1 223.879 1 357 M 425.308 290.363 C 378.452 326.738, 340.116 356.725, 340.116 357 C 340.116 357.275, 378.452 387.262, 425.308 423.637 L 510.500 489.775 510.757 423.387 C 510.898 386.874, 510.898 327.126, 510.757 290.613 L 510.500 224.225 425.308 290.363 M 110.814 441.752 L 21.128 511.500 138.564 511.754 C 203.154 511.894, 308.846 511.894, 373.436 511.754 L 490.872 511.500 401.186 441.752 L 311.500 372.003 256 372.003 L 200.500 372.003 110.814 441.752"
        stroke="none"
        fill="currentColor"
        fill-rule="evenodd"
      />
    </svg>
  );
}
