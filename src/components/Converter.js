import React, {useRef} from "react";
import {Button, Flex, Input, Select, Text} from "@chakra-ui/react";
import {useState} from "react";




function Converter(){
    const [input, setInput] = useState(0);
    const [result, setResult] = useState(0);
    const first = useRef();
    const second = useRef();
    function convert(){
        if (first.current.value === 'Meter'){
            switch (second.current.value){
                case 'Millimeter': setResult(input*1000);
                    break;
                case 'Centimeter': setResult(input*100);
                    break;
                case 'Meter': setResult(input);
                    break;
                case 'KiloMeter': setResult(input/1000);
                    break;
            }
        }
        if (first.current.value === 'Centimeter'){
            switch (second.current.value){
                case 'Millimeter': setResult(input*10);
                    break;
                case 'Centimeter': setResult(input);
                    break;
                case 'Meter': setResult(input/100);
                    break;
                case 'KiloMeter': setResult(input/100000);
                    break;
            }
        }
        if (first.current.value === 'KiloMeter'){
            switch (second.current.value){
                case 'Millimeter': setResult(input*1000000);
                    break;
                case 'Centimeter': setResult(input*100000);
                    break;
                case 'Meter': setResult(input*1000);
                    break;
                case 'KiloMeter': setResult(input);
                    break;
            }
        }
        if (first.current.value === 'Millimeter'){
            switch (second.current.value){
                case 'Millimeter': setResult(input);
                    break;
                case 'Centimeter': setResult(input/10);
                    break;
                case 'Meter': setResult(input/1000);
                    break;
                case 'KiloMeter': setResult(input/1000000);
                    break;
            }
        }
    }
    return(
        <Flex justifyContent='center' alignItems='center' flexDirection='column' gap='10px' w='100%'>
            <Text>{result}</Text>
            <Input onChange={(e)=>{setInput(e.target.value)}} w='50%' type='number'/>
            <Flex gap='15px'>
                <Select ref={first} size='md' w='100%'>
                    <option value='Millimeter'>Millimeter</option>
                    <option value='Centimeter'>Centimeter</option>
                    <option value='Meter'>Meter</option>
                    <option value='KiloMeter'>KiloMeter</option>
                </Select>
            </Flex>

            <Flex>
                <Select ref={second} size='md' w='100%'>
                    <option value='Millimeter'>Millimeter</option>
                    <option value='Centimeter'>Centimeter</option>
                    <option value='Meter'>Meter</option>
                    <option value='KiloMeter'>KiloMeter</option>
                </Select>
            </Flex>
            <Button onClick={()=>{convert()}}>Convert</Button>
        </Flex>
    )
}

export default Converter;