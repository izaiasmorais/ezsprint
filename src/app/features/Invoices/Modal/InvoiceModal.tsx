import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Flex,
} from "@chakra-ui/react";
import { useInvoicesModal } from "../../../../store/Invoices/useInvoicesModal";
import { ModalField } from "../../../components/Global/ModalField";
import { InvoiceStatusToggle } from "./InvoiceStatusToggle";

export function InvoiceModal() {
	const { isOpen, onClose } = useInvoicesModal();

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			data-testid="add-invoice-modal"
			size="md"
		>
			<ModalOverlay />
			<ModalContent mt="10rem">
				<ModalHeader>Adicionar Conta</ModalHeader>

				<ModalCloseButton />

				<ModalBody px="1.5rem">
					<Flex as="form" direction="column" gap="1rem">
						<ModalField name="Título" placeholder="Fatura da TV" />
						<ModalField name="Vencimento" type="date" />
						<ModalField name="Valor" placeholder="R$ 0,00" type="number" />
						<ModalField name="Parcelas" placeholder="0" type="number" />
						<InvoiceStatusToggle />
					</Flex>
				</ModalBody>

				<ModalFooter display="flex" gap="1rem">
					<Button colorScheme="red" onClick={onClose}>
						Cancelar
					</Button>

					<Button colorScheme="purple" mr={3}>
						Confirmar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
