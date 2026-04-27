"use client";
import { Box, Button, ButtonGroup, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { AppHeading } from "../atoms/AppHeading";
import { AppText } from "../atoms/AppText";
import useEmblaCarousel from "embla-carousel-react";

type StoryItem = {
  id: string;
  name: string;
  stars: number[];
  review: string;
  imageUrl: string;
  job: string;
};

type StoriesType = StoryItem[];

const SuccessStories = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const stories: StoriesType = [
    {
      id: "1",
      name: "Sarah Jenkins",
      job: "Product Manager at TechCorp",
      stars: [1, 1, 1, 1, 1],
      review:
        "The AI suggestions were a game-changer. It helped me articulate my experience in a way that sounded incredibly professional. I landed interviews at top tech companies within weeks.",
      imageUrl: "/first-reviewer.jpg",
    },
    {
      id: "2",
      name: "David Chan",
      job: "Software Engineer",
      stars: [1, 1, 1, 1, 1],
      review:
        "I was struggling to get past ATS filters. After switching to one of ResumeCraft's optimized templates, my callback rate increased by 300%. The real-time preview is also fantastic.",
      imageUrl: "/second-reviewer.jpg",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      job: "Marketing Associate",
      stars: [1, 1, 1, 1, 0.5],
      review:
        "As a recent graduate, I had no idea how to structure my resume. The platform walked me through the process step-by-step. The templates are clean, modern, and exactly what employers want.",
      imageUrl: "/third-reviewer.jpg",
    },
    {
      id: "4",
      name: "Emily Rodriguez",
      job: "Marketing Associate",
      stars: [1, 1, 1, 1, 0.5],
      review:
        "As a recent graduate, I had no idea how to structure my resume. The platform walked me through the process step-by-step. The templates are clean, modern, and exactly what employers want.",
      imageUrl: "/third-reviewer.jpg",
    },
    {
      id: "5",
      name: "Emily Rodriguez",
      job: "Marketing Associate",
      stars: [1, 1, 1, 1, 1],
      review:
        "As a recent graduate, I had no idea how to structure my resume. The platform walked me through the process step-by-step. The templates are clean, modern, and exactly what employers want.",
      imageUrl: "/third-reviewer.jpg",
    },
  ];

  return (
    <Flex px="104px" py="96px" className="success-stories" width="100vw">
      <Flex width="100%" gap="64px" flexDir="column">
        <Flex width="100%" gap="10px" flexDir="column">
          <AppHeading>Success Stories</AppHeading>
          <Flex width="100%" justifyContent="space-between" alignItems="center">
            <AppText variant="heading" lineHeight="18px">
              Hear from professionals who landed their dream jobs using
              Resumate.
            </AppText>
            <ButtonGroup>
              <Flex
                justifyContent="center"
                alignItems="center"
                width="40px"
                height="40px"
                borderRadius="50%"
                border="solid 1px #E2E8F0"
                onClick={() => emblaApi?.scrollPrev()}
                cursor="pointer"
              >
                <i className="fa-solid fa-arrow-left "></i>
              </Flex>
              <Flex
                justifyContent="center"
                alignItems="center"
                width="40px"
                height="40px"
                borderRadius="50%"
                border="solid 1px #E2E8F0"
                onClick={() => emblaApi?.scrollNext()}
                cursor="pointer"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </Flex>
            </ButtonGroup>
          </Flex>
        </Flex>
        <>
          <div ref={emblaRef} style={{ overflow: "hidden" }}>
            <Flex className="success-carousel" gap="24px" width="100%">
              {stories.map((story) => (
                <Flex
                  key={story.id}
                  // minW="329px"
                  className="success-item"
                  flexDir="column"
                  bg="#F4F6F8"
                  borderRadius="16px"
                  border="1px solid #E2E8F0"
                  p="32px"
                  justifyContent="space-between"
                  gap="24px"
                >
                  <Flex
                    className="rating-stars"
                    gap="4px"
                    fontSize="13px"
                    color="#3B82F6"
                  >
                    {story.stars.map((star, index) => (
                      <i
                        key={index}
                        className={`fa-${star === 0 ? "regular" : "solid"} fa-star${star < 1 && star > 0 ? "-half-stroke" : ""}`}
                      ></i>
                    ))}
                  </Flex>
                  <AppText
                    variant="body"
                    color="#0F172A"
                    minWidth="325px"
                    maxW="329px"
                    lineHeight="26px"
                  >{`"${story.review}"`}</AppText>
                  <Flex gap="16px" alignItems="center" mt="8px">
                    <Image
                      w="48px"
                      h="48px"
                      border="solid 2px #ffff"
                      borderRadius="50%"
                      src={story.imageUrl}
                    />
                    <Flex flexDir="column" gap="2px">
                      <AppHeading
                        fontSize="14px"
                        lineHeight="20px"
                        color="#0F172A"
                      >
                        {story.name}
                      </AppHeading>
                      <AppText variant="tiny">{story.job}</AppText>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </div>

          {/* <Button onClick={() => emblaApi?.scrollPrev()}>Prev</Button>
          <Button onClick={() => emblaApi?.scrollNext()}>Next</Button> */}
        </>
      </Flex>
    </Flex>
  );
};

export default SuccessStories;
