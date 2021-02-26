import React from 'react'
import {
    Box, Flex, Heading, Spacer, Text,
    Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon
} from '@chakra-ui/react'
import FAQ_LIST from './faq.json'
export const Faq = ({ index, setIndex }) => {
    return (
        <div>
            <Flex direction='column' p='4' overflow='auto' >
                <Box mb='8'>
                    <Heading size='md'>Frequently asked Questions</Heading>
                </Box>
                <Accordion allowToggle index={index}>
                    {
                        FAQ_LIST.map(faq => (
                            <AccordionItem key={faq.id} name={`accordion-item-${faq.id}`}>
                                <AccordionButton onClick={() => setIndex(faq.id - 1)}>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontWeight='semibold'>
                                            {faq.question}
                                        </Text>

                                    </Box>
                                </AccordionButton>
                                <AccordionPanel pb='4'>
                                    {faq.answer}
                                </AccordionPanel>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </Flex>
        </div>
    )
}
