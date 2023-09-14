'use client'

import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react'

interface Props {
    children: preact.ComponentChildren
}

const Testimonial = (props: Props) => {
    const { children } = props

    return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
    const { children } = props

    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    )
}

const TestimonialHeading = (props: Props) => {
    const { children } = props

    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    )
}

const TestimonialText = (props: Props) => {
    const { children } = props

    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    )
}

const TestimonialAvatar = ({
    src,
    name,
    title,
}: {
    src: string
    name: string
    title: string
}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    )
}

export default function WithSpeechBubbles() {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.700')} mt="5rem">
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading>JRL SHUTTLE SERVICES</Heading>
                    <Text>Driven by excellence, we ensure a smooth and stellar journey every time.</Text>
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Unsurpassed Trustworthiness</TestimonialHeading>
                            <TestimonialText>
                                JRL Shuttle Services has been a game-changer for my travels. Their punctuality and professionalism are commendable. Every ride feels like a premium experience. Kudos to the team!
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://images.unsplash.com/photo-1506864668770-c8571d1a8303?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fG1hbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                            }
                            name={'Alex'}
                            title={'Saskatoon'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Comfort Beyond Words</TestimonialHeading>
                            <TestimonialText>
                                I've traveled with many shuttle services, but JRL stands out. The comfort and attention to detail they provide are unparalleled. It's not just a ride; it's an experience.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://images.unsplash.com/photo-1598961475055-e6505008c822?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fCVFNSVBNCVCNCVFNSU4MyU4RnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                            }
                            name={'Mia'}
                            title={'Saskatoon'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Consistently Excellent</TestimonialHeading>
                            <TestimonialText>
                                I've been using JRL Shuttle Services for over a year now, and they never disappoint. The drivers are courteous, the vehicles are top-notch, and the service is consistently excellent. Highly recommended!
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                            }
                            name={'Daniel'}
                            title={'Saskatoon'}
                        />
                    </Testimonial>
                </Stack>
            </Container>
        </Box>
    )
}