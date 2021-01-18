
import React, { useRef, useEffect, useState } from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { NavBar } from './NavBar'
import { Faq } from './Faq'
import alanBtn from "@alan-ai/alan-sdk-web";
import { scroller } from 'react-scroll'
export const App = () => {
  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null)
  const [toogleColorMode, setToogleColorMode] = useState(false)
  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: '4f9f4166151bceb67bd5fc0021f05d4e2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'gotoFaq') {
            // Call the client code that will react to the received command
            scroller.scrollTo(`accordion-item-${commandData.faqId}`, {
              duration: 800,
              delay: 0,
              smooh: 'easeInOutQuart'
            })
            setIndex(commandData.faqId - 1)
          } else if (commandData.command === 'toggleColorMode') {
            setToogleColorMode(flag => !flag)
          }
        }
      });
    }
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <NavBar toogleColorFlag={toogleColorMode} />
      <Faq index={index} setIndex={setIndex} />
    </ChakraProvider>
  )
}
