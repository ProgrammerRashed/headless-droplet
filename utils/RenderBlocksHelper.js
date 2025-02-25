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
          if (process.env.NODE_ENV === 'development') {
            console.log(`Block with name "${block.name}" is not found in Block Mapping`);
          }
          return null;
        }

        if (process.env.NODE_ENV === 'development') {
          console.log(`Rendering block: ${block.name}`);
        }

        return <BlockComponent key={index} data={JSON.parse(block.attributesJSON)} />;
      })}
    </div>
  );
};

export default RenderBlocksHelper;