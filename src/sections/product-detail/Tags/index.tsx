// Libs
import { Flex, Text } from '@chakra-ui/react';

// Apis
import { getTagList } from '@apis';

// Utils
import { getNamesFromList } from '@utils';

interface Props {
  tagIds: number[];
}

const Tags = async ({ tagIds }: Props): Promise<JSX.Element> => {
  // Fetch data for tags
  const { data: tagList = [] } = await getTagList({ ids: tagIds });

  const tags = getNamesFromList(tagList);

  return (
    <Flex>
      <Text
        as="span"
        size="md"
        lineHeight="24px"
        color="productDetail.categoryTitle"
      >
        Tags:&nbsp;
      </Text>
      <Text size="md" lineHeight="24px">
        {tags}
      </Text>
    </Flex>
  );
};

export default Tags;
