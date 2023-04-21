import React from "react";

export default function ParkinsonIcon(
  props: React.SVGAttributes<HTMLOrSVGElement>
) {
  return (
    <svg aria-hidden="true" viewBox="0 0 512 512" {...props}>
      <path d="" stroke="none" fill="currentColor" fill-rule="evenodd" />
      <path
        d="M 59 3.086 C 50.268 4.770, 38.827 11.381, 31.853 18.773 C 21.642 29.597, 19.676 36.528, 25.313 41.825 C 30.710 46.895, 37.683 45.228, 42.922 37.614 C 48.957 28.841, 56.372 24.401, 67.268 23.033 C 73.502 22.250, 74.879 21.700, 77.250 19.046 C 80.244 15.696, 80.770 11.783, 78.805 7.472 C 76.501 2.415, 69.978 0.971, 59 3.086 M 111.734 21.030 C 102.136 23.440, 93.542 30.492, 89.424 39.336 C 88.102 42.176, 87.015 45.078, 87.010 45.785 C 87.002 46.810, 86.544 46.825, 84.750 45.861 C 83.513 45.195, 79.125 44.640, 75 44.626 C 68.854 44.606, 66.481 45.093, 61.857 47.323 C 52.562 51.805, 45.317 61.201, 43.488 71.144 L 42.817 74.788 39.159 73.778 C 34.107 72.382, 24.285 73.338, 18.816 75.757 C 12.613 78.501, 6.389 84.341, 3.172 90.437 L 0.500 95.500 0.223 164.931 C -0.016 224.976, 0.162 235.521, 1.538 242.931 C 6.381 269.005, 19.857 293.937, 39.174 312.558 L 47.968 321.036 46.636 343.570 L 45.305 366.103 31.653 379.882 C 18.422 393.234, 18 393.791, 18 397.907 C 18 403.851, 22.109 408, 27.997 408 C 31.678 408, 32.822 407.358, 38.081 402.341 C 43.761 396.923, 43.993 396.806, 43.536 399.591 C 43.274 401.191, 41.853 424.695, 40.379 451.822 C 37.926 496.959, 37.831 501.422, 39.257 504.413 C 42.353 510.906, 51.979 511.638, 56.376 505.714 C 58.301 503.120, 58.660 499.232, 61.589 449.214 C 63.319 419.671, 64.795 395.314, 64.867 395.086 C 64.940 394.858, 68.106 397.671, 71.903 401.336 C 78.218 407.433, 79.168 408, 83.068 408 C 87.164 408, 87.785 407.551, 98.907 396.542 L 110.483 385.083 122.084 396.542 C 133.202 407.522, 133.862 408, 137.920 408 C 143.904 408, 148 403.891, 148 397.887 C 148 393.708, 147.663 393.282, 131.524 377.060 C 115.080 360.532, 115.039 360.500, 110.540 360.500 C 106.127 360.500, 105.792 360.740, 94.512 371.988 L 82.991 383.477 74.543 374.988 L 66.096 366.500 67.618 340.597 C 68.455 326.351, 68.880 313.658, 68.562 312.390 C 68.244 311.123, 64.125 306.863, 59.410 302.925 C 41.477 287.946, 29.108 267.963, 22.853 243.863 C 20.759 235.794, 20.668 233.226, 20.260 170.908 C 19.958 124.749, 20.161 105.117, 20.970 102.113 C 23.600 92.343, 36.840 90.989, 41.506 100.011 C 42.748 102.413, 43 108.805, 43 137.903 C 43 175.560, 43.179 177.007, 48.145 179.575 C 52.538 181.847, 56.579 181.348, 60.234 178.083 L 63.500 175.166 64 123.235 C 64.542 66.955, 64.271 69.462, 70.128 66.434 C 73.678 64.598, 76.366 64.621, 80.033 66.517 C 86.062 69.635, 86 69.035, 86 124.050 L 86 174.200 89.400 177.600 C 93.891 182.091, 98.564 182.254, 103.234 178.083 L 106.500 175.165 107 111.601 L 107.500 48.037 110.769 44.768 C 113.583 41.956, 114.730 41.500, 119 41.500 C 123.270 41.500, 124.417 41.956, 127.231 44.769 L 130.500 48.037 131 111.269 C 131.275 146.046, 131.892 175.304, 132.371 176.287 C 133.546 178.696, 138.221 181, 141.935 181 C 143.873 181, 146.147 179.947, 148.234 178.083 L 151.500 175.166 152 123.833 C 152.367 86.172, 152.824 71.935, 153.715 70.380 C 154.384 69.215, 156.565 67.485, 158.563 66.537 C 164.967 63.498, 171.266 66.276, 173.933 73.315 C 174.653 75.215, 175 99.812, 175 149 C 175 198.054, 175.348 222.790, 176.064 224.685 C 178.491 231.109, 187.037 236.956, 194 236.956 C 199.539 236.956, 205.414 233.653, 213.513 225.988 C 223.441 216.591, 229.925 213.538, 240 213.516 C 252.366 213.490, 252.326 212.679, 240.876 231.208 C 235.338 240.169, 228.332 250.529, 225.305 254.232 C 216.955 264.448, 199.371 280.896, 179.678 296.913 C 167.510 306.809, 161.752 312.136, 161.305 313.913 C 160.432 317.382, 166.806 453.494, 168.061 458.196 C 169.876 464.992, 176.538 467.842, 182.909 464.547 C 188.594 461.607, 188.554 463.052, 184.992 389.483 L 181.725 322.004 184.612 319.759 C 208.802 300.950, 234.293 277.027, 244.256 263.784 C 253.770 251.139, 276 214.006, 276 210.759 C 276 205.885, 273.460 202.523, 267.314 199.262 C 258.122 194.385, 250.744 192.601, 240 192.659 C 225.237 192.738, 215.106 196.785, 202.797 207.522 L 196.500 213.014 196 141.757 L 195.500 70.500 193.189 64.779 C 187.311 50.228, 170.675 41.458, 156.250 45.306 C 152.599 46.280, 150.997 46.371, 150.990 45.604 C 150.965 42.788, 145.759 33.759, 141.984 29.984 C 134.429 22.429, 121.454 18.588, 111.734 21.030 M 359.500 53.835 C 357.850 54.897, 349.863 62.490, 341.750 70.708 C 327.405 85.239, 327 85.767, 327 89.902 C 327 95.708, 331.123 100, 336.701 100 C 341.235 100, 343.426 98.602, 351.563 90.521 C 354.898 87.210, 359.285 82.950, 361.312 81.055 L 364.998 77.609 376.346 88.805 C 387.273 99.586, 387.853 100, 392.012 100 C 396.180 100, 396.738 99.597, 407.907 88.542 L 419.483 77.083 431.084 88.542 C 442.270 99.590, 442.840 100, 447 100 C 451.160 100, 451.730 99.590, 462.916 88.542 L 474.517 77.083 486.093 88.542 C 497.197 99.533, 497.842 100, 501.911 100 C 507.900 100, 512 95.894, 512 89.897 C 512 85.742, 511.630 85.269, 496.349 69.879 C 487.741 61.210, 479.425 53.590, 477.868 52.946 C 473.019 50.937, 470.035 52.663, 458.249 64.291 L 446.961 75.428 435.730 64.273 C 424.489 53.107, 421.327 51.144, 416.822 52.538 C 415.545 52.933, 409.429 58.245, 403.230 64.342 L 391.961 75.428 380.685 64.184 C 368.101 51.636, 365.154 50.196, 359.500 53.835 M 382.070 118.964 C 373.933 121.982, 368.107 127.405, 364 135.787 L 360.500 142.929 357 142.214 C 340.920 138.932, 326.764 145.611, 319.792 159.769 L 316.500 166.455 316.201 238.264 L 315.902 310.073 310.201 304.957 C 295.586 291.844, 277.727 286.627, 260.219 290.355 C 251.630 292.184, 240.682 297.318, 237.942 300.801 C 233.955 305.870, 235.022 308.911, 248.480 330.848 C 255.344 342.036, 263.072 354.185, 265.653 357.845 C 272.294 367.262, 297.980 392.572, 314.500 405.978 C 322.200 412.226, 328.887 417.671, 329.360 418.079 C 329.838 418.491, 329.221 437.154, 327.975 460.015 C 325.935 497.442, 325.870 501.505, 327.272 504.445 C 330.362 510.923, 339.992 511.621, 344.397 505.686 C 346.346 503.061, 346.649 499.844, 348.939 457.515 C 350.813 422.877, 351.125 411.570, 350.259 409.669 C 349.635 408.300, 343.359 402.555, 336.313 396.901 C 311.540 377.025, 296.499 363.035, 285.714 349.839 C 283.632 347.291, 277.203 337.626, 271.428 328.361 L 260.928 311.516 264.214 310.653 C 269.107 309.367, 279.918 310.428, 285.047 312.696 C 287.529 313.795, 293.912 318.560, 299.230 323.286 C 310.831 333.595, 314.946 335.254, 323.219 332.956 C 328.014 331.624, 332.577 327.749, 335.044 322.914 C 336.933 319.211, 337 316.556, 337 245.441 C 337 164.705, 336.811 167.315, 342.920 163.706 C 346.491 161.597, 350.198 161.534, 354.033 163.517 C 360.054 166.630, 360 166.119, 360.004 220.200 C 360.007 267.709, 360.080 269.619, 362.004 272.775 C 365.745 278.910, 372.499 279.701, 377.600 274.600 L 381 271.200 381 209.501 C 381 156.437, 381.212 147.355, 382.516 144.607 C 385.376 138.581, 393.165 136.212, 398.928 139.616 C 404.705 143.029, 404.458 140.216, 405 208.728 L 405.500 271.956 408.273 274.728 C 412.205 278.659, 418.795 278.660, 422.727 274.728 L 425.500 271.957 426 219.895 L 426.500 167.834 429.766 164.917 C 434.548 160.645, 440.023 160.823, 444.600 165.400 L 448 168.800 448.004 219.150 C 448.007 267.709, 448.079 269.617, 450.004 272.775 C 453.574 278.629, 460.148 279.626, 465.234 275.083 L 468.500 272.167 469 234.605 L 469.500 197.043 472.029 194.515 C 477.240 189.307, 485.219 189.678, 489.406 195.322 C 491.465 198.098, 491.505 199.099, 491.806 255.322 C 492.217 332.263, 491.387 340.830, 481.507 361.734 C 474.074 377.458, 464.947 389.138, 449.243 403.018 C 441.772 409.620, 442.180 402.760, 445.842 460.220 C 448.339 499.410, 448.735 503.169, 450.628 505.720 C 455.028 511.647, 464.648 510.903, 467.752 504.394 C 469.191 501.375, 469.107 497.714, 466.713 459.559 L 464.106 418.010 474.304 407.755 C 493.761 388.191, 506.033 364.954, 510.530 339.165 C 511.726 332.311, 512 318.104, 512 263.047 C 512 184.566, 512.538 189.337, 502.579 179.491 C 498.400 175.360, 494.937 172.935, 491.500 171.736 C 486.103 169.851, 475.638 169.427, 471.682 170.931 C 469.384 171.805, 469.194 171.615, 468.592 167.848 C 467.061 158.278, 459.443 148.569, 450 144.154 C 444.228 141.456, 434.834 140.641, 428.449 142.286 C 425.469 143.053, 425.342 142.937, 423.002 137.291 C 416.477 121.549, 397.731 113.156, 382.070 118.964 M 236.547 149.063 C 233.273 149.567, 229.118 150.466, 227.313 151.062 C 219.912 153.504, 217.556 162.259, 222.750 168.018 C 225.972 171.590, 228.178 171.850, 239.250 169.963 C 250.872 167.981, 259.755 169.587, 272.536 175.980 C 283.340 181.384, 285.514 181.820, 290.020 179.490 C 293.622 177.627, 295 175.178, 295 170.642 C 295 165.907, 291.745 162.321, 283.358 157.816 C 269.865 150.569, 250.406 146.930, 236.547 149.063 M 229.775 361.559 C 223.540 364.942, 223.285 371.584, 229.062 380.092 C 238.522 394.022, 263.640 420.762, 272.123 425.934 C 276.704 428.726, 281.163 428.575, 284.814 425.503 C 291.287 420.056, 289.863 413.672, 280.476 406.056 C 271.565 398.826, 258.206 384.452, 249.289 372.500 C 245.186 367, 240.855 361.953, 239.664 361.285 C 236.766 359.659, 233.089 359.761, 229.775 361.559 M 175.595 490.486 C 171.386 492.741, 170.068 494.947, 170.032 499.795 C 169.962 509.272, 181.034 513.383, 187.585 506.314 C 194.776 498.555, 184.891 485.507, 175.595 490.486"
        stroke="none"
        fill="currentColor"
        fill-rule="evenodd"
      />
    </svg>
  );
}
