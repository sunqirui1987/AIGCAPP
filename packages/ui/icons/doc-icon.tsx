import * as React from "react"

function SvgComponent(props: any) {
  return (
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.962 20.37h9.801c.4 0 .708-.309.708-.708 0-.34-.233-.588-.52-.723-.926-.415-1.107-1.695-.165-2.592.384-.339.678-.716.678-1.477V6.531c0-1.627-.836-2.479-2.456-2.479h-8.03c-1.613 0-2.457.844-2.457 2.479v11.383c0 1.612.844 2.456 2.441 2.456zm7.91-14.818c.731 0 1.093.384 1.093 1.077v8.008c0 .37-.211.572-.588.572H8.979V5.553h6.893zM7.02 15.473V6.63c0-.625.294-.995.89-1.062v9.65c-.34.03-.633.12-.89.256zm3.308-6.471h5.266a.537.537 0 00.534-.535.537.537 0 00-.534-.535h-5.266a.537.537 0 00-.535.535c0 .294.24.535.535.535zm0 2.102h3.992a.537.537 0 00.535-.535.537.537 0 00-.535-.535h-3.992a.537.537 0 00-.535.535c0 .294.24.535.535.535zm-2.163 7.85c-.806 0-1.227-.46-1.227-1.168 0-.686.482-1.16 1.28-1.16h7.519c.082 0 .165-.008.24-.023-.376.799-.33 1.665.076 2.35H8.165z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgComponent