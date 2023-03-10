import {
	Flex,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
} from "@chakra-ui/react";
import { GroupsView } from "../../views/Groups";
import { InvoicesView } from "../../views/Invoices";
import { ObservationsView } from "../../views/Observations";
import { PrintingLocationView } from "../../views/PritingLocation";
import { ProductsView } from "../../views/Products";
import { ProductTypeView } from "../../views/ProductTypeView";

export function AppTabs() {
	const TabNames = [
		"Grupos",
		"Produtos",
		"Observações",
		"Contas",
		"Local de impressão",
		"Tipo de produto",
	];

	return (
		<Flex>
			<Tabs variant="enclosed" border="transparent">
				<TabList w="850px" gap="1rem" ml="1rem" mb="-1rem" h="50px">
					{TabNames.map((item) => (
						<Tab
							key={item}
							maxWidth="max-content"
							color="white"
							transition="none"
							fontWeight={500}
							width="200px"
							_selected={{
								backgroundColor: "white",
								borderRadius: "1rem 1rem 0 0",
								color: "black",
							}}
						>
							{item}
						</Tab>
					))}
				</TabList>

				<TabPanels>
					<TabPanel>
						<GroupsView />
					</TabPanel>

					<TabPanel>
						<ProductsView />
					</TabPanel>

					<TabPanel>
						<ObservationsView />
					</TabPanel>

					<TabPanel>
						<InvoicesView />
					</TabPanel>

					<TabPanel>
						<PrintingLocationView />
					</TabPanel>

					<TabPanel>
						<ProductTypeView />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
}
