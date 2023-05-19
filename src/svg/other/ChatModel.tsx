/**
 * Created by Leon<silenceace@gmail.com> at 2023-03-30.
 */

import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'
const SvgComponent = (props: SvgProps) => {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      {...props}>
      <Path
        d="M26.2333 4C26.334 4 26.4337 4.01983 26.5267 4.05836C26.6197 4.09689 26.7043 4.15336 26.7754 4.22455C26.8466 4.29574 26.9031 4.38026 26.9416 4.47328C26.9802 4.56629 27 4.66599 27 4.76667V26.2333C27 26.334 26.9802 26.4337 26.9416 26.5267C26.9031 26.6197 26.8466 26.7043 26.7754 26.7754C26.7043 26.8466 26.6197 26.9031 26.5267 26.9416C26.4337 26.9802 26.334 27 26.2333 27H4.76667C4.66599 27 4.56629 26.9802 4.47328 26.9416C4.38026 26.9031 4.29574 26.8466 4.22455 26.7754C4.15336 26.7043 4.09689 26.6197 4.05836 26.5267C4.01983 26.4337 4 26.334 4 26.2333V4.76667C4 4.56333 4.08077 4.36833 4.22455 4.22455C4.36833 4.08077 4.56333 4 4.76667 4H26.2333ZM25.4667 5.53333H5.53333V25.4667H25.4667V5.53333ZM9.36667 19.3333C9.97666 19.3333 10.5617 19.5757 10.993 20.007C11.4243 20.4383 11.6667 21.0233 11.6667 21.6333C11.6667 22.2433 11.4243 22.8283 10.993 23.2597C10.5617 23.691 9.97666 23.9333 9.36667 23.9333C8.75667 23.9333 8.17165 23.691 7.74032 23.2597C7.30899 22.8283 7.06667 22.2433 7.06667 21.6333C7.06667 21.0233 7.30899 20.4383 7.74032 20.007C8.17165 19.5757 8.75667 19.3333 9.36667 19.3333ZM12.4333 7.06667C12.534 7.06667 12.6337 7.0865 12.7267 7.12503C12.8197 7.16355 12.9043 7.22003 12.9754 7.29122C13.0466 7.36241 13.1031 7.44693 13.1416 7.53994C13.1802 7.63296 13.2 7.73265 13.2 7.83333V12.1159L18.8841 17.8H23.1667C23.37 17.8 23.565 17.8808 23.7088 18.0245C23.8526 18.1683 23.9333 18.3633 23.9333 18.5667V23.1667C23.9333 23.37 23.8526 23.565 23.7088 23.7088C23.565 23.8526 23.37 23.9333 23.1667 23.9333H18.5667C18.3633 23.9333 18.1683 23.8526 18.0245 23.7088C17.8808 23.565 17.8 23.37 17.8 23.1667V18.8841L12.1159 13.2H7.83333C7.73265 13.2 7.63296 13.1802 7.53994 13.1416C7.44693 13.1031 7.36241 13.0466 7.29122 12.9754C7.22003 12.9043 7.16355 12.8197 7.12503 12.7267C7.0865 12.6337 7.06667 12.534 7.06667 12.4333V7.83333C7.06667 7.63 7.14744 7.435 7.29122 7.29122C7.435 7.14744 7.63 7.06667 7.83333 7.06667H12.4333ZM9.36667 20.8667C9.16333 20.8667 8.96833 20.9474 8.82455 21.0912C8.68077 21.235 8.6 21.43 8.6 21.6333C8.6 21.8367 8.68077 22.0317 8.82455 22.1754C8.96833 22.3192 9.16333 22.4 9.36667 22.4C9.57 22.4 9.765 22.3192 9.90878 22.1754C10.0526 22.0317 10.1333 21.8367 10.1333 21.6333C10.1333 21.43 10.0526 21.235 9.90878 21.0912C9.765 20.9474 9.57 20.8667 9.36667 20.8667ZM22.4 19.3333H19.3333V22.4H22.4V19.3333ZM21.6333 7.06667C22.2433 7.06667 22.8283 7.30899 23.2597 7.74032C23.691 8.17165 23.9333 8.75667 23.9333 9.36667C23.9333 9.97666 23.691 10.5617 23.2597 10.993C22.8283 11.4243 22.2433 11.6667 21.6333 11.6667C21.0233 11.6667 20.4383 11.4243 20.007 10.993C19.5757 10.5617 19.3333 9.97666 19.3333 9.36667C19.3333 8.75667 19.5757 8.17165 20.007 7.74032C20.4383 7.30899 21.0233 7.06667 21.6333 7.06667ZM11.6667 8.6H8.6V11.6667H11.6651L11.6667 11.6651V8.6ZM21.6333 8.6C21.43 8.6 21.235 8.68077 21.0912 8.82455C20.9474 8.96833 20.8667 9.16333 20.8667 9.36667C20.8667 9.57 20.9474 9.765 21.0912 9.90878C21.235 10.0526 21.43 10.1333 21.6333 10.1333C21.8367 10.1333 22.0317 10.0526 22.1754 9.90878C22.3192 9.765 22.4 9.57 22.4 9.36667C22.4 9.16333 22.3192 8.96833 22.1754 8.82455C22.0317 8.68077 21.8367 8.6 21.6333 8.6Z"
        fill={props.color}
      />
    </Svg>
  )
}
const SvgIcon = React.memo(SvgComponent)
export default SvgIcon