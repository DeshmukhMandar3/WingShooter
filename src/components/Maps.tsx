import React, { useState } from "react";
// import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Image } from "@chakra-ui/react";

const images = [
  {
    id: 1,
    url: "bg.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    url: "https://media.istockphoto.com/id/1359619252/vector/green-meadow-with-white-clouds-summer-green-view-landscape-background-illustration.jpg?s=612x612&w=0&k=20&c=YggMbY3s0TLrIWpzU0fRj0tgc2JrLZti9-3YLnJi5EU=",
    alt: "Image 2",
  },
  {
    id: 3,
    url: "https://via.placeholder.com/150x150?text=Image+3",
    alt: "Image 3",
  },
];

const Maps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Flex align="center" justify="center">
      <IconButton
        aria-label="Previous"
        icon={<ArrowLeftIcon />}
        onClick={handlePrevClick}
      />
      <Box w="300px" h="200px">
        <Image
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          objectFit="fill"
        />
      </Box>
      <IconButton
        aria-label="Next"
        icon={<ArrowRightIcon />}
        onClick={handleNextClick}
      />
    </Flex>
  );
};

export default Maps;
