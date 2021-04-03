exports.onCreateNode = ({ node }) => {
  // console.log(`Node created of type "${node.internal.type}"`);
  if (node.internal.type === `MarkdownRemark`) {
    console.log("hihi", node.internal.type);
  }
};
