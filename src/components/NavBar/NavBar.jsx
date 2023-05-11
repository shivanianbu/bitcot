import React from 'react'
import { Flex, Box, Text, Container, Button, Stack } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Box p={2}
      w="100%"
      as="nav"
      bgGradient='linear(#0098FF 0%, #0082FF 25%, #0070FF 50%)'
    >
      <Container maxWidth='1200px'>
        <Stack direction={['column', 'row']}
          align="center"
          justify="space-between"
          color={'white'}
          flexWrap={'wrap'}
        >
          <Text
            fontSize="3xl"
            fontWeight="semibold"
          >
            DEMO Streaming
          </Text>
          <Stack spacing={[3, 10]}
            direction={['column', 'row']}
            align="center"
            justifyContent="space-between"
          >
            <Text fontSize="md"> Log in </Text>
            <Button bg='#424242' variant='solid' borderRadius={0}>
              Start your free trial
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default NavBar