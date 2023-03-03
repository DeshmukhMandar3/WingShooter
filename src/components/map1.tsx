import React, { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";

import Bullet from "./Bullet";
import Player from "./Player";

function Map1() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [playerPosition, setPlayerPosition] = useState({ x: 400, y: 550 });
  const [allowFire, setAllowFire] = useState(true);
  const [Reload, setReload] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(windowSize);

  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bullets, setBullets] = useState<
    Array<{
      position: { x: number; y: number };
      velocity: { x: number; y: number };
    }>
  >([]);
  console.log(bullets);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "ArrowLeft": {
          if (playerPosition.x > 0) {
            let newPosition = playerPosition.x - 10;
            setPlayerPosition({ x: newPosition, y: playerPosition.y });
          }
          break;
        }

        case "ArrowRight": {
          if (playerPosition.x <= windowSize.width - 100) {
            let newPosition = playerPosition.x + 10;
            setPlayerPosition({ x: newPosition, y: playerPosition.y });
          }
          break;
        }
        default: {
          break;
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [playerPosition.x, playerPosition.y]);

  // bullet get out of screen need to reset bullet array
  const handleBulletFinished = (index: number) => {
    setReload(false);
    setAllowFire(true);

    setBullets([]);
  };

  // function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
  //   setMousePosition({ x: event.clientX, y: event.clientY });
  // }

  function handleMouseClick(event: React.MouseEvent<HTMLDivElement>) {
    if (allowFire) {
      handleShoot(event);
    } else {
      setReload(true);
      console.log("wait");
    }
  }

  const handleShoot = (event: React.MouseEvent<HTMLDivElement>) => {
    setAllowFire(false);
    // mouse positions
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // player positions
    const deltaX = mouseX - playerPosition.x;
    const deltaY = mouseY - playerPosition.y;

    // angle between player and mouse
    const angle = Math.atan2(deltaY, deltaX);
    // const angleDegrees = angle * (180 / Math.PI);

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    console.log(distance);

    // ... create new bullet with angle and distance
    const bulletVelocity = 15; // set the bullet's speed
    const bulletPosition = { x: playerPosition.x, y: playerPosition.y };
    const bulletVelocityX = Math.cos(angle) * bulletVelocity;
    const bulletVelocityY = Math.sin(angle) * bulletVelocity;

    const newBullet = {
      position: bulletPosition,
      velocity: { x: bulletVelocityX, y: bulletVelocityY },
    };

    setBullets([...bullets, newBullet]);
  };

  return (
    // box_1 full map
    <Box
      bgImg={"./bg.jpg"}
      bgSize="contain"
      bgPos={"center"}
      h={680}
      w={windowSize.width}
      userSelect="none"
      overflowX="hidden">
      {/* fire zone */}
      <Box onClick={handleMouseClick} h="50%">
        <Player x={playerPosition.x} y={playerPosition.y} Reload={Reload} />
        {bullets.map((bullet, index) => (
          <Bullet
            key={index}
            position={bullet.position}
            velocity={bullet.velocity}
            onFinished={() => handleBulletFinished(index)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Map1;
