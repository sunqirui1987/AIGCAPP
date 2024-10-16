import * as React from "react"

function SvgComponent(props: any) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.237 11.863h3.034l1.367 1.65c1.453 1.751 3.176 2.288 5.086 1.593 2.327-.848 3.282-2.921 2.361-5.458l-.452-1.243c-.412-1.136-1.18-1.667-2.09-1.475V4.32c0-1.17-.605-1.769-1.791-1.769H5.237c-1.18 0-1.785.594-1.785 1.769v5.774c0 1.176.604 1.769 1.785 1.769zm.068-.972c-.57 0-.876-.316-.876-.893V4.416c0-.576.305-.887.876-.887h7.379c.565 0 .881.31.881.887V6.63c-.135 0-.277.022-.423.073a1.612 1.612 0 00-.407.232 1.048 1.048 0 00-1.22-.334c-.102.034-.204.09-.3.159l-.576-1.594c-.26-.712-.904-1.017-1.577-.774-.678.249-.983.899-.723 1.61l1.514 4.17c.011.029.006.051-.022.063-.017.005-.034 0-.051-.018l-.56-.604c-.327-.322-.723-.412-1.101-.277-.565.204-.904.74-.678 1.356.022.062.05.13.084.198h-2.22zm9.13 3.328c-1.48.537-2.836.243-4.113-1.277l-1.898-2.243a.578.578 0 01-.119-.198.315.315 0 01.203-.412c.153-.057.283 0 .407.13l1.328 1.333c.22.226.424.249.627.175.238-.085.356-.339.255-.616L9.14 5.653c-.073-.203.012-.39.204-.463.197-.068.378.023.452.22l1.4 3.848c.074.203.312.305.515.226a.388.388 0 00.237-.503l-.497-1.362a.804.804 0 01.266-.163c.231-.085.435.017.52.26l.452 1.231c.079.215.31.305.508.232a.39.39 0 00.237-.503l-.344-.955a.727.727 0 01.26-.164c.231-.084.435.017.52.26l.299.82c.079.22.316.305.52.231a.388.388 0 00.237-.503l-.198-.536c.43-.153.82.18 1.09.926l.408 1.102c.757 2.09.067 3.684-1.792 4.362z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgComponent
