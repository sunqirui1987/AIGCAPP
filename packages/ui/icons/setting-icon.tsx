import * as React from "react"

function SvgComponent(props: any) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 19.184c.18 0 .354-.015.542-.03l.422.799c.09.203.294.301.528.271a.48.48 0 00.399-.43l.128-.896c.354-.09.7-.226 1.032-.369l.663.595c.158.158.377.181.595.068.188-.113.264-.316.226-.543l-.188-.873c.294-.211.58-.445.851-.701l.814.34c.218.09.422.037.587-.152a.484.484 0 00.038-.58l-.475-.76c.204-.294.377-.618.535-.957l.904.045a.48.48 0 00.49-.324c.075-.211 0-.43-.173-.565l-.7-.558c.09-.346.157-.708.187-1.084l.852-.272c.218-.075.354-.248.354-.474 0-.226-.136-.4-.354-.475l-.852-.271a7.24 7.24 0 00-.188-1.085l.7-.557a.483.483 0 00.174-.55.477.477 0 00-.49-.332l-.904.03a7.315 7.315 0 00-.535-.949l.475-.768a.475.475 0 00-.038-.565c-.165-.189-.369-.241-.587-.15l-.821.33a7.366 7.366 0 00-.844-.693l.188-.873c.038-.234-.038-.437-.233-.543-.211-.113-.43-.098-.588.068l-.663.588a7.004 7.004 0 00-1.032-.37l-.128-.88a.496.496 0 00-.4-.438c-.233-.03-.429.068-.527.256l-.422.806a6.664 6.664 0 00-1.1 0l-.421-.806c-.09-.188-.294-.286-.528-.248a.48.48 0 00-.399.43l-.128.88a7.682 7.682 0 00-1.032.37l-.656-.588c-.165-.158-.384-.18-.595-.068-.188.106-.27.31-.233.543l.188.873c-.294.204-.58.445-.844.694l-.82-.332c-.212-.09-.423-.038-.58.15a.465.465 0 00-.046.566l.482.768a8.367 8.367 0 00-.542.95l-.897-.03a.466.466 0 00-.49.33.459.459 0 00.166.55l.708.558a5.73 5.73 0 00-.188 1.085l-.851.271c-.226.075-.354.241-.354.475 0 .226.128.4.354.474l.851.272c.023.376.098.738.188 1.084l-.7.558a.483.483 0 00-.173.557.466.466 0 00.49.332l.896-.045c.158.339.339.663.542.956l-.482.769a.464.464 0 00.045.572c.158.189.37.241.58.151l.821-.339c.264.256.55.49.844.7l-.188.875c-.038.226.037.429.233.542.211.113.43.09.595-.068l.656-.595c.339.143.678.279 1.032.377l.128.889a.48.48 0 00.407.429c.226.03.43-.068.52-.264l.421-.806c.189.015.362.03.558.03zm1.966-8.045c-.369-.972-1.122-1.5-2.011-1.5-.128 0-.264.016-.497.068L9.424 6.212a6.052 6.052 0 012.569-.565c3.186 0 5.687 2.395 5.973 5.492h-4zm-7.97.602c0-2.019.926-3.789 2.395-4.896l2.05 3.503c-.4.437-.588.919-.588 1.416 0 .475.173.927.588 1.386l-2.11 3.443C6.9 15.486 5.996 13.73 5.996 11.74zm5.055.015c0-.512.43-.904.911-.904.505 0 .92.392.92.904a.921.921 0 01-.92.912.93.93 0 01-.911-.912zm.941 6.072c-.949 0-1.838-.21-2.629-.595l2.087-3.42c.226.045.377.06.505.06.896 0 1.642-.542 2.011-1.537h4c-.286 3.097-2.787 5.492-5.974 5.492z"
        fill="#fff"
        opacity={0.8}
      />
    </svg>
  )
}

export default SvgComponent
