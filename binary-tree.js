/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) {
      return 0;
    }
  
    function findMinDepth(node) {
      if (!node) {
        return Number.MAX_SAFE_INTEGER; // Initialize with a large value
      }
      if (!node.left && !node.right) {
        return 1; // Leaf node
      }
  
      const leftDepth = findMinDepth(node.left);
      const rightDepth = findMinDepth(node.right);
  
      return 1 + Math.min(leftDepth, rightDepth);
    }
  
    return findMinDepth(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) {
      return 0;
    }
  
    function findMaxDepth(node) {
      if (!node) {
        return 0;
      }
  
      const leftDepth = findMaxDepth(node.left);
      const rightDepth = findMaxDepth(node.right);
  
      return 1 + Math.max(leftDepth, rightDepth);
    }
  
    return findMaxDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) {
      return 0;
    }
  
    let maxSum = Number.MIN_SAFE_INTEGER;
  
    function findMaxSum(node) {
      if (!node) {
        return 0;
      }
  
      const leftMax = Math.max(0, findMaxSum(node.left));
      const rightMax = Math.max(0, findMaxSum(node.right));
  
      maxSum = Math.max(maxSum, leftMax + rightMax + node.val);
  
      return Math.max(leftMax, rightMax) + node.val;
    }
  
    findMaxSum(this.root);
  
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let nextLargerValue = null;
  
    function findNextLarger(node) {
      if (!node) {
        return;
      }
  
      if (node.val > lowerBound) {
        if (!nextLargerValue || node.val < nextLargerValue) {
          nextLargerValue = node.val;
        }
      }
  
      findNextLarger(node.left);
      findNextLarger(node.right);
    }
  
    findNextLarger(this.root);
  
    return nextLargerValue;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
