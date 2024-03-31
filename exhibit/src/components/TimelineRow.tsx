'use client'
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';

//@ts-ignore
const TimelineRow = (props) => {
	const { logo, title, date, color, index, arrLength } = props;
	const textColor = 'gray.700'
	const bgIconColor = 'white.300'

	return (
		<Flex alignItems='center' h="100%" justifyContent='start' mb='5px'>
			<Flex direction='column' h='50px' alignItems={"center"}>
                {logo}
				<Box w='2px' bg='gray.200' h={'25px'} mr={6}/>
			</Flex>
			<Flex direction='column' justifyContent='flex-start' h='100%'>
				<Text fontSize='sm' color={textColor} fontWeight='bold'>
					{title}
				</Text>
				<Text fontSize='sm' color='gray.400' fontWeight='normal'>
					{date}
				</Text>
			</Flex>
		</Flex>
	);
}

export default TimelineRow
