import * as React from "react"
import { storiesOf } from "@storybook/react"
import { useTweenMax, useTweenLite } from "../index"

const TweenMax = () => {
  let [tweenRef] = useTweenMax(5, { x: 100, rotationZ: 360 }, true)
  return (
    <div>
      <button ref={tweenRef}>Click me</button>
    </div>
  )
}

const TweenLite = () => {
  let [tweenRef] = useTweenLite(5, { x: 100, rotationZ: 360 }, true)
  return (
    <div>
      <button ref={tweenRef}>Click me</button>
    </div>
  )
}

storiesOf("use-gsap", module)
  .add("TweenMax", () => <TweenMax />)
  .add("TweenLite", () => <TweenLite />)
