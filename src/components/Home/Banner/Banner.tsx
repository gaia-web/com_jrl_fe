import { useState } from 'preact/hooks';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'JRL SHUTTLE SERVICES',
      text: "Serving Saskatoon & Area.",
      image:
        'https://images.unsplash.com/photo-1484949909760-d37c642ad869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    },
    {
      title: 'Coming Soon',
      text: "Prince Albert & Yorkton",
      image:
        'https://images.unsplash.com/photo-1569364858589-ad30c1f329f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    },
    {
      title: '',
      text: "Under services we do Speial needs transportation <br/> and Mdeical Mobility, Medical /couriers Services is <br/>  under in progress!",
      image:
        'https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3018&q=80',
    },
  ]

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="bottom"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            color="white"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}

            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} whiteSpace="nowrap" textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)">
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'xl', lg: '3xl' }} whiteSpace="nowrap" color="white" textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)" >
                  {renderText(card.text)}
                </Text>
              </Stack>
            </Container>
            <Box position="absolute" top="0" left="0" w="100%" h="100%" bg="rgba(0, 0, 0, 0.1)" zIndex="1" />
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

const renderText = (text: string) => {
  const lines = text.split('<br/>');
  return lines.map((line, index) => (
    <span key={index}>
      {line}
      {index !== lines.length - 1 && <br />}
    </span>
  ));
};
