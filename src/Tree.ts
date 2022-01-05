import Node from './Node';

import type { TNode } from './types';

class Tree {
	root: TNode;

	constructor(children: TNode[] | undefined, data: any) {
		this.root = new Node('root', {
			...data,
			children
		});
	}

	// pre order traversal
	*preTraversal(node = this.root): Generator<TNode> {
		yield node;
		if (node.children.length) {
			for (let child of node.children) {
				yield* this.preTraversal(child);
			}
		}
	}

	// post order traversal
	*postTraversal(node = this.root): Generator<TNode> {
		if (node.children.length) {
			for (let child of node.children) {
				yield* this.postTraversal(child);
			}
		}
		yield node;
	}

	//////////

	insert = (parent: string, id: string, data: TNode) => {
		for (let node of this.preTraversal()) {
			if (node.id === parent) {
				node.children.push(new Node(id, {
					...data,
					parent
				}));
				return true;
			}
		}
		return false;
	}

	remove = (id: string) => {
		for (let node of this.preTraversal()) {
			const filtered = node.children.filter((c: TNode) => c.id !== id);
			if (filtered.length !== node.children.length) {
				node.children = filtered;
				return true;
			}
		}
		return false;
	}

	find = (id: string) => {
		for (let node of this.preTraversal()) {
			if (node.id === id) return node;
		}

		return undefined;
	}

	//////////

	stringify = () => {
		return JSON.stringify(this.root);
	}

	print = () => {
		console.log(this.root);
	}
}

export default Tree;