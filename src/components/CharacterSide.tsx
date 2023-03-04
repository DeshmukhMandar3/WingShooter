import React, { useEffect, useRef, useState } from "react";

import { Box } from "@chakra-ui/react";

import Bullet from "./Bullet";
import Player from "./Player";
import Ducks from "./Ducks";
import { RootState } from "../redux/Store";
import { useSelector } from "react-redux";
import Enemy from "./enemy/enemy";
import { useAppDispatch } from "../redux/app.hooks";
import { GameOver } from "../redux/Actions/Actions";

function CharacterSide() {
  const [gameOver, setGameOver] = useState(false);

  // get map(background) from redux
  const state = useSelector((state: RootState) => state.UserManager);
  const { background_image } = state;

  const dispatch = useAppDispatch();

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [playerPosition, setPlayerPosition] = useState({
    x: Math.floor((windowSize.width - 130) / 2),
    y: windowSize.height - 160,
  });

  // enemy position
  const [enemyPosition, setEnemyPosition] = useState({
    x: windowSize.width - 250,
    y: windowSize.height - 160,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setEnemyPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x - 1,
      }));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    for (let x = playerPosition.x - 65; x >= playerPosition.x - 80; x--) {
      if (enemyPosition.x === x && enemyPosition.y === playerPosition.y) {
        console.log("collide");
        handleSound(2);
        setGameOver(true);
        dispatch(GameOver());
      }
    }

    if (enemyPosition.x <= 0) {
      setEnemyPosition({
        x: windowSize.width - 250,
        y: windowSize.height - 160,
      });
    }
  }, [enemyPosition.x]);
  // enemy position

  const [isJumping, setIsJumping] = useState(false);
  const [currentSoundIndex, setCurrentSoundIndex] = useState(0);

  // audio zone
  const audioRef = useRef<HTMLAudioElement>(null);

  const soundList = [
    { src: "./gun_shot.mp3", label: "gun_shot" },
    { src: "./jet_sound.mp3", label: "jet_sound" },
    { src: "./gameOver.mp3", label: "gameOver" },
  ];

  const handleSound = (index: number) => {
    setCurrentSoundIndex(index);
    if (audioRef.current) {
      audioRef.current.src = soundList[index].src;
      audioRef.current.play();
    }
  };

  // audio zone end

  // useEffect for windows size calculation
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    setPlayerPosition({
      x: Math.floor((windowSize.width - 130) / 2),
      y: windowSize.height - 160,
    });
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]);

  const [bullets, setBullets] = useState<
    Array<{
      position: { x: number; y: number };
      velocity: { x: number; y: number };
    }>
  >([]);

  // useEffect to perform player movement
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

        case "j": {
          if (!isJumping) {
            handleSound(1);
            setIsJumping(true);
            let newPosition = playerPosition.y - 100;
            setPlayerPosition({ x: playerPosition.x, y: newPosition });

            setTimeout(() => {
              setPlayerPosition({
                x: playerPosition.x,
                y: newPosition + 100,
              });
              setIsJumping(false);
            }, 1000);
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
    setBullets([]);
  };

  function handleMouseClick(event: React.MouseEvent<HTMLDivElement>) {
    handleSound(0);
    handleShoot(event);
  }

  const handleShoot = (event: React.MouseEvent<HTMLDivElement>) => {
    // setAllowFire(false);
    // mouse positions
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // player positions
    const deltaX = mouseX - playerPosition.x;
    const deltaY = mouseY - playerPosition.y;

    // angle between player and mouse
    const angle = Math.atan2(deltaY, deltaX);

    // const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // ... create new bullet with angle and distance
    const bulletVelocity = 75; // set the bullet's speed
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
    <Box
      border={"2px solid red"}
      // bgImage dynamic using redux
      bgImage={`url(${background_image})`}
      // bgImage="./bg.jpg"
      bgSize={windowSize.width >= 1100 ? "contain" : "cover"}
      bgPos={"center"}
      h="96vh"
      w="100%"
      userSelect="none"
    >
      <Box
        onClick={(event) => {
          handleMouseClick(event);
        }}
        h="70vh"
      >
        <Ducks />
        <Box display={"flex"}>
          <Player x={playerPosition.x} y={playerPosition.y} />
          <Enemy x={enemyPosition.x} y={enemyPosition.y} />
        </Box>
        <audio ref={audioRef}>
          <source src={soundList[currentSoundIndex].src} type="audio/mpeg" />
        </audio>

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

export default CharacterSide;
