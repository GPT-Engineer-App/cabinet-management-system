import { Box, Button, Container, Heading, VStack, HStack, Input, Image, Text, Table, Thead, Tbody, Tr, Th, Td, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaShippingFast, FaHistory, FaCheck, FaBan, FaArchive } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleAddPosition = () => {
    // Placeholder for function to add a position to the internal stock
    toast({
      title: "Position added",
      description: "The new position has been added to the internal stock.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleRequestPermission = () => {
    // Placeholder for function to request permission for shipment
    toast({
      title: "Permission requested",
      description: "Request sent to 'Cerber' and 'Quarry Manager'.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={5}>
      <Heading mb={5}>Master Cabinet</Heading>
      <VStack spacing={5} align="stretch">
        {/* Section A: Add a position to the internal stock */}
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md" mb={3}>
            Add Position to Internal Stock
          </Heading>
          <HStack>
            <Input placeholder="Unit/BZ Name" />
            <Input placeholder="Dimensions" />
            <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddPosition}>
              Add
            </Button>
          </HStack>
          <Text mt={2}>Upload photo:</Text>
          <Input type="file" mt={1} />
        </Box>

        {/* Section B: Internal stock */}
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md" mb={3}>
            Internal Stock
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Unit/BZ Name</Th>
                <Th>Dimensions</Th>
                <Th isNumeric>Quantity</Th>
                <Th>Photo</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* Example of stock position */}
              <Tr>
                <Td>Granite Block</Td>
                <Td>200x100x50cm</Td>
                <Td isNumeric>10</Td>
                <Td>
                  <Image src="https://images.unsplash.com/photo-1623707795628-613cd31f8548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxncmFuaXRlJTIwYmxvY2t8ZW58MHx8fHwxNzA5NjMzODczfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Granite Block" boxSize="100px" objectFit="cover" />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        {/* Section C: Shipments */}
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md" mb={3}>
            Shipments
          </Heading>
          <Button leftIcon={<FaShippingFast />} colorScheme="orange" onClick={handleRequestPermission}>
            Request Shipment Permission
          </Button>
          {/* Upcoming shipments table would be here */}
        </Box>

        {/* Section D: Shipment Archive */}
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md" mb={3}>
            Shipment Archive
          </Heading>
          {/* List of shipped items would be here */}
        </Box>

        {/* Section E: History Table */}
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md" mb={3}>
            History
          </Heading>
          <Text>All actions by users will be saved here.</Text>
          {/* History actions table would be here */}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
