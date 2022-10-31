import { Text, Input, Flex} from "@chakra-ui/react";
import React, {useState, useEffect} from "react";

function InputCalc (props){

    useEffect(()=>{
        document.querySelector("input").focus();
    })

    const [result, setResult] = useState('');
    const [counts,setCounts] = useState('');

    function updateCounts(e){
        const expressions = /\+|\-|\/|\*|=|\$|[A-z]/;
        const lastNumber = e.target.value[e.target.value.length-2];
        if (expressions.test(lastNumber) && expressions.test(e.nativeEvent.data) && e.nativeEvent.data != null) return
        if (!expressions.test(e.nativeEvent.data)) setResult(eval(e.target.value))
        setCounts(e.target.value)
    }

    function sendDataToHistory(e){
        if (e.nativeEvent.key === 'Enter'){
            props.onKeyDown(counts)
            setCounts('')
        }
    }

    return(
        <Flex w='100%' justifyContent='center' alignItems='start'>
            <Flex justifyContent='center' alignItems='center' border='2px' borderRadius='8px' borderColor='gray.50'>
                <Input type='text' value={counts} border='transparent' onKeyDown={(e)=>{sendDataToHistory(e)}} onChange={(e)=>{updateCounts(e)}} />
                <Text textColor='tomato' px='8px'>{result}</Text>
            </Flex>
        </Flex>
    )
}

export default InputCalc;