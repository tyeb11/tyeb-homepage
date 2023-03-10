import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { wrap } from "popmotion";
import { Link, Box, useColorModeValue, Flex, Heading, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";



const cardDetails = [
    { title: 'E-Store', tectStack: 'MERN | MUI | Razorpay', about: 'App to connect customers to products or services for trading online.Integrated with Razorpay for smooth online transactions.', img: '', link: 'https://github.com/tyeb11/E-Store' },
    { title: 'V-Chat', tectStack: 'MERN | MUI | Socket.io', about: 'Real time instant messaging app that lets users text with individual or groups.', img: '', link: 'https://github.com/tyeb11/V-Chat' },
    { title: 'tyeb-homepage', tectStack: 'Next | Chakra | Framer', about: 'Get the source code for the current page.', img: '', link: 'https://github.com/tyeb11/tyeb-homepage' },
    { title: 'Switch Runner ', tectStack: 'Pygame', about: 'Endless runner where character is restricted to jump so he manages to alter gravity.', img: '', link: 'https://github.com/tyeb11/SwitchRunner' },
    { title: 'javascript Algorithms ', tectStack: 'JS', about: 'get the source code for every DSA in JavaScript', img: '', link: 'https://github.com/tyeb11/javascript-algorithms' },
    { title: 'League of Legends Wiki', tectStack: 'React', about: 'App that let you know about all the League of Legends Champions backstory.', img: '', link: 'https://github.com/tyeb11/wiki-lol-champs' }
]


function LinkItem({ href, children, ...props }) {


    return (
        <Link
            display="inline-block"
            p={3}

            color={useColorModeValue("#3d7aed", "#ff63c3")}
            target="_blank"
            href={href}
            {...props}
            fontSize={18}
            fontWeight="bold"


            textAlign="center"
        >
            {children}
        </Link>
    );
}


const Projects = () => {

    const [page, setPage] = useState(0);
    const control = useAnimation()
    const cardIndex = wrap(0, cardDetails.length, page);
    const paginate = (newDirection) => {
        setPage(page + newDirection);
    };

    function leftIcon() {
        paginate(-1)
        console.log('hola')


        control.start({
            //scale: [1.2, 0, 0, 1],
            //fontSize: [1, 0, 0, 1],
            x: [1000, 0],
            transition: { duration: .5, ease: "easeInOut", }
        })
    }
    function rightIcon() {
        paginate(1)
        control.start({
            //scale: [1.2, 0, 0, 1],
            //fontSize: [1, 0, 0, 1],
            x: [-1000, 0],
            transition: { duration: .5, ease: "easeInOut", }
        })
    }

    return (
        <>


            <Flex mt={-20} gap={4} h='sm' justify="space-between" align="center">
                <IconButton bg="transparent" icon={<ArrowLeftIcon />} onClick={() => leftIcon()} />

                <AnimatePresence>

                    <motion.div
                        style={{ width: '70%', height: '70%', background: 'transparent', color: 'white' }}
                        animate={control}
                        // initial={{ scale: 1, borderRadius: "5%", fontSize: 1 }}
                        initial={{ x: 0, borderRadius: "5%", fontSize: 1 }}


                    >
                        <Flex gap={10} p={7} flexDirection="column" justify="space-between" align="center">

                            <Heading textAlign="center" color={useColorModeValue("#202023", "whiteAlpha.900")} as="h3" fontSize={30}>

                                {cardDetails[cardIndex].title}
                                <Heading mt={2} as="p" fontSize={12} color={useColorModeValue("#202023", "whiteAlpha.900")}>( {cardDetails[cardIndex].tectStack} )</Heading>
                            </Heading>
                            <Box borderRadius={5} w="100%" mt={-7} mr="auto" h={1} bg={useColorModeValue("#202023", "whiteAlpha.900")}></Box>
                            <Heading textAlign="center" mt={-2} as="p" fontSize={12} color={useColorModeValue("#202023", "whiteAlpha.900")}>{cardDetails[cardIndex].about}</Heading>
                            <LinkItem mt={-5} href={cardDetails[cardIndex].link}>/projects/{cardDetails[cardIndex].title.toLowerCase()}</LinkItem>
                        </Flex>
                    </motion.div>
                </AnimatePresence>

                <IconButton bg="transparent" icon={<ArrowRightIcon />} onClick={() => rightIcon()} />


            </Flex>

        </>
    );
};




export default Projects