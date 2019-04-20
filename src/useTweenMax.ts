import { useRef, useEffect } from "react"
import { TweenMax } from "gsap"

export function useTweenMax(duration, config, onMount = false) {
  let ref = useRef(null)
  useEffect(() => {
    if (onMount) go()
  }, [ref])

  let go = () => TweenMax.to(ref.current, duration, config)

  return [ref, go]
}
