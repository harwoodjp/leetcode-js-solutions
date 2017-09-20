class TreeNode {
	constructor(val) {
		this.val = val;
	}
}

const constructMaximumBinaryTree = function(nums) {

	const insert = (tree, node) => {
		if (tree && tree.val > node.val) {
			let temp = insert(tree.right, node)
			tree.right = temp
			return tree
		} else {
			node.left = tree
			return node
		}
	}

	let tree = null

	for (let num of nums) {
		let node = new TreeNode(num)
		tree = insert(tree, node)
	}

	return tree

}

console.log(constructMaximumBinaryTree([3,2,1,6,0,5]))
