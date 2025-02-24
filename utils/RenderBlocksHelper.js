import blockComponentsMapping from "@/components/index";

const RenderBlocksHelper = ({ blocks }) => {
  if (!blocks || blocks.length === 0) {
    return <p>Page is empty</p>;
  }


  return (
    <div>
      {blocks.map((block, index) => {
        const BlockComponent = blockComponentsMapping[block.name];

        if (!BlockComponent) {
          console.log(`Block with name "${block.name}" is not found in Block Mapping`);
          return null;
        }

        return <BlockComponent key={index} data={JSON.parse(block.attributesJSON)} />;
      })}
    </div>
  );
};

export default RenderBlocksHelper;
