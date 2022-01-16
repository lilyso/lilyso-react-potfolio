import React from "react";
import { Box, Flex, Text, Button, Container } from "@chakra-ui/react";

export default function About() {
  return (
    <Container mx={4} p={4}>
      <Button mb={4}>Download Resume</Button>
      <Text m={4}>FRONT END</Text>
      <Text m={8}>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>TailwindCSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>React</li>
        </ul>
      </Text>
      <Text m={4}>BACK END</Text>
      <Text m={8}>
        <ul>
          <li>APIs</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </Text>
    </Container>
  );
}
