# Tree

A simple class representing a Tree-like data structure in JavaScript.

## Installation

`yarn add @infinium/tree`

or 

`npm install @infinium/tree`

## Basic initialization

```js
import Tree from '@infinium/tree';

// or
// const Tree = require('@infinium/tree');

const tree = new Tree();

tree.print(); // {"id":"root","data":{},"children":[]}
```

## Basic Tree Structure

The default tree, as you saw above, looks like this:

```json
{
    "id": "root",
    "data": {},
    "children": []
}
```

That is, there are no siblings for the base node, `root`. You can only ever create children.

To get the current tree in its entirety, simply access the `root` value on the current instance: `tree.root`.

The object you see above is a `Node`. It has three properties: `id: string`, `data: any`, `children: Node[]`

You can put anything you need into the `data` property.

## Usage

The `Tree` class exports a few methods to allow you to modify and traverse the tree as necessary. This section will document these methods.

### Generators

These methods recursively traverse the tree.

Use [this guide](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/) for understanding which function you should use.

#### `preTraversal(root: string)`

Returns a Generator that loops over each child node recursviely from starting point `root`. It defaults to the namesake. That is, if you want to traverse the entire tree, leave this argument empty.

**Usage:**

```js
for (let node of tree.traverse()) {
    console.log(node);
}
```

#### `postTraversal(root: string)`

Similar to above, but a Post-Order Traversal approach.

### Instance methods

#### `insert(parent: string, id: string, data: TNode : undefined)`

Create a new node at a specific position, `parent`.

That is, to insert directly to the top-level:

```js
tree.insert('root', 'new_node', { name: 'This is a new node.' });
tree.print()
```

This results in:

```json
{
    "id": "root",
    "data": {},
    "children":[
        {
            "id": "new_node",
            "data": {},
            "parent": "root",
            "children": []
        }
    ]
}
```

#### `find(id: string)`

Returns a Node with the specified `id`, if found.

**Usage:**

```js
console.log(tree.find('root').id) // "root"
```

#### `remove(id: string)`

Removes a Node with the specified `id`.

**Usage:**

```js
console.log(tree.remove('root')) // "false"
```

Note: You can't remove `root` because it is the base object for which all traversals operate in.

```js
console.log(tree.remove('new_node')) // "true"
```

### Other methods

#### `stringify()`

Returns a string value of the Tree.

```js
console.log(tree.stringify());
```

#### `print()`

Logs the current Tree value to the console.

```js
tree.print();
```