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

import { dataAddEdital } from "../../features/data";
import { GenerateID } from "../../utils/generateID";

export function AddEdital() {
    const [formData, setFormData] = useState({
        editalName: "",
        proposalLimitValue: 0,
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
        const { editalName, proposalLimitValue } = formData;

        dispatch(
            dataAddEdital({
                id: GenerateID(3),
                name: editalName,
                proposalLimitValue: Number(proposalLimitValue),
            })
        );
        toast({
            title: "Edital Criado!!",
            description: "Criamos o edital para você",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
    };
    return (
        <Container mt={8}>
            <Box>
                <Text fontSize="2xl" fontWeight="bold">
                    Cadastrar Edital
                </Text>
                <form onSubmit={HandleFormSubmit}>
                    <VStack spacing={2}>
                        <FormControl>
                            <FormLabel>Nome do edital</FormLabel>
                            <Input
                                name="editalName"
                                placeholder="Nome"
                                value={formData.editalName}
                                onChange={HandleInputChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Valor limite por proposta</FormLabel>
                            <InputGroup>
                                <InputLeftAddon children="R$" />
                                <Input
                                    name="proposalLimitValue"
                                    placeholder="R$ 999,99"
                                    value={formData.proposalLimitValue}
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
