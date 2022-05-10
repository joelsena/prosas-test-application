import {
    Box,
    FormControl,
    Input,
    FormLabel,
    Text,
    Container,
    VStack,
    Button,
    useToast,
    InputGroup,
    InputLeftAddon,
} from "@chakra-ui/react";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";

import { dataAddProposal } from "../../features/data";
import { GenerateID } from "../../utils/generateID";

type ProposalFormData = {
    proposalName: string;
    requestedValue: number;
};

export function AddProposal() {
    const [formData, setFormData] = useState<ProposalFormData>({
        proposalName: "",
        requestedValue: 0,
    });
    const dispatch = useDispatch();
    const toast = useToast();

    const HandleInputChange: ChangeEventHandler<HTMLInputElement> = ({
        target,
    }) => {
        setFormData((prev) => ({
            ...prev,
            [target.name]: target.value,
        }));
    };

    const HandleFormSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        const { proposalName, requestedValue } = formData;

        dispatch(
            dataAddProposal({
                id: GenerateID(3),
                name: proposalName,
                requestedValue: Number(requestedValue),
            })
        );

        toast({
            title: "Proposta Criada!!",
            description: "Criamos a Proposta para você",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
    };

    return (
        <Container mt={8}>
            <Box>
                <Text fontSize="2xl" fontWeight="bold">
                    Adicionar Proposta
                </Text>
                <form onSubmit={HandleFormSubmit}>
                    <VStack spacing={2}>
                        <FormControl>
                            <FormLabel>Nome da proposta</FormLabel>
                            <Input
                                name="proposalName"
                                placeholder="Nome"
                                value={formData.proposalName}
                                onChange={HandleInputChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Valor solicitado</FormLabel>
                            <InputGroup>
                                <InputLeftAddon children="R$" />
                                <Input
                                    name="requestedValue"
                                    placeholder="R$ 999,99"
                                    value={formData.requestedValue}
                                    onChange={HandleInputChange}
                                />
                            </InputGroup>
                        </FormControl>
                    </VStack>
                    <Button type="submit" mt={4}>
                        Enviar
                    </Button>
                </form>
            </Box>
        </Container>
    );
}
