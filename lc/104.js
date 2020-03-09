/*
Given a binary tree, find its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Note: A leaf is a node with no children.

Example: Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

// inner recursive
const maxDepth = (root) => {
  let maxDepth = 0; 
  let DFS = (node, level) => {
      if (node === null) return;
      if (level > maxDepth) maxDepth = level;
      DFS(node.left, level + 1);
      DFS(node.right, level + 1);
  }
  DFS(root, 1);
  return maxDepth;
};

// one-line recursive
const maxDepthOpt = function(root) {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};