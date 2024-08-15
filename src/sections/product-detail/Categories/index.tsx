// Libs
import { Flex, Text } from '@chakra-ui/react';

// Apis
import { getCategoryList } from '@apis';

// Utils
import { getNamesFromList } from '@utils';

interface CategoriesProps {
  categoryIds: number[];
}

const Categories = async ({
  categoryIds,
}: CategoriesProps): Promise<JSX.Element> => {
  // Fetch data for categories
  const { data: categoryList = [] } = await getCategoryList({
    ids: categoryIds,
  });

  const categories = getNamesFromList(categoryList);

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
