import React, { useState } from 'react';
import Tree from '@infinium/tree';

const App = () => {
	const [tree, setTree] = useState(new Tree());
	tree.insert('root', 'new_node', { name: 'This is a new node.' });

	// tree.insert('root', 'test', {
	// 	data: {
	// 		color: 'cyan'
	// 	}
	// });

	// let i = 'root';

	// [...Array(100).keys()].forEach(e => {
	// 	const id = `test-${e}`;
	// 	tree.insert(i, id, {});
	// 	i = id;
	// });

	// const t0 = performance.now();

	// tree.find('test-99');

	// const t1 = performance.now();

	// console.log('TIME', t1 - t0);
	// console.log(tree.root)

	// tree.remove('test-65')
	// console.log(tree.find('test-65'))

	console.log(tree.remove('new_node'))

	return (
		<section className="section flex-c">
			<div className="container flex-c">
				{/* <p>{tree.find('test-99')?.id}</p> */}
				<p>{tree.find('new_node').id}</p>
			</div>
		</section>
	)
};

export default App;
