interface TNode {
	id?: string;
	data: TNodeData;
	parent?: string;
	children: TNode[];
}

type TNodeData = any;

export type {
	TNode,
	TNodeData,
}