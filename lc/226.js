/*
Invert a binary tree.

Example
Input:
     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:
     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {TreeNode}
 */


const invertTree = function(root) {
  if (root === null) return null; // return null if no root node
  if (root.left === null && root.right === null) return root; // return self node if it's a leaf
  
  let temp = root.left; // store left child in temp for swap
  root.left = root.right; // swap right child into left
  root.right = temp; // store left child into right
  
  invertTree(root.left); // recursively traverse left
  invertTree(root.right); // recursively traverse right
  
  return root; // return inverted tree 
};