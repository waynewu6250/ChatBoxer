import React from 'react'
import { Grid, Divider } from 'semantic-ui-react'
export default function InfoBox(){
	return (
		<Grid.Column tablet={16} widescreen={4} largeScreen={4}>
			<div className='info_box'>
				<h1>Header</h1>
				<Divider />
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</div>
		</Grid.Column>
	)
}
