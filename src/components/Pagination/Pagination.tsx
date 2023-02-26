import { PaginationButton } from "./PaginationButton";
import { CaretRight, CaretLeft } from "phosphor-react";
import { Flex, Text } from "@chakra-ui/react";

interface PaginationProps {
	totalItems: number;
	itemsPerPage: number;
	currentPage: number;
	onChangePage: (page: number) => void;
}

export function Pagination({
	totalItems,
	itemsPerPage,
	currentPage,
	onChangePage,
}: PaginationProps) {
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	let startPage, endPage;

	if (totalPages <= 6) {
		startPage = 1;
		endPage = totalPages;
	} else if (currentPage <= 4) {
		startPage = 1;
		endPage = 6;
	} else if (currentPage >= totalPages - 3) {
		startPage = totalPages - 5;
		endPage = totalPages;
	} else {
		startPage = currentPage - 2;
		endPage = currentPage + 2;
	}

	const pagePaginationButtons = [];

	for (let i = startPage; i <= endPage; i++) {
		pagePaginationButtons.push(i);
	}

	function handleClick(pageNumber: number) {
		if (pageNumber === 0) return;

		if (pageNumber > totalPages) return;

		onChangePage(pageNumber);
	}

	return (
		<Flex w="full" justify="space-between">
			<Text>
				Página: {currentPage} / {totalPages}
			</Text>

			<Flex gap="2">
				{currentPage >= 1 && (
					<PaginationButton onClick={() => handleClick(currentPage - 1)}>
						<CaretLeft size={20} />
					</PaginationButton>
				)}

				{startPage > 1 && (
					<PaginationButton onClick={() => handleClick(1)}>1</PaginationButton>
				)}

				{startPage > 2 && <Text>...</Text>}

				{pagePaginationButtons.map((pageNumber) => (
					<PaginationButton
						key={pageNumber}
						onClick={() => handleClick(pageNumber)}
						isDisabled={pageNumber === currentPage}
						_disabled={{
							background: "purple.500",
							_hover: "purple.600",
							color: "white",
						}}
					>
						{pageNumber}
					</PaginationButton>
				))}

				{endPage < totalPages - 1 && <Text>...</Text>}

				{endPage < totalPages && (
					<PaginationButton onClick={() => handleClick(totalPages)}>
						{totalPages}
					</PaginationButton>
				)}

				{currentPage <= totalPages && (
					<PaginationButton
						onClick={() => handleClick(currentPage + 1)}
						isDisabled={currentPage === totalItems ? true : false}
					>
						<CaretRight size={20} />
					</PaginationButton>
				)}
			</Flex>
		</Flex>
	);
}
