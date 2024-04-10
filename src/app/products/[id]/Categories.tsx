// Libs
import { Flex, Text } from '@chakra-ui/react';

// Apis
import { getCategoryList } from '@apis';

interface Props {
  categoryIds: string[];
}

const Categories = async ({ categoryIds }: Props): Promise<JSX.Element> => {
  // Fetch data for categories
  const { data: categoryList = [] } = await getCategoryList({
    ids: categoryIds,
  });

  const categories = categoryList.map((item) => item.name).join(', ');

  return (
    <Flex>
      <Text
        as="span"
        size="md"
        lineHeight="24px"
        color="productDetail.categoryTitle"
      >
        Category:&nbsp;
      </Text>
      <Text size="md" lineHeight="24px">
        {categories}
      </Text>
    </Flex>
  );
};

export default Categories;
