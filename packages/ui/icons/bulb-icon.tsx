import * as React from "react"

function SvgComponent(props: any) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.445 14.955h5.11a.439.439 0 00.463-.463v-1.057c0-1.67 2.451-2.72 2.451-5.773 0-3.232-2.203-5.4-5.469-5.4-3.273 0-5.47 2.168-5.47 5.4 0 3.053 2.452 4.102 2.452 5.773v1.057c0 .276.187.463.463.463zm.739-1.54c0-2.1-2.43-3.15-2.43-5.753 0-2.513 1.698-4.178 4.246-4.178 2.548 0 4.247 1.665 4.247 4.178 0 2.604-2.438 3.653-2.438 5.753v.338H9.184v-.338zm-.539 3.46h4.71a.684.684 0 000-1.367h-4.71a.684.684 0 000 1.367zM11 18.614c1.008 0 1.733-.47 1.803-1.181H9.19c.069.711.787 1.18 1.81 1.18z"
        fill="#fff"
        opacity={0.6}
      />
    </svg>
  )
}

export default SvgComponent
