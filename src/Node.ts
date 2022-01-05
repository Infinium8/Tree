import type { TNode, TNodeData } from './types';

class Node {
	id: string;
	data: TNodeData;
	parent?: string;
	children: TNode[]

	constructor(id: string, node: TNode) {
		this.id = id;
		this.data = node?.data || {};
		this.parent = node?.parent;
		this.children = node?.children || [];
	}

	hasChildren = () => {
		return this.children.length > 0;
	}
}

export default Node;