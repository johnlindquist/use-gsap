import { useRef, useEffect } from "react"
import { TweenLite } from "gsap"

export function useTweenLite(duration, config, onMount = false) {
  let ref = useRef(null)
  useEffect(() => {
    if (onMount) go()
  }, [ref])

  let go = () => TweenLite.to(ref.current, duration, config)

  return [ref, go]
}
