import stylematic from 'stylematic';

function style(oldNode, newNode) {
  const newStylematic = newNode.data.style;
  if (newStylematic) {
    const { className } = stylematic(newStylematic);
    const classHash = newNode.data.class || {};
    classHash[className] = true;
    newNode.data.class = classHash;
  }
}


export default {
  create: style,
  update: style,
};
