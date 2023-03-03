import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

interface BulletProps {
  position: { x: number; y: number };
  velocity: { x: number; y: number };
  onFinished: () => void;
}

const Bullet = ({ position, velocity, onFinished }: BulletProps) => {
  const [bulletPosition, setBulletPosition] = useState({
    x: position.x + velocity.x,
    y: position.y + velocity.y,
  });
  // console.log(bulletPosition);

  useEffect(() => {
    const interval = setInterval(() => {
      setBulletPosition((prevPosition) => ({
        x: prevPosition.x + velocity.x,
        y: prevPosition.y + velocity.y,
      }));
    }, 16);

    return () => clearInterval(interval);
  }, [velocity]);

  useEffect(() => {
    if (
      bulletPosition.y + velocity.y <= 0 ||
      bulletPosition.x + velocity.x < 0 ||
      bulletPosition.x + velocity.x > 1400
    ) {
      onFinished();
    }
  }, [bulletPosition, velocity, onFinished]);

  return (
    <>
      <Box
        className="bullet"
        position={"absolute"}
        h="10px"
        w="10px"
        borderRadius={"50%"}
        bgColor="red"
        style={{
          left: bulletPosition.x + velocity.x,
          top: bulletPosition.y + velocity.y,
        }}></Box>
    </>
  );
};

export default Bullet;
