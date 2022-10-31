import {Box, Button, List, SlideFade, useDisclosure} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import React, {useState} from "react";
import Calculator from "./Calculator";
import Converter from "./Converter";


function Menu(props){
    const {isOpen, onToggle} = useDisclosure();
    return(
        <Box>
            <HamburgerIcon w='45px' h='45px' p='5px' borderRadius='5px' onClick={onToggle} />
            <SlideFade in={isOpen}  offsetY='-20px' unmountOnExit>
                <Box bg='gray.100' p='10px' m='4px' borderRadius='8px' w='60%x' position='absolute' zIndex='10'>
                    <List display='flex' flexDirection='column' gap='10px' fontSize='20px'>
                        <Button onClick={()=>{props.onClick('Calculator')}}>Calculator</Button>
                        <Button onClick={()=>{props.onClick('Converter')}}>Converter</Button>
                    </List>
                </Box>
            </SlideFade>
        </Box>
    )
}

function ClickCon(){
    const [mode,setMode] = useState('Calculator');
    let application;
    switch (mode){
        case 'Calculator': application = <Calculator />;
            break;
        case 'Converter': application = <Converter />;
            break;
        default:
            application = <Calculator/>;
    }
return(
    <Box h='90vh'>
        <Menu onClick={setMode} />
        {application}
    </Box>
)
}
export default ClickCon;