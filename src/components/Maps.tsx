import React, { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { useAppDispatch } from "../redux/app.hooks";
import { AddBackground } from "../redux/Actions/Actions";

const images = [
  {
    id: 1,
    url: "https://64.media.tumblr.com/e2fae2d22c00f60903c0e27f642e5c31/8cc5a7f4e87cb826-8d/s1280x1920/8a9f05a5f25b87cf3e1cbc962dd7e08924184ad5.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    url: "https://64.media.tumblr.com/b116c0fd6ab60e05bbdf9de7d3449fde/c94348603ffd26e3-ae/s1280x1920/4cb23d31a04b427f787e4f7048318f806c5f382e.jpg",
    alt: "Image 2",
  },
  {
    id: 3,
    url: "https://64.media.tumblr.com/dd938982174091e1bab9e970fae42292/4c91eb5bbafb2fd2-f7/s1280x1920/82640ef9eca346d716a70ca9dc97849bf5af9a5b.jpg",
    alt: "Image 3",
  },
];

const Maps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(AddBackground(images[currentIndex].url));
  }, [currentIndex]);

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
        bg="none"
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
        bg="none"
        aria-label="Next"
        icon={<ArrowRightIcon />}
        onClick={handleNextClick}
      />
    </Flex>
  );
};

export default Maps;
