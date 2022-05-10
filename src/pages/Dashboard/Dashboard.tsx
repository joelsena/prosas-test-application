import { Box, Text } from "@chakra-ui/react";
import { CustomTable } from "../../components/CustomTable";

export function Dashboard() {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Dashboard
      </Text>

      <CustomTable
        caption="Propostas acima do valor limite"
        heads={[
          { content: "id" },
          { content: "Nome" },
          { isNumeric: true, content: "Valor" },
        ]}
        body={[
          {
            tds: [
              { content: "1" },
              { content: "Genial" },
              { isNumeric: true, content: "R$ 400,00" },
            ],
          },
          {
            tds: [
              { content: "1" },
              { content: "Genial" },
              { isNumeric: true, content: "R$ 400,00" },
            ],
          },
        ]}
      />
    </Box>
  );
}
