'use client'
import { Card, CardBody, CardHeader, Flex, Icon, Text } from "@chakra-ui/react"
import TimelineRow from "@/components/TimelineRow"
import { MdSettings } from 'react-icons/md'
import { AddIcon } from "@chakra-ui/icons"

const timelineData = [
    {
      logo:  <AddIcon
                h={'30px'}
                w={'26px'}
                pe='7px'
                zIndex='1'
                position='relative'
                right={document.documentElement.dir === 'rtl' ? '-8px' : ''}
                left={document.documentElement.dir === 'rtl' ? '' : '-8px'}/>,
        title: "$2400, Design changes",
        date: "22 DEC 7:20 PM",
        color: "brand.300",
    },
    {
        logo:  <AddIcon
        h={'30px'}
        w={'26px'}
        pe='7px'
        zIndex='1'
        position='relative'
        right={document.documentElement.dir === 'rtl' ? '-8px' : ''}
        left={document.documentElement.dir === 'rtl' ? '' : '-8px'}/>,
      title: "New order #4219423",
      date: "21 DEC 11:21 PM",
      color: "blue.300",
    },
    {
        logo:  <AddIcon
        h={'30px'}
        w={'26px'}
        pe='7px'
        zIndex='1'
        position='relative'
        right={document.documentElement.dir === 'rtl' ? '-8px' : ''}
        left={document.documentElement.dir === 'rtl' ? '' : '-8px'}/>,
      title: "Server Payments for April",
      date: "21 DEC 9:28 PM",
      color: "orange.300",
    },
    {
        logo:  <AddIcon
        h={'30px'}
        w={'26px'}
        pe='7px'
        zIndex='1'
        position='relative'
        right={document.documentElement.dir === 'rtl' ? '-8px' : ''}
        left={document.documentElement.dir === 'rtl' ? '' : '-8px'}/>,
      title: "New card added for order #3210145",
      date: "20 DEC 3:52 PM",
      color: "red.300",
    },
]
  
export default function TimelineExample() {
    const textColor = "gray.700"
    const bgIconColor = "white.300"
    const bg = "gray.50"

    return (
        <Card p="1rem" maxHeight="100%">
        <CardHeader pt="0px" p="28px 0px 35px 21px">
            <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
                Orders overview
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
                <Text fontWeight="bold" as="span" color="brand.300">
                +30%
                </Text>{" "}
                this month.
            </Text>
            </Flex>
        </CardHeader>
        <CardBody ps="26px" pe="0px" mb="31px" position="relative">
            <Flex direction="column">
            {timelineData.map((row, index, arr) => {
                return (
                <TimelineRow
                    logo={row.logo}
                    title={row.title}
                    date={row.date}
                    color={row.color}
                    index={index}
                    arrLength={arr.length}
                    key={row.title}
                />
                )
            })}
            </Flex>
        </CardBody>
        </Card>
    )
}
