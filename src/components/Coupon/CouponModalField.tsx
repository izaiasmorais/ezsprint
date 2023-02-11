import { Flex, Text, Input, InputProps } from "@chakra-ui/react";

interface FormFieldProps extends InputProps {
	name: string;
	placeholder: string;
}

export function CouponModalField({
	name,
	placeholder,
	...rest
}: FormFieldProps) {
	return (
		<Flex direction="column" gap=".5rem" w="full">
			<Text fontWeight={500} fontSize="14px">
				{name}
			</Text>
			<Input
				placeholder={placeholder}
				name={name}
				borderRadius=".5rem"
				focusBorderColor="purple.400"
				{...rest}
			/>
		</Flex>
	);
}