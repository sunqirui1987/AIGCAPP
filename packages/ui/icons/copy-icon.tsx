import * as React from "react"

function SvgComponent(props: any) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.113 14.106c0 1.226.632 1.859 1.842 1.859h5.288c1.21 0 1.842-.639 1.842-1.86V13.06h.96c1.21 0 1.842-.638 1.842-1.858v-4.47c0-.745-.158-1.22-.604-1.678l-2.814-2.87c-.43-.435-.938-.605-1.588-.605H7.757c-1.21 0-1.842.639-1.842 1.865v1.04h-.96c-1.21 0-1.842.644-1.842 1.864v7.758zm8.401-5.944L8.452 5.054c-.43-.435-.797-.553-1.413-.565v-.977c0-.514.272-.803.814-.803h2.356v2.684c0 .7.373 1.068 1.068 1.068h2.48v4.667c0 .52-.27.808-.813.808h-.859v-2.17c0-.762-.096-1.118-.57-1.604zm-.373-2.91V3.167l2.323 2.362h-2.046c-.197 0-.277-.08-.277-.277zm-6.904 8.78v-7.61c0-.52.271-.808.82-.808H6.78v3.073c0 .82.4 1.215 1.214 1.215h2.967v4.13c0 .52-.272.808-.82.808h-5.09c-.543 0-.814-.288-.814-.808zm3.865-5.119c-.232 0-.334-.096-.334-.333V5.828l3.04 3.085H8.102z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgComponent