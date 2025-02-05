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
          return <p key={index}>Unknown block: {block.name}</p>;
        }

        return <BlockComponent key={index} data={JSON.parse(block.attributesJSON)} />;
      })}
    </div>
  );
};

export default RenderBlocksHelper;
