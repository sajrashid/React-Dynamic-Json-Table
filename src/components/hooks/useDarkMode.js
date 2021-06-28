import React from "react"

const matchDark= '(prefers-color-schem:dark)'

export default function useDarkMode() {
  const [isDark,setIsDark]=React.useState(
      () =>window.matchMedia && window.matchMedia(matchDark).matches
  )
  
  
    React.useEffect(() => {
        const matcher = window.matchMedia(matchDark)
        const onChange = ({ matches }) => setIsDark(matches)
            // fallback for safari (the new ie8)
            // deprecated is most browsers
        if (matcher.addListener) {
            matcher.addListener('change');
        }else{
         // use default listner chrome/edge etc...
          matcher.addEventListener(onChange)   
        }
       
        return()=>{
            // remove listner Safari
            if (matcher.removeListener) {
                matcher.removeListener('change')
            }else{
                // remove listner other browsers
                matcher.removeEventListener(onChange)
            }
        }
    },[setIsDark])
    return isDark
}


